import DefaultBtn from "@/components/ui/buttons/DefaultBtn";
import Heading from "@/components/ui/heading/Heading";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Dialog,
  IconButton,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { toast } from "sonner";

const CreateSubAdmin = ({ open, setOpen, setAdmins }) => {
  const handleOpen = () => setOpen(!open);
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    phoneNumber: "",
    password: "",
  });

  const [noteChecked, setNoteChecked] = useState(false);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFormData({
        ...formData,
        image: event.target.files[0],
      });
    }
  };
  const createAdminAccount = async (e) => {
    e.preventDefault();

    if (!formData.name) {
      toast.error("Name is required");
      return;
    }
    if (!formData.phoneNumber) {
      toast.error("Phone number is required");
      return;
    }
    if (!formData.password) {
      toast.error("Password is required");
      return;
    }
    if (!formData.image) {
      toast.error("Image is required");
      return;
    }
    if (!noteChecked) {
      toast.warning("Click on I agree before creating new admin account!");
      return;
    }

    const promise = new Promise(async (resolve, reject) => {
      try {
        const data = new FormData();
        data.append("name", formData.name);
        data.append("phoneNumber", formData.phoneNumber);
        data.append("password", formData.password);
        if (formData.image) {
          data.append("image", formData.image);
        }

        const response = await fetch("/api/admin/sub-admin", {
          method: "POST",
          body: data,
        });

        const newAdmin = await response.json();

        console.log(newAdmin);

        if (response.ok) {
          setAdmins((prevAdmins) => [...prevAdmins, newAdmin]);
          setOpen(false); // Close the dialog after creating an account
          setFormData({ image: null, phoneNumber: "", password: "", name: "" }); // Reset the form
          resolve(newAdmin); // Resolve the promise with the new admin data
        } else {
          reject(newAdmin); // Reject the promise with the error response
        }
      } catch (err) {
        reject(err); // Reject the promise with the caught error
      }
    });

    toast.promise(promise, {
      loading: "Creating admin...",
      success: (data) => `${data.name} admin created successfully!`,
      error: (err) => `${err}`,
    });

    promise.catch((err) => {
      console.log(err);
      // toast.error(err.message);
    });
  };
  return (
    <Dialog
      size="sm"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none"
    >
      <form
        className="mx-auto w-full bg-white rounded-lg"
        onSubmit={createAdminAccount}
      >
        <CardBody className="flex flex-col gap-4">
          <Heading
            icon={
              <div className="bg-gradient-to-r from-red-400 to-pink-400 p-1 rounded-full inline-block text-white">
                <RiAdminFill size={20} />
              </div>
            }
            title={"Create Admin Account"}
            buttons={[
              <IconButton variant="text" onClick={handleOpen}>
                <RxCross1 size={20} />
              </IconButton>,
            ]}
          />
          <Typography className="-mb-2" variant="h6">
            Name
          </Typography>
          <Input
            label="Ridhi suman"
            color="pink"
            size="lg"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Typography className="-mb-2" variant="h6">
            Phone Number
          </Typography>
          <Input
            label="123456789"
            color="pink"
            minLength={10}
            maxLength={10}
            size="lg"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />
          <Typography className="-mb-2" variant="h6">
            Password
          </Typography>
          <Input
            label="******"
            color="pink"
            size="lg"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <Typography className="-mb-2" variant="h6">
            Profile Pic
          </Typography>
          <input type="file" onChange={handleImageChange} />
          <Checkbox
            onChange={(e) => setNoteChecked(e.target.checked)}
            label={
              <div>
                <Typography color="blue-gray" className="font-medium">
                  I agree
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  With this created account anybody can have the power of Admin.
                </Typography>
              </div>
            }
            containerProps={{
              className: "-mt-5",
            }}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <DefaultBtn
            title={"Create Account"}
            clickHandler={() => setOpen(true)}
            type="submit"
          />
          {/* <Button variant="gradient" color="pink" fullWidth type="submit">
            Create Account
          </Button> */}
        </CardFooter>
      </form>
    </Dialog>
  );
};

export default CreateSubAdmin;
