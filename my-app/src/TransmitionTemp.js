import React, { useState } from "react";

function TransmitionTemp() {
  const [temp, setTemp] = useState(0);

  return (
    <>
      Far
      <input
        value={+temp + 32}
        onChange={event => setTemp(+event.target.value)}
      />
      Cel
      <input value={temp} onChange={event => setTemp(+event.target.value)} />
    </>
  );
}

export default TransmitionTemp;
