import React from "react";
import "../css/CategoryBlock.css";
import HeaderButton from "./HeaderButton";

const CategoryBlock = () => {
  return (
    <div className="categoryBlock">
      <HeaderButton title={"Android Apps"} />
      <HeaderButton title={"iOS Apps"} />
      <HeaderButton title={"Web Apps"} />
    </div>
  );
};

export default CategoryBlock;
