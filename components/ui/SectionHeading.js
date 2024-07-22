import React from "react";

const SectionHeading = ({ label, className }) => {
  return (
    <h1 className={"font-aclonica text-5xl text-center " + className}>
      {label}
    </h1>
  );
};

export default SectionHeading;
