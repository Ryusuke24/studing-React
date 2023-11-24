import React, { useState } from "react";
import { nanoid } from "nanoid";
import Product from "./Product";

function id() {
  return nanoid();
}

const initProds = [
  { id: id(), name: "product1", cost: 100, inCart: false, isEdit: false },
  { id: id(), name: "product2", cost: 200, inCart: false, isEdit: false },
  { id: id(), name: "product3", cost: 300, inCart: false, isEdit: false },
];

function Products() {
  function toogleMod(id) {
    setProds(
      prods.map(prod => {
        if (prod.id === id) {
          prod.isEdit = !prod.isEdit;
        }
        return prod;
      })
    );
  }

  function editProd(id, prop, event) {
    setProds(
      prods.map(prod => {
        if (id === prod.id) {
          prod[prop] = event;
        }

        return prod;
      })
    );
  }

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

  const [prods, setProds] = useState(initProds);
  const result = prods.map(prod => (
    <Product
      key={prod.id}
      name={prod.name}
      cost={prod.cost}
      id={prod.id}
      inCart={prod.inCart}
      isEdit={prod.isEdit}
      addToCart={addToCart}
      toogleMod={toogleMod}
      editProd={editProd}
    />
  ));

  return <>{result}</>;
}

export default Products;
