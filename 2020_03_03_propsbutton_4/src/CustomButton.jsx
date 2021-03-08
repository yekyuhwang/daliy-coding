import React from "react";

const CustomButton = ({ isBlack }) => {
  return (
    <button className={isBlack ? `black__Button` : `normal__Button`}>
      CLICK
    </button>
  );
};

export default CustomButton;
