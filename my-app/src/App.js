import React from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";
import { MyContext } from "./MyContext";
import BigBox from "./BigBox/BigBox";
import MiddleBox from "./MiddleBox/MiddleBox";

function getId() {
  return nanoid();
}

function App() {
  return (
    <>
      <MyContext.Provider value={"small box :)"}>
        <BigBox />
      </MyContext.Provider>
    </>
  );
}

export default App;
