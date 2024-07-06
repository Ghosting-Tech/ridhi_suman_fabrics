import Image from "next/image";
import React from "react";
const CardTitle = (props) => {
  return (
    <div className="flex items-center border-b-2 border-b-[#0052D4] h-14 p-4 gap-2">
      <Image src={props.data.icon} width={15} height={15} />
      <span>{props.data.name}</span>
    </div>
  );
};

export default CardTitle;
