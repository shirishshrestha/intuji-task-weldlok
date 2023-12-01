import React from "react";

const CustomersCard = ({ image, point }) => {
  return (
    <div className="customers__points--list">
      <img src={image} alt="" />
      <span>{point}</span>
    </div>
  );
};

export default CustomersCard;
