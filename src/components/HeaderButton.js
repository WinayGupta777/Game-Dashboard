import React from "react";
import "../css/HeaderButton.css";

const HeaderButton = (props) => {
  return (
    <div className="headerButton">
      <div className="title">{props.title}</div>
    </div>
  );
};

export default HeaderButton;
