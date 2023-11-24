import React, { useState } from "react";
import { nanoid } from "nanoid";

function id() {
  return nanoid();
}

const initProds = [
  { id: id(), name: "product1", cost: 100 },
  { id: id(), name: "product2", cost: 200 },
  { id: id(), name: "product3", cost: 300 },
];

function Product({ name, cost }) {
  console.log(name);
  return (
    <p>
      name : <span>{name}</span>, cost : <span>{cost}</span>
    </p>
  );
}

export default Product;
