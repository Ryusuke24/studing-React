import React from "react";
import Product from "./Product";
import User from "./User";
import { nanoid } from "nanoid";
import uuid from "react-uuid";
import Employee from "./Employee";

function id() {
  return nanoid();
}

const prods = [
  { id: id(), name: "product1", cost: 100 },
  { id: id(), name: "product2", cost: 200 },
  { id: id(), name: "product3", cost: 300 },
];

const users = [
  { id: id(), username: "Ryusuke", age: 18 },
  { id: id(), username: "Veegrecs", age: 21 },
  { id: id(), username: "DamnFuckingDaniel", age: 26 },
];

function App() {
  const result = prods.map(prod => (
    <Product key={[prod.id]} name={prod.name} cost={prod.cost} />
  ));

  const resultUsers = users.map(user => (
    <User key={user.id} uid={user.id} username={user.username} age={user.age} />
  ));
  const username = "Ryusuke";

  return (
    <>
      <div>app</div>
      {result}
      {resultUsers}
      <Employee name="John" surname="Smith" salary="4500" />
      <Employee name="Alan" surname="Wake" salary="500" />
      <Employee name="Richard" surname="Robinson" salary="1200" />
    </>
  );
}

export default App;
