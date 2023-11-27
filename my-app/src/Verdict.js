import React from "react";

function Verdict({ temp }) {
  let result = "";

  if (temp >= 100) {
    result = "Steam";
  } else if (temp < 100 && temp > 0) {
    result = "Liquid";
  } else if (temp <= 0) {
    result = "Ice";
  }

  return <p>result is : {result}</p>;
}

export default Verdict;
