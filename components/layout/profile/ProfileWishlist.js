"use server";

import { cookies } from "next/headers";
import React, { Suspense } from "react";

import Heading from "@/components/ui/heading/Heading";
import { HeartIcon } from "@heroicons/react/24/solid";
import ProductListSkeleton from "@/components/ui/skeletons/product/ProductListSkeleton";
import ProductCarousel from "../products/ProductCarousel";
import Link from "next/link";

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

const ProfileWishlist = async () => {
  const products = await getWishlist();

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

      <Suspense fallback={<ProductListSkeleton />}>
        {products && <ProductCarousel products={products.data} />}
      </Suspense>
    </div>
  );
};

export default ProfileWishlist;
