import React, { useContext } from "react";
import { Context } from "./Context";

function Grandson() {
  const age = useContext(Context);

  return (
    <>
      <div>
        <p>Grandson</p>
        <p>{age / 2}</p>
      </div>
    </>
  );
}

export default Grandson;
