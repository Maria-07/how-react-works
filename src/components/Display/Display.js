import React from "react";
import Dial from "../Dial/Dial";

const Display = (props) => {
  return (
    <div>
      <p>Now it's time for new tghing</p>
      Name : {props.name}
      <br />
      Count Number : {props.steps}
      <Dial go={props.steps}></Dial>
    </div>
  );
};

export default Display;
