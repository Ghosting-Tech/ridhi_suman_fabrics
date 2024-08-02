import Image from "next/image";

import { bannerData } from "@/utils/HomePageData";

const HomeBanner = () => {
  return (
    <div className="flex w-full">
      {bannerData.slice(0, 3).map((banner, index) => (
        <div className="relative w-1/3 h-80" key={index}>
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      ))}
    </div>
  );
};

export default HomeBanner;
