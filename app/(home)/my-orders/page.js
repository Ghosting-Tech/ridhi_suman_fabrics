"use client";
import OrderCard from "@/components/layout/home/orders/OrderCard";
import PaginationBtn from "@/components/ui/PaginationBtn";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "sonner";

const Page = () => {
  const { data: session, status } = useSession();
  const [orders, setOrders] = useState([]);
  const [meta, setMeta] = useState({});
  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  useEffect(() => {
    if (session) {
      const fetchOrders = async () => {
        try {
          const response = await fetch(`/api/user/orders?page=${page}`, {
            cache: "no-store",
          });
          const ordersData = await response.json();
          if (!response.ok) {
            toast.error("Failed to fetch orders");
            return;
          }
          setOrders(ordersData.data);
          setMeta(ordersData.meta);
        } catch (err) {
          toast.error(err.message);
        }
      };

      fetchOrders();
    }
  }, [session, page]); // Only fetch orders if the session is available

  if (status === "loading") {
    return <AiOutlineLoading className="animate-spin" />;
  }

  if (!session) {
    return <div>Please log in to access this page.</div>;
  }

  return (
    <div>
      <div className="w-full text-center text-3xl font-aclonica flex justify-center mt-4 gap-2 text-gray-700">
        Welcome, <div className="text-blue-500">{session.user.name}</div>
      </div>
      {orders.length > 0 ? (
        <div>
          <div className="grid grid-cols-3 gap-4 px-6 my-8">
            {orders.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </div>
          <PaginationBtn totalPages={meta.totalPages} />
        </div>
      ) : (
        <div>No orders found.</div>
      )}
    </div>
  );
};

export default Page;
