"use server";

import { HeartIcon } from "@heroicons/react/24/solid";

import Link from "next/link";
import React, { Suspense } from "react";
import { cookies, headers } from "next/headers";

import ProductCarousel from "../products/ProductCarousel";

import Heading from "@/components/ui/heading/Heading";
import ProductListSkeleton from "@/components/ui/skeletons/product/ProductListSkeleton";

async function getWishlist(page = 1, size = 12) {
  const cookieStore = cookies();
  const headersList = headers();

  const activePath = headersList.get("x-url");
  console.log(activePath);
  // const token = cookieStore.get("next-auth.session-token");
  // console.log(token);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/wishlist?page=${page}&size=${size}&populate=true`,
      {
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token.value}`,
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
    console.log(data);

    return {
      success: true,
      data: data.data,
      meta: data.meta,
    };
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while fetching the wishlist",
      data: [],
      meta: { page: 1, size: 12, totalPages: 1, totalItems: 0 },
    };
  }
}

const ProfileWishlist = async () => {
  const products = await getWishlist();
  console.log(products);

  return (
    <div className="block w-full space-y-2">
      <Heading
        icon={
          <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
            <HeartIcon color="white" className="w-5 h-5" />
          </div>
        }
        title="Wishlist"
        buttons={[
          <Link
            href="/wishlist"
            key="wishlist"
            className="px-3 py-1.5 rounded-lg text-black hover:bg-gray-100 hover:scale-105 transition-all duration-100 underline hover:no-underline underline-offset-4"
          >
            View All
          </Link>,
        ]}
      />

      {/* <Suspense fallback={<ProductListSkeleton />}>
        {products && <ProductCarousel products={products.data} />}
      </Suspense> */}
    </div>
  );
};

export default ProfileWishlist;
