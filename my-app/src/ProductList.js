import React from "react";

function ProductList({ filteredProducts }) {
  const res = filteredProducts.map((product, index) => (
    <p key={index}>{product}</p>
  ));
  return <div>{res}</div>;
}

export default ProductList;
