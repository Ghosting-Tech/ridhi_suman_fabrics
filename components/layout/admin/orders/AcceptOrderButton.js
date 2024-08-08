"use client";

import React from "react";
import { Button } from "@material-tailwind/react";

const AcceptOrderButton = ({ data }) => {
  const handleAcceptOrder = async () => {
    console.log(data);
    console.log("Order Accepted");
  };

  return (
    <Button color={"green"} variant="gradient" onClick={handleAcceptOrder}>
      Accept
    </Button>
  );
};

export default AcceptOrderButton;
