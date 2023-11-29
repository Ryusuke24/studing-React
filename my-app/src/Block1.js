import React from "react";
import styled from "styled-components";

const DivA = styled.div`
  width: 150px;
  height: 150px;
  background-color: yellow;
  border: 2px solid black;
  color: black;
`;

const DivB = styled(DivA)`
  background-color: green;
  border: 3px solid black;
`;

const Container = styled.div`
  width: 500px;
  border: 5px solid red;
`;

function Block1() {
  return (
    <>
      <Container>
        {" "}
        <DivA></DivA>
        <DivB></DivB>
      </Container>
    </>
  );
}

export default Block1;
