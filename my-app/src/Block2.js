import React from "react";
import styled from "styled-components";
import Block from "./Block";

const Button = styled.button`
  background-color: ${props => (props.warn ? "yellow" : "green")};
  color: ${props => (props.warn ? "red" : "white")};
  padding: 10px;
  margin-left: 5px;
`;

const MdButton = styled(Button)`
  color: black;
  background-color: red;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function Block2() {
  return (
    <>
      <Container>
        <Button disabled>only read</Button>
        <Button warn>press</Button>
        <Button type="reset">reset</Button>
      </Container>
      <Container>
        <Button>button</Button>
        <MdButton>Md button</MdButton>
      </Container>
    </>
  );
}

export default Block2;
