import React from "react";

function Products({ products, addProduct }) {
  const result = products.map((product, index) => (
    <li key={index}>{product}</li>
  ));

  console.log("render");
  return (
    <>
      <div>
        <ul>{result}</ul>
        <button onClick={() => addProduct()}>add Product</button>
      </div>
    </>
  );
}

export default Products;
