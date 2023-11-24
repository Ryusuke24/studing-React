import React, { useState } from "react";
import { nanoid } from "nanoid";

function Product({
  name,
  cost,
  id,
  inCart,
  addToCart,
  isEdit,
  toogleMod,
  editProd,
}) {
  return (
    <>
      <div>
        id :{" "}
        {isEdit ? (
          <input
            defaultValue={id}
            onChange={event => editProd(id, "id", event.target.value)}
          />
        ) : (
          <span>{id}</span>
        )}{" "}
        <br />
        name:{" "}
        {isEdit ? (
          <input
            defaultValue={name}
            onChange={event => editProd(id, "name", event.target.value)}
          />
        ) : (
          <span>{name}</span>
        )}{" "}
        <br />
        cost:{" "}
        {isEdit ? (
          <input
            defaultValue={cost}
            onChange={event => editProd(id, "cost", event.target.value)}
          />
        ) : (
          <span>{cost}</span>
        )}{" "}
        <br />
        inCart: <span>{inCart ? "in cart" : "not in cart"}</span>
        <button onClick={() => addToCart(id)}>to cart</button>
        <button onClick={() => toogleMod(id)}>
          {isEdit ? "save" : "edit"}
        </button>
      </div>
    </>
  );
}

export default Product;
