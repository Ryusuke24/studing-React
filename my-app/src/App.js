import React from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";
import Calculator from "./Calculator";
import Ban from "./Ban";

function getId() {
  return nanoid();
}

function App() {
  return (
    <>
      <Ban />
      <Calculator />
    </>
  );
}

export default App;
