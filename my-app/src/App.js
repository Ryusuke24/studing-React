import React from "react";

function App() {
  const num1 = 2;
  const num2 = 5;
  const num3 = 25;
  const name = "John";
  const surname = "Smith";

  return (
    <>
      <div>result: {num1 + num2}</div>
      <div>result: {num1 ** num2}</div>
      <div>result: {`${name}  ${surname}`}</div>
      <div>result: {Math.sqrt(num3)}</div>
    </>
  );
}

export default App;
