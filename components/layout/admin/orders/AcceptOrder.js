import React from "react";
import CancelOrderButton from "./CancelOrderButton";
import AcceptOrderButton from "./AcceptOrderButton";

const AcceptOrder = ({ order }) => {
  return (
    <td>
      {order.isAccepted ? (
        <CancelOrderButton order={order} />
      ) : (
        <AcceptOrderButton order={order} />
      )}
    </td>
  );
};

export default AcceptOrder;
