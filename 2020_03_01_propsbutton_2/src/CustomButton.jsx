import React from "react";

//삼항 연산자
// (조건식) ? 값1 : 값2
// 조건식이 true라면 값1을 리턴하고, false라면 값2를 리턴한다.

const CustomButton = ({ isYellow }) => {
  return (
    <button className={isYellow ? `yellow__Button` : `button`}>button</button>
  );
};

export default CustomButton;
