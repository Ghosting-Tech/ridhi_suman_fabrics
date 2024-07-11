import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Dialog,
  Input,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
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
    try {
      e.preventDefault();

      if (!formData.name) {
        toast.warning("Name is required");
        return;
      }
      if (!formData.phoneNumber) {
        toast.warning("Phone number is required");
        return;
      }
      if (formData.password) {
        toast.warning("Password is required");
        return;
      }
      if (!formData.image) {
        toast.warning("Image is required");
        return;
      }
      if (!noteChecked) {
        toast.warning("Click on I agree before creating new admin account!");
        return;
      }
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

      if (response.ok) {
        const newAdmin = await response.json();
        setAdmins((prevAdmins) => [...prevAdmins, newAdmin]);
        toast.success(`${data.phoneNumber} admin created successfully!`);
        setOpen(false); // Close the dialog after creating an account
        setData({ image: null, phoneNumber: "", password: "", name: "" }); // Reset the form
      } else {
        toast.error("Failed to create admin account");
      }
    } catch (err) {
      toast.error(err.message);
    }
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
          <Typography variant="h4" color="blue-gray">
            Create Admin Account
          </Typography>
          <Typography className="-mb-2" variant="h6">
            Name
          </Typography>
          <Input
            label="Ridhi suman"
            size="lg"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Typography className="-mb-2" variant="h6">
            Phone Number
          </Typography>
          <Input
            label="123456789"
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
          <Button variant="gradient" fullWidth type="submit">
            Create Account
          </Button>
        </CardFooter>
      </form>
    </Dialog>
  );
};

export default CreateSubAdmin;
