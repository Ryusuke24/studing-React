import React, { useState } from "react";
import { nanoid } from "nanoid";
import ProductField from "./ProductField";

function Product({
  name,
  cost,
  id,
  inCart,
  toogleMod,
  addToCart,
  changeField,
  catg,
}) {
  return (
    <>
      <tr>
        name:
        <ProductField
          id={id}
          text={name}
          type={"name"}
          changeField={changeField}
        ></ProductField>
        <br />
        cost:{" "}
        <ProductField
          id={id}
          text={cost}
          type={"cost"}
          changeField={changeField}
        ></ProductField>
        <br />
        <ProductField
          id={id}
          text={catg}
          type={"catg"}
          changeField={changeField}
        ></ProductField>
        <br />
        inCart: <span>{inCart ? "in cart" : "not in cart"}</span>
        <button onClick={() => addToCart(id)}>to cart</button>
      </tr>
    </>
  );
}

export default Product;
