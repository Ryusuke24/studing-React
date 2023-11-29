import React from "react";
// import "./ComponentStyle.css";
import { style } from "./stylesComponent";

function Component() {
  const bgCl = "black";
  const co = "white";
  const pa = "30px";

  return (
    <>
      <button style={style.btn}>first</button>
      <button style={{ backgroundColor: bgCl, color: co, padding: pa }}>
        second
      </button>
    </>
  );
}

export default Component;
