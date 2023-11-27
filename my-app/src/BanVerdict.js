import React from "react";

function BanVerdict({ isBan }) {
  return <p>user is {isBan ? "banned" : "free"}</p>;
}

export default BanVerdict;
