import UserCard from "@/components/layout/admin/users/UserCard";
import Heading from "@/components/ui/heading/Heading";
import PaginationBtn from "@/components/ui/PaginationBtn";
import React, { Suspense } from "react";
import { RiCoupon4Line } from "react-icons/ri";
async function getUsers(page, size) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/users?page=${page || 1}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async ({ searchParams: { page, size } }) => {
  const data = await getUsers(page, size);

  return (
    <main className="p-4 flex flex-col gap-4">
      <Heading
        icon={
          <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
            <RiCoupon4Line size={20} color="white" />
          </div>
        }
        title={"Coupon Details"}
      />

      <Suspense>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full px-4">
          {data.data?.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </div>
      </Suspense>

      <PaginationBtn totalPages={data.meta?.totalPages} />
    </main>
  );
};

export default page;
