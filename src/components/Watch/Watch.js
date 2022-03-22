import React, { useState } from "react";
import Display from "../Display/Display";

const Watch = () => {
  const [steps, setSteps] = useState(0);

  const increaseSteps = () => setSteps(steps + 1);
  //   const increaseSteps = () => {
  //     const newSteps = steps + 1;
  //     setSteps(newSteps);
  //   };
  console.log(steps);

  return (
    <div>
      <h1>Here is my Practicing Time : {steps} </h1>
      <b>The step number of my run Time : </b>
      <br />
      <button onClick={increaseSteps}>DEsi RUN RUN</button>
      <Display name="maria" steps={steps}></Display>
    </div>
  );
};

export default Watch;
