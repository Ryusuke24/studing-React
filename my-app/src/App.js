import React, { useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";
import TransmitionTemp from "./TransmitionTemp";
import Calculator from "./Calculator";

function getId() {
  return nanoid();
}

function App() {
  return (
    <>
      <TransmitionTemp />
      <Calculator />
    </>
  );
}

export default App;
