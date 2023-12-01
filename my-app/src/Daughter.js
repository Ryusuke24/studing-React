import React, { useCallback, useContext } from "react";
import Grandson from "./Grandson";
import { Context } from "./Context";

function Daughter() {
  const num = useContext(Context);
  return (
    <>
      <div>
        <p>Daughter</p>
        <p>{num}</p>

        <Grandson />
      </div>
    </>
  );
}

export default Daughter;
