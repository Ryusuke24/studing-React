import React from "react";
import styled from "styled-components";

const Input = styled.input`
  background-color: red;
  border: 2px solid blue;
`;

const Para = styled.p`
  padding: 10px;
  color: orange;
  background-color: black;
`;

function Component() {
  return (
    <>
      <Input />
      <Para>hello</Para>
    </>
  );
}

export default Component;
