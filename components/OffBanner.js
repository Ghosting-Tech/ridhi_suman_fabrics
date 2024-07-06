// components/OffBanner.js
import React from "react";
import Link from "next/link";
import bannerData from "../utils/staticSection"; // Adjust the import path as necessary
import Image from "next/image";

function OffBanner() {
  return (
    <section className="py-5 py-md-11 bg-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5 md:gap-4">
          {bannerData.map((item, index) => (
            <div className="col py-4" key={index}>
              <Link href={item.href} className="card text-center">
                <div className="relative text-light">
                  <div className="flex justify-center icon-h-p">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-t-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <h5 className="lg:text-lg md:text-md text-sm mt-3">
                    {item.text}
                  </h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OffBanner;
