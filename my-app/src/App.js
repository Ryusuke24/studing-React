import React from "react";

function App() {
  const arr = ["a", "b", "c", "d", "e"];

  const res = arr.map(item => {
    return <p>{item}</p>;
  });
  return <>{res}</>;
}

export default App;
