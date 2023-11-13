import React from "react";

function App() {
  function getDigitSum(num) {
    let sum = 0;
    num = num.toString().split("");
    for (let elem of num) {
      sum += +elem;
    }
    return sum;
  }
  return <div>{getDigitSum(12345)}</div>;
}

export default App;
