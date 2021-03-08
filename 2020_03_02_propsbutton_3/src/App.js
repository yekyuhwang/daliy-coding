import React from "react";
import CustomButton from "./CustomButton";

const App = () => {
  return (
    <div>
      <CustomButton isRed={true} />
      <CustomButton isRed={false} />
      <CustomButton />
    </div>
  );
};

export default App;
