import React from "react";
import CustomButton from "./CustomButton";

const App = () => {
  return (
    <div>
      <CustomButton isYellow={true} />
      <CustomButton isYellow={false} />
      <CustomButton />
    </div>
  );
};

export default App;
