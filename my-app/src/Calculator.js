import React, { useState } from "react";
import Verdict from "./Verdict";
import TempInp from "./TempInp";

function Calculator() {
  const [temp, setTemp] = useState(0);
  const [ban, setBan] = useState(false);

  function changeTemp(event) {
    setTemp(event.target.value);
  }

  return (
    <>
      {" "}
      <div>
        <p>============================================</p>
        <Verdict temp={temp} />
        <TempInp temp={temp} changeTemp={changeTemp} />
        <p>============================================</p>
      </div>
    </>
  );
}

export default Calculator;
