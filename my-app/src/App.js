import React from "react";

function App() {
  function showMessage() {
    alert("hello");
  }

  function func1() {
    alert("1");
  }

  function func2() {
    alert("2");
  }

  return (
    <>
      <div>
        <button onClick={showMessage}>show</button>
        <button onClick={func1}>func1</button>
        <button onClick={func2}>func2</button>
      </div>
    </>
  );
}

export default App;
