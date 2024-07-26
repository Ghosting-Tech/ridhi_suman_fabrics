'use client'
import { Tooltip } from "@material-tailwind/react";
 
export default function TooltipFooter({label,children}) {
  return (
    <Tooltip content={label} placement="top-start">
      {children}
    </Tooltip>
  );
}