import React, { useState } from "react";
import BanVerdict from "./BanVerdict";
import BanBtn from "./BanBtn";

function Ban() {
  const [isBan, setBan] = useState(0);

  return (
    <div>
      <p>============================================</p>
      <BanVerdict isBan={isBan} />
      <BanBtn isBan={isBan} setBan={setBan} />
      <p>============================================</p>
    </div>
  );
}

export default Ban;
