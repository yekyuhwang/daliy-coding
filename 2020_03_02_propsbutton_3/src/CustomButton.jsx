import React from "react";

const CustomButton = ({ isRed }) => {
  return (
    <button className={isRed ? `red__button` : `normal__button`}>CLICK</button>
  );
};

export default CustomButton;
