import React from "react";

function App() {
  function func(event) {
    console.log(event);
    console.log(event.target);
  }
  return (
    <div>
      <button onClick={func}>click</button>
    </div>
  );
}

export default App;
