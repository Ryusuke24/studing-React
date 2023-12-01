import React, { useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";
import { MyContext } from "./MyContext";
import BigBox from "./BigBox/BigBox";
import MiddleBox from "./MiddleBox/MiddleBox";

function getId() {
  return nanoid();
}

function App() {
  const [value, setValue] = useState("small box :)");

  return (
    <>
      <MyContext.Provider value={value}>
        <BigBox />
        <button
          onClick={() => {
            setValue("metal box >:|");
          }}
        >
          click
        </button>
      </MyContext.Provider>
    </>
  );
}

export default App;
