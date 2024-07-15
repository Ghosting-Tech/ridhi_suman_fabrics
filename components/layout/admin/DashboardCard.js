import Image from "next/image";
import React from "react";

const Card = ({ label, value, color, image }) => (
  <div
    className={`p-6 rounded-lg flex gap-4 items-center`}
    style={{
      border: `2px solid ${color}`,
      color: `${color}`,
    }}
  >
    <Image src={image} height={65} width={65} className="object-cover" />
    <div>
      <div className="text-2xl font-bold">{value}</div>
      <div>{label}</div>
    </div>
  </div>
);
const DashboardCard = ({ data }) => {
  const cardData = [
    {
      id: 1,
      label: "Total categories",
      value: data.categoriesCount,
      color: "#FFC700",
      image: "/dashboard-icons/total-categories.svg",
    },
    {
      id: 2,
      label: "Total sub categories",
      value: data.subCategoriesCount,
      color: "#fb923c",
      image: "/dashboard-icons/sub-categories.svg",
    },
    {
      id: 3,
      label: "Total user",
      value: data.usersCount,
      color: "#816797",
      image: "/dashboard-icons/total-users.svg",
    },
    {
      id: 4,
      label: "Total Products",
      value: data.productsCount,
      color: "#D2649A",
      image: "/dashboard-icons/total-products.svg",
    },
    {
      id: 5,
      label: "Total sets",
      value: data.setOfProductsCount,
      color: "#68B984",
      image: "/dashboard-icons/sets.svg",
    },
    {
      id: 6,
      label: "Delivered orders",
      value: data.deliveredOrdersCount,
      color: "#3AA6B9",
      image: "/dashboard-icons/delivered-orders.svg",
    },
    {
      id: 7,
      label: "Ongoing orders",
      value: data.ongoingOrdersCount,
      color: "#7EA1FF",
      image: "/dashboard-icons/ongoing-orders.svg",
    },
    {
      id: 8,
      label: "Cancelled orders",
      value: data.canceledOrdersCount,
      color: "#F31559",
      image: "/dashboard-icons/cancel-orders.svg",
    },
  ];
  return (
    <>
      {cardData.map(({ id, label, value, color, image }) => (
        <Card
          key={id}
          label={label}
          value={value}
          color={color}
          image={image}
        />
      ))}
    </>
  );
};

export default DashboardCard;
