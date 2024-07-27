import Image from "next/image";
import React from "react";

const ImageContainer = ({image}) => {
  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover filter blur-sm scale-125"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black opacity-30" />
      <Image
        className="relative mx-auto w-full object-contain rounded-lg md:h-full z-10"
        width={384}
        height={384}
        src={image}
        alt=""
      />
    </div>
  );
};

export default ImageContainer;
