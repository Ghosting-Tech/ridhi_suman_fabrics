"use client";

import { RxCross1 } from "react-icons/rx";
import { MdDeleteSweep, MdOutlineError } from "react-icons/md";
import { Button, Dialog, IconButton } from "@material-tailwind/react";

import { toast } from "sonner";

import Heading from "@/components/ui/heading/Heading";
import { TicketIcon } from "@heroicons/react/24/solid";

const ListOfCoupon = ({ open, setOpen }) => {
  const handleOpen = () => setOpen(!open);

  const fetchCoupons = async () => {
    return;
  };

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      animate={{
        mount: { scale: 1 },
        unmount: { scale: 0 },
      }}
      className="p-6 flex flex-col gap-4"
    >
      <Heading
        icon={
          <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
            <TicketIcon className="h-5 w-5 text-white" />
          </div>
        }
        title={"Available coupons"}
        buttons={[
          <IconButton variant="text" onClick={handleOpen} key={"cross-key"}>
            <RxCross1 size={20} />
          </IconButton>,
        ]}
      />
    </Dialog>
  );
};

export default ListOfCoupon;
