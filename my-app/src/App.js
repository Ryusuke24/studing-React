import React, { useMemo, useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

function getId() {
  return nanoid();
}

function App() {
  const [color, setColor] = useState(false);
  const [count, setCount] = useState(0);
  const result = useMemo(() => square(count), [count]);

  function square(count) {
    let startTime = performance.now();
    console.log(performance.now());

    while (performance.now() - startTime < 500) {
      // Just do nothing ...
    }

    return count ** 2;
  }

  const [text, setText] = useState("react");
  const [num, setNum] = useState(0);

  function triple(num) {
    return num ** 3;
  }

  let res = useMemo(() => triple(num), [num]);
  return (
    <>
      <div>
        <h3
          style={
            color
              ? { backgroundColor: "green" }
              : { backgroundColor: "orangered" }
          }
        >
          TEXT
        </h3>
        <button
          onClick={() => {
            setColor(!color);
            setCount(count + 1);
          }}
        >
          click: {result}
        </button>
      </div>
      <div>
        <p onClick={() => setText(text + "!")}>{text}</p>
        <p onClick={() => setNum(num + 1)}>{res}</p>
      </div>
    </>
  );
}

export default App;
