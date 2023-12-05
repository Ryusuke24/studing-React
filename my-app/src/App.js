import React from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";
import { useTransition, useState } from "react";
import ProductList from "./ProductList";

function getId() {
  return nanoid();
}

const products = ["qwe12", "qwe23", "qwe42", "qwe234", "qwe555", "qwe2134"];

function App() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState(products);

  function filterProducts() {
    let copy = filterTerm.sort((a, b) => a - b);
    setFilterTerm([...copy]);
  }

  // const filteredProducts = filterProducts();

  function updateFilterHandler(event) {
    startTransition(() => {
      let copy = [...filterTerm];
      copy[copy.length - 1] = event.target.value;
      setFilterTerm([...copy]);
    });
  }

  return (
    <>
      <div>
        <input type="text" onFocus={event => updateFilterHandler(event)} />
        {isPending && <p> updating......</p>}
        <ProductList filteredProducts={filterTerm} />
      </div>
    </>
  );
}

export default App;
