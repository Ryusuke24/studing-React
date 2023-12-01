import React, { useContext } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";
import { Context } from "./Context";
import Parent from "./Parent";

function getId() {
  return nanoid();
}

function App() {
  return (
    <>
      {" "}
      <Context.Provider value={42}>
        {" "}
        <Parent />
      </Context.Provider>
    </>
  );
}

export default App;
