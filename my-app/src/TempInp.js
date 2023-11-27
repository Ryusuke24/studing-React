import React from "react";

function TempInp({ temp, changeTemp }) {
  return (
    <input defaultValue={temp} onChange={event => changeTemp(event)}></input>
  );
}

export default TempInp;
