"use server";

import { IoIosHeart } from "react-icons/io";

import React, { Suspense } from "react";
import { cookies, headers } from "next/headers";

import ProductList from "@/components/layout/products/ProductList";

import Heading from "@/components/ui/heading/Heading";
import PaginationBtn from "@/components/ui/PaginationBtn";
import ProductListSkeleton from "@/components/ui/skeletons/product/ProductListSkeleton";

async function getWishlist(page = 1, size = 12) {
  const cookieStore = cookies();
  const headersList = headers();

  const activePath = headersList.get("x-url");
  console.log(activePath);
  const token = cookieStore.get("next-auth.session-token");
  console.log(token);

  try {
    const res = await fetch(
      `${activePath}/api/user/wishlist?page=${page}&size=${size}&populate=true`,
      {
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.value}`,
        },
      }
    );

    if (!res.ok) {
      return {
        success: false,
        message: "Failed to fetch data",
        status: res.status,
        data: [],
        meta: { page: 1, size: 12, totalPages: 1, totalItems: 0 },
      };
    }

    const data = await res.json();

    return {
      success: true,
      data: data.data,
      meta: data.meta,
    };
  } catch (error) {
    console.error("Error fetching wishlist:", error);

    return {
      success: false,
      message: "An error occurred while fetching the wishlist",
      data: [],
      meta: { page: 1, size: 12, totalPages: 1, totalItems: 0 },
    };
  }
}

const WishlistPage = async ({ searchParams: { page = 1, size = 12 } }) => {
  page = parseInt(page) || 1;
  size = parseInt(size) || 12;

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
