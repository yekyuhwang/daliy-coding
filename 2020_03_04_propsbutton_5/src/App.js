import React from "react";
import CustomButton from "./CustomButton";

const App = () => {
  return (
    <div>
      <CustomButton isOne={true} />
      <CustomButton isOne={false} />
      <CustomButton />
    </div>
  );
};

export default App;
