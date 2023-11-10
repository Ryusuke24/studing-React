import React from "react";

function App() {
  const arr = [1, 2, 3];
  const arr2 = [1, 2, 3, 4, 5];

  return (
    <>
      <div>
        <p>{arr[0]}</p>
        <p>{arr[1]}</p>
        <p>{arr[2]}</p>
      </div>
      <div>
        <p>{arr2[0]}</p>
        <p>{arr2[1]}</p>
        <p>{arr2[2]}</p>
        <p>{arr2[3]}</p>
        <p>{arr2[4]}</p>
      </div>
    </>
  );
}

export default App;
