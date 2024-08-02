import { FaTshirt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import {
  Button,
  Dialog,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";

import React from "react";

import Heading from "@/components/ui/heading/Heading";

const CheckOutFormModel = ({ open, setOpen }) => {
  const handleOpen = () => setOpen(!open);
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      animate={{
        mount: { scale: 1, x: 0 },
        unmount: { scale: 0, x: 600 },
      }}
      className="p-6 flex flex-col gap-4"
    >
      <Heading
        icon={
          <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block">
            <FaTshirt size={20} color="white" />
          </div>
        }
        title={"Add Address"}
        buttons={[
          <IconButton key={1} variant="text" onClick={handleOpen}>
            <RxCross1 size={20} />
          </IconButton>,
        ]}
      />
      <div className="flex flex-wrap gap-5">
        <div className="flex size">
          <Input label="Full name" variant="outlined" />
        </div>

        <div className="flex size">
          <Input label="Phone Number" variant="outlined" />
        </div>

        <div className="flex size">
          <Input label="Email" variant="outlined" />
        </div>

        <div className="flex size">
          <Input label="City" variant="outlined" />
        </div>

        <div className="flex size">
          <Input label="State" variant="outlined" />
        </div>

        <div className="flex size">
          <Input label="Pincode" variant="outlined" />
        </div>

        <Textarea label="Address" />
      </div>

      <div className="flex items-center gap-4">
        <Button
          className="rounded"
          variant="gradient"
          fullWidth
          color="red"
          onClick={handleOpen}
        >
          Cancel
        </Button>

        <Button className="rounded" variant="gradient" fullWidth color="teal">
          Add Address
        </Button>
      </div>
    </Dialog>
  );
};

export default CheckOutFormModel;
