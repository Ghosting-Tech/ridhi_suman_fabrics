"use client";
import React, { useEffect, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import Heading from "@/components/ui/heading/Heading";
import { FaAddressCard, FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import CheckoutProductCard from "@/components/layout/home/checkout/CheckoutProductCard";
import CheckOutFormModel from "@/components/layout/home/checkout/CheckOutFormModel";
import { SparklesIcon } from "@heroicons/react/24/solid";
import ListOfCoupon from "@/components/modals/coupon/ListOfCoupon";
import { getSession, useSession } from "next-auth/react";
import { toast } from "sonner";
import { clearCart } from "@/redux/slice/cartSlice";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [shippingData, setShippingData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
  });
  const [openListOfCoupon, setOpenListOfCoupon] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart?.totalPrice);
  }, [cart?.totalPrice]);
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSubmitOrder = async () => {
    try {
      // Validate that at least one product is in the cart
      if (cart.items.length <= 0) {
        toast.error("Minimum one product is required");
        return;
      }

      // Validate that all required shipping data fields are filled out
      if (
        !shippingData.name ||
        !shippingData.phoneNumber ||
        !shippingData.city ||
        !shippingData.state ||
        !shippingData.address ||
        !shippingData.pincode
      ) {
        toast.error("All shipping data is required except email.");
        return;
      }

      // Check if the user is logged in
      if (!session.user._id) {
        toast.error("Login before continue!");
        return;
      }

      // Ensure that the total amount is available and valid
      if (!cart.totalPrice) {
        toast.error("An error occurred while processing amount!");
        return;
      }

      // Prepare the order data object

      const cartItems = cart.items.map((item) => {
        const productObject = {
          productId: item._id,
          quantity: item.quantity,
          size: item.size,
          colour: item.color,
        };
        return productObject;
      });

      const orderData = {
        cartItems,
        shippingInfo: shippingData,
        user: session.user._id,
        totalAmount: cart.totalPrice + 120,
        paymentMethod: "Phone Pay", // Update payment method as needed
        isPaid: false,
      };

      const res = await fetch(`/api/private/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const order = await res.json();

      if (res.ok) {

        console.log("session", session)
        try {
          const response = await fetch(
            `/api/private/payments/initiate-payment`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                orderId: order._id,
                amount: order.totalAmount + 120,
                userId: session.user._id,
                userPhoneNumber: session.user.phoneNumber,
              }),
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();

          console.log("phone pe data", data);
          // Handle the response data
        } catch (err) {
          toast.error("Error while submitting payment");
          console.log(err);
        }

        // toast.success("Order placed successfully!");
        // dispatch(clearCart());
        // setShippingData({
        //   name: "",
        //   phoneNumber: "",
        //   email: "",
        //   city: "",
        //   state: "",
        //   pincode: "",
        //   address: "",
        // });
        // router.push("/my-orders");
      } else {
        toast.error("An error occurred while placing order!");
      }
    } catch (err) {
      toast.error("Error while submitting order");
      console.log(err);
    }
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <Heading
        icon={
          <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
            <FaCheck size={18} color="white" />
          </div>
        }
        title={"Shipping Information | Payment Details"}
      />

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-2/5 bg-white shadow-lg border rounded-lg p-4">
          <Typography variant="h4" color="blue-gray">
            Current Order
          </Typography>
          <Typography color="gray" className="my-1 font-normal">
            The sum of all total payments for goods there
          </Typography>
          <div className="max-h-96 overflow-y-auto">
            {cart.items?.map((product, index) => (
              <CheckoutProductCard key={product._id} data={product} />
            ))}
          </div>
          <div
            onClick={() => setOpenListOfCoupon(!openListOfCoupon)}
            className="flex items-center gap-1 cursor-pointer mt-4 py-2 justify-center rounded-md bg-gradient-to-r from-red-400 to-pink-400 text-white shadow-md shadow-pink-100 hover:scale-95 transition-all duration-500"
          >
            Apply coupon <SparklesIcon className="h-4 w-4" />
          </div>
          <ListOfCoupon
            open={openListOfCoupon}
            setOpen={setOpenListOfCoupon}
            setTotalAmount={setTotalAmount}
          />
          <div className="pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery Service</span>
              <span>₹120</span>
            </div>
            <hr className="my-2 bg-gray-400 h-px" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{totalAmount + 120}</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/5 flex flex-col gap-4 bg-white shadow-lg border p-6 rounded-lg">
          <Heading
            icon={
              <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
                <FaAddressCard size={20} color="white" />
              </div>
            }
            title={"Continue with your Shipping Information "}
          />
          <CheckOutFormModel data={shippingData} setData={setShippingData} />
          <div className="bg-gray-100 border-l-4 border-pink-500 text-gray-700 p-4 mb-6 rounded-lg shadow-md">
            <h2 className="font-semibold text-lg mb-2 text-pink-700">
              Important Information
            </h2>
            <ul className="list-disc ml-4 space-y-2">
              <li className="text-xs lg:text-base">
                Check your order information in the order page of your profile!
              </li>
              <li className="text-xs lg:text-base">
                Refunds will be credited within 2-3 working days after receiving
                returns.
              </li>
              <li className="text-xs lg:text-base">
                Ensure discount codes are applied before checkout; they cannot
                be added afterward.
              </li>
              <li className="text-xs lg:text-base">
                Shipping times may vary due to high demand or unforeseen
                circumstances.
              </li>
            </ul>
          </div>
          <Button
            className="rounded w-full"
            variant="gradient"
            size="lg"
            onClick={handleSubmitOrder}
            color="teal"
          >
            Pay ₹{totalAmount + 120}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
