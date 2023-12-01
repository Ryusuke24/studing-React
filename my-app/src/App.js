import React, { useRef } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

function getId() {
  return nanoid();
}

function App() {
  const ref = useRef(null);

  return (
    <>
      <div>
        <input ref={ref} />
        <button
          onClick={() => {
            ref.current.focus();
            ref.current.value = "";
          }}
        >
          focus
        </button>
      </div>
    </>
  );
}

export default App;
