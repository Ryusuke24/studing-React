import React, { useContext } from "react";
import { MyContext } from "../MyContext";
import styles from "./SmallBox.module.css";

function SmallBox() {
  const name = useContext(MyContext);

  return (
    <div className={styles.smallBox}>
      <p>I am ...</p>
      <p>{name}</p>
    </div>
  );
}

export default SmallBox;
