import React from "react";

function App() {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push(<li>{i + 1}</li>);
  }

  return (
    <>
      <ul>{arr}</ul>
    </>
  );
}

export default App;
