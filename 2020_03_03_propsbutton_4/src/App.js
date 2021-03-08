import React from "react";
import CustomButton from "./CustomButton";

const App = () => {
  return (
    <div>
      <CustomButton isBlack={true} />
      <CustomButton isBlack={false} />
      <CustomButton />
    </div>
  );
};

export default App;
