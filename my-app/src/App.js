import React from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";
import Products from "./Products";
import Users from "./Users";

function getId() {
  return nanoid();
}

function App() {
  return (
    <>
      <Products />
      <p>========================================</p>
      <Users />
    </>
  );
}

export default App;
