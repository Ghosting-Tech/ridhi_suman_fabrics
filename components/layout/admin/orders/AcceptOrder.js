import React from "react";
import CancelOrderButton from "./CancelOrderButton";
import AcceptOrderButton from "./AcceptOrderButton";

const AcceptOrder = ({ data }) => {
  return (
    <td>{data.isAccepted ? <CancelOrderButton /> : <AcceptOrderButton />}</td>
  );
};

export default AcceptOrder;
