"use client";
import Heading from "@/components/ui/heading/Heading";
import {
  AdjustmentsHorizontalIcon,
  ArrowUpCircleIcon,
  FolderMinusIcon,
  PlusIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  IconButton,
  Input,
  Option,
  Select,
  Switch,
  Textarea,
} from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaTshirt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { toast } from "sonner";
import productColors from "@/libs/productColors";
import DefaultBtn from "@/components/ui/buttons/DefaultBtn";
import { RiApps2AddFill } from "react-icons/ri";

const CreateProduct = ({ open, setOpen }) => {
  const handleDialog = () => {
    setOpen(!open);
  };

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    discount: "",
    visible: true,
    category: [],
    subCategory: [],
    description: "",
    images: [],
    sizes: [],
  });
  const [size, setSize] = useState({
    size: "",
    colors: [
      {
        color: "",
        quantity: 0,
      },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = (e) => {
    setFormData({ ...formData, visible: e.target.checked });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    if (formData.images.length + files.length > 10) {
      toast.error("You can only upload up to 10 images.");
      return;
    }
    setFormData({ ...formData, images: [...formData.images, ...files] }); // Spread the files into the images array
  };

  const removeImage = (index) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  return (
    <Dialog open={open} handler={handleDialog} size="lg">
      
    </Dialog>
  );
};

export default CreateProduct;
