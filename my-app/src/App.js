import React, { useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

function getId() {
  return nanoid();
}

function App() {
  const [count, setCount] = useState(0);
  const [num, Increment] = useState(0);
  return (
    <>
      <div>
        <p>{num}</p>
        <button
          onClick={() => {
            Increment(num + 1);
          }}
        >
          Inc
        </button>
        <button
          onClick={() => {
            Increment(num - 1);
          }}
        >
          Dec
        </button>
      </div>
      <div>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          press
        </button>
      </div>
    </>
  );
}

export default App;
