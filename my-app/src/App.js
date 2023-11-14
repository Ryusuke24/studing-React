import React from "react";

function App() {
  function func(event, ...args) {
    console.log(event, args[0], args[1]);
  }

  return (
    <div>
      <button onClick={event => func(event, "eee", "hello")}>act</button>
    </div>
  );
}

export default App;
