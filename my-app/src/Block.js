import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const Input = styled.input`
  background: ${props => (props.first ? "yellow" : "green")};

  margin: 5px;
  font-size: 18px;
`;

function Block(props) {
  return (
    <>
      <Container>
        <Input first></Input>
        <Input placeholder="name" type="text"></Input>
        <Input type="password"></Input>
      </Container>
    </>
  );
}

export default Block;
