"use client";
import { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Button,
  CardBody,
  Chip,
  Avatar,
  CardFooter,
  Select,
  Option,
  Switch,
  CardHeader,
} from "@material-tailwind/react";
import { IoIosRefresh } from "react-icons/io";
import Heading from "@/components/ui/heading/Heading";
import DefaultBtn from "@/components/ui/buttons/DefaultBtn";
import { RiCoupon4Line } from "react-icons/ri";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import PaginationBtn from "@/components/ui/PaginationBtn";
import Link from "next/link";

const statusColors = {
  confirmed: "bg-blue-100 text-blue-800",
  packed: "bg-yellow-100 text-yellow-800",
  shipped: "bg-indigo-100 text-indigo-800",
  delivered: "bg-green-100 text-green-800",
  canceled: "bg-red-100 text-red-800",
};

const Page = () => {
  const searchParams = useSearchParams();
  const [meta, setMeta] = useState({});

  const [orders, setOrders] = useState([]);

  const handleStatusChange = async (id, field, newStatus) => {
    try {
      const res = await fetch(`/api/private/order/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ [field]: newStatus }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Status updated successfully");
        setOrders((prevOrders) => {
          return prevOrders.map((order) => {
            if (order._id === id) {
              if (field === "isPaid") {
                return { ...order, isPaid: data.isPaid };
              } else if (field === "status") {
                return { ...order, status: data.status };
              }
            }
            return order;
          });
        });
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  const getOrders = async (page) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/order?size=7&page=${page}`
      );
      const data = await res.json();
      setOrders(data.data);
      setMeta(data.pagination);
    } catch (e) {
      console.error("Failed to fetch Orders", e);
    }
  };

  const currentPage = searchParams.get("page");
  useEffect(() => {
    getOrders(currentPage);
  }, [currentPage]);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const btns = [
    <DefaultBtn
      key={1}
      icon={<IoIosRefresh />}
      title={"Refresh"}
      clickHandler={() => {
        getOrders();
      }}
    />,
  ];

  return (
    <Card className="h-full w-full shadow-none">
      <CardHeader className="py-3 shadow-none mt-2">
        <Heading
          icon={
            <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
              <RiCoupon4Line size={20} color="white" />
            </div>
          }
          title={"Order Details"}
          buttons={btns}
        />
      </CardHeader>
      <CardBody className="p-2 mx-8">
        <table className="w-full min-w-max table-auto text-left">
          <thead className="bg-gray-100">
            <tr className="text-center">
              <th className="py-4 w-auto">Order By</th>
              <th className="w-auto">Amount</th>
              <th className="w-auto">Order Date</th>
              <th className="w-auto">Status</th>
              <th className="w-auto">Payment Method</th>
              <th className="w-auto">Pay Status</th>
              <th className="w-auto">Select</th>
              <th className="w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => {
              const isLast = index === orders.length - 1;
              const classes = isLast ? "p-2" : "p-2 border-b border-gray-200";

              return (
                <tr key={order._id} className="text-center hover:bg-gray-50">
                  <td className={`${classes}  px-0 w-60 pl-5`}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={order.user.image.url}
                        alt="image"
                        size="sm"
                      />
                      <div className="flex flex-col items-start">
                        <div className="font-bold capitalize">
                          {order.user.name}
                        </div>
                        <div className="text-sm opacity-50">
                          {order.user.phoneNumber}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      &#8377;{order.totalAmount}
                    </Typography>
                  </td>
                  <td className={`${classes} px-5`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {formatDate(order.createdAt)}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Chip
                      size="sm"
                      variant="ghost"
                      value={order.status}
                      className={`${statusColors[order.status]} py-2 px-0 text-center rounded-full`}
                    />
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal uppercase"
                    >
                      {order.paymentMethod}
                    </Typography>
                  </td>
                  <td className={`${classes} w-16 text-center`}>
                    <Select
                      label="Select status"
                      value={order.isPaid ? "paid" : "unpaid"}
                      color="blue"
                      onChange={(value) =>
                        handleStatusChange(
                          order._id,
                          "isPaid",
                          value === "paid"
                        )
                      }
                    >
                      <Option value="paid">Paid</Option>
                      <Option value="unpaid">Unpaid</Option>
                    </Select>
                  </td>
                  <td className={`${classes} w-32`}>
                    <Select
                      label="Select status"
                      color="blue"
                      className=""
                      value={order.status}
                      onChange={(value) =>
                        handleStatusChange(order._id, "status", value)
                      }
                    >
                      <Option value="confirmed">Confirmed</Option>
                      <Option value="packed">Packed</Option>
                      <Option value="shipped">Shipped</Option>
                      <Option value="delivered">Delivered</Option>
                      <Option value="canceled" disabled>
                        Canceled
                      </Option>
                    </Select>
                  </td>
                  <td className={classes}>
                    <Link href={`/admin/orders/${order._id}`}>
                      <Button variant="outlined" color="blue">
                        View
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter>
        <PaginationBtn totalPages={meta.totalPages} />
      </CardFooter>
    </Card>
  );
};

export default Page;
