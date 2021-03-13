import React from "react";

const CustomButton = ({ isOne }) => {
  return (
    <button className={isOne ? `one__Button` : `twe__Button`}>보내기</button>
  );
};

export default CustomButton;
