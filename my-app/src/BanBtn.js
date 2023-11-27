import React from "react";

function BanBtn({ isBan, setBan }) {
  return <button onClick={() => setBan(!isBan)}>press</button>;
}

export default BanBtn;
