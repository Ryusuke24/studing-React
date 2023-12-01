import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";
import { Context } from "./Context";
import Parent from "./Parent";

function getId() {
  return nanoid();
}

function App() {
  const [age, setAge] = useState(50);

  return (
    <>
      {" "}
      <Context.Provider value={age}>
        {" "}
        <Parent />
        <button
          onClick={() => {
            setAge(age - 2);
          }}
        >
          press
        </button>
      </Context.Provider>
    </>
  );
}

export default App;
