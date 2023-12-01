import React, { useRef, useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

function getId() {
  return nanoid();
}

function App() {
  const [state, setState] = useState(0);
  const ref = useRef(0);

  const [text, setText] = useState("text");
  const refText = useRef("text");

  return (
    <>
      <div>
        <button onClick={() => setState(state + 1)}>
          state click : {state}
        </button>
        <button onClick={() => (ref.current += 1)}>
          ref click : {ref.current}
        </button>
      </div>
      <div>
        <p>{text}</p>
        <button onClick={() => setText(text + "!")}>press (state)</button>
      </div>
      <div>
        <p>{refText.current}</p>
        <button
          onClick={() => {
            refText.current += "!";
            console.log(refText.current);
          }}
        >
          press (state)
        </button>
      </div>
    </>
  );
}

export default App;
