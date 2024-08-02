"use server";

import { IoIosHeart } from "react-icons/io";

import { cookies } from "next/headers";
import React, { Suspense } from "react";

import ProductList from "@/components/layout/products/ProductList";

import Heading from "@/components/ui/heading/Heading";
import PaginationBtn from "@/components/ui/PaginationBtn";
import ProductListSkeleton from "@/components/ui/skeletons/product/ProductListSkeleton";

async function getWishlist(page = 1, size = 12) {
  const cookieStore = cookies();
  const token = cookieStore.get("next-auth.session-token");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/wishlist?page=${page}&size=${size}&populate=true`,
    {
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const WishlistPage = async ({ searchParams: { page, size } }) => {
  const data = await getWishlist(page, size);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow mx-4 my-5 flex flex-col gap-5">
        <Heading
          icon={
            <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
              <IoIosHeart size={18} color="white" />
            </div>
          }
          title={"Your Wishlists"}
        />

        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={data.data} isWishlist={true} />
        </Suspense>

        <PaginationBtn totalPages={data.meta.totalPages} />
      </div>
    </main>
  );
};

export default WishlistPage;
