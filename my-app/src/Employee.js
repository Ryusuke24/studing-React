import React from "react";

function Employee({ name, salary, surname }) {
  return (
    <>
      <p>
        name: <span>{name}</span>, surname : <span>{surname}</span>, salary{" "}
        <span>{salary}</span>
      </p>
    </>
  );
}

export default Employee;
