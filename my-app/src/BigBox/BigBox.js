import React from "react";
import styles from "./BigBox.module.css";
import MiddleBox from "../MiddleBox/MiddleBox";

function BigBox() {
  return (
    <div className={styles.bigBox}>
      <p>BigBox</p>
      <MiddleBox />
    </div>
  );
}

export default BigBox;
