import React, { useState } from "react";
import { nanoid } from "nanoid";
import Product from "./Product";

function id() {
  return nanoid();
}

const initProds = [
  { id: id(), name: "prod1", cost: "cost1", catg: "catg1", isCart: false },
  { id: id(), name: "prod2", cost: "cost2", catg: "catg2", isCart: false },
  { id: id(), name: "prod3", cost: "cost3", catg: "catg3", isCart: false },
];

function Products() {
  function addToCart(id) {
    setProds(
      prods.map(prod => {
        if (prod.id === id) {
          prod.inCart = !prod.inCart;
        }
        return prod;
      })
    );
  }

  function changeField(id, field, event) {
    setProds(
      prods.map(prod => {
        if (id === prod.id) {
          prod[field] = event.target.value;
        }

        return prod;
      })
    );
  }

  const [prods, setProds] = useState(initProds);
  const rows = prods.map(prod => (
    <Product
      key={prod.id}
      name={prod.name}
      cost={prod.cost}
      catg={prod.catg}
      id={prod.id}
      inCart={prod.inCart}
      addToCart={addToCart}
      changeField={changeField}
    />
  ));

  return (
    <>
      <table>
        <thead></thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}

export default Products;
