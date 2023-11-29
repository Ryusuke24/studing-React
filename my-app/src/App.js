import React from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";
import { styles } from "./styles";
// import "./styles.css";
import Component from "./Component";

function getId() {
  return nanoid();
}

function App() {
  const wd1 = "200px";
  const br1 = "2px solid brown";
  const pd1 = "10px";
  const ta1 = "center";

  const co1 = "orangered";
  const fw1 = "bold";

  const fs1 = "italic";
  const co2 = "brown";

  const bc01 = "orange";
  const co3 = "white";

  return (
    <>
      <div style={styles.class1}>
        {" "}
        <div style={{ color: "orange", fontWeight: "bold" }}>text</div>
        <div style={{ color: "red", padding: "10px" }}>text</div>
        <div>text</div>
        <div>
          <p style={{ color: co1, fontWeight: fw1 }}>qwe</p>
          <p style={{ color: co2, fontStyle: fs1 }}>qwe</p>
          <p style={{ color: co3, backgroundColor: bc01 }}>qwe</p>
        </div>
        <div>text</div>
        <div>text</div>
      </div>
      <Component />
    </>
  );
}

export default App;
