"use client";
import Nav from "@/components/header/Nav";
import CreateSubAdmin from "@/components/modals/admin/sub-admin/CreateSubAdmin";
import {
  Avatar,
  Button,
  Card,
  Input,
  List,
  ListItem,
  ListItemPrefix,
  Switch,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [open, setOpen] = useState(false);

  const [admins, setAdmins] = useState([]);

  const fetchingSubAdmins = async () => {
    try {
      const response = await fetch("/api/admin/sub-admin");
      if (response.ok) {
        const data = await response.json();
        setAdmins(data);
      } else {
        toast.error(response.statusText);
      }
    } catch (err) {
      toast.error("error", err);
    }
  };

  useEffect(() => {
    fetchingSubAdmins();
  }, []);

  return (
    <div className="min-h-screen">
      <Nav />
      <div className="flex justify-center items-center min-h-[89vh]">
        <Card className="w-[50vw] p-4">
          <div className="flex justify-between items-center px-4">
            <Typography variant="h3" color="blue-gray" className="text-center">
              All Admins
            </Typography>
            <Button onClick={() => setOpen(true)} variant="gradient" color="indigo">
              Create new Account
            </Button>
            <CreateSubAdmin open={open} setOpen={setOpen} setAdmins={setAdmins} />
          </div>
          <List>
            {admins.map((admin) => (
              <ListItem className="flex justify-between" key={admin._id}>
                <div className="flex items-center">
                  <ListItemPrefix>
                    <Avatar variant="circular" alt="admin" src={admin.image} />
                  </ListItemPrefix>
                  <div className="flex flex-col">
                    <div className="text-sm">Phone number</div>
                    <div className="text-lg font-semibold text-pink-500">
                      {admin.phoneNumber}
                    </div>
                  </div>
                </div>
                <Switch label="Admin" color="pink" defaultChecked />
              </ListItem>
            ))}
          </List>
        </Card>
      </div>
    </div>
  );
};

export default Page;
