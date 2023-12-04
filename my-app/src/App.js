import React, { useState, memo, useCallback } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";
import Child from "./Child";
import Items from "./Item";
import Products from "./Products";

function getId() {
  return nanoid();
}

function App() {
  const [num, setNum] = useState(0);
  const [items, setItems] = useState([]);
  const [text, setText] = useState("text");
  const [products, setProducts] = useState(["prod"]);

  const addProduct = useCallback(() => {
    setProducts(() => [...products, "new item"]);
  }, [products]);

  const addItem = useCallback(() => {
    setItems(() => [...items, "new item"]);
  }, [items]);

  return (
    <>
      <div>
        <p>{num}</p>
        <button onClick={() => setNum(num + 1)}>click</button>
        <Items items={items} addItem={addItem} />
      </div>
      <div>
        <p onClick={() => setText(text + "!")}>{text}</p>
        <Products products={products} addProduct={addProduct} />
      </div>
    </>
  );
}

export default App;
