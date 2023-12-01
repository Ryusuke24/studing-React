import React from "react";
import styles from "./MiddleBox.module.css";
import SmallBox from "../SmallBox/SmallBox";

function MiddleBox() {
  return (
    <div className={styles.middleBox}>
      <p>MiddleBox</p>
      <SmallBox />
      <SmallBox />
    </div>
  );
}

export default MiddleBox;
