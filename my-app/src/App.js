import React from "react";

function App() {
  const isAdult = true;
  let text;
  if (isAdult) {
    text = <div>Cool</div>;
  }
  return text;
}

export default App;
