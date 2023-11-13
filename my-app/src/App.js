import React from "react";

function App() {
  function showMess(name) {
    alert("hello," + name);
  }

  function showNum(num) {
    alert(num);
  }

  return (
    <div>
      <button onClick={() => showMess("Daniel")}>click</button>
      <button onClick={() => showMess("Sasa")}>click</button>
      <button onClick={() => showNum(1)}>click 1</button>
      <button onClick={() => showNum(2)}>click 2</button>
      <button onClick={() => showNum(3)}>click 3</button>
    </div>
  );
}

export default App;
