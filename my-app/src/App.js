import React from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";
import styled from "styled-components";
import Component from "./Component";
import Block from "./Block";
import Block1 from "./Block1";
import Block2 from "./Block2";

const Text1 = styled.p`
  color: orangered;
  font-weight: bold;
`;

const Text2 = styled.p`
  background-color: orange;
  color: black;
  font-weight: bold;
  font-style: italic;
`;

const Text3 = styled.p`
  background-color: blue;
  font-weight: bold;
  color: white;
`;

const Container = styled.div`
  width: 200px;
  border: 2px solid brown;
  padding: 10px;
  text-align: center;
`;

function getId() {
  return nanoid();
}
function App() {
  return (
    <>
      <Block1 />
      <Container>
        <Component />
        <Text1>text</Text1>
        <Text2>text2</Text2>
        <Text3>qwerty</Text3>
      </Container>
      <Block />
      <Block2 />
    </>
  );
}

export default App;
