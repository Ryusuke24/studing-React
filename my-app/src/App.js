import React from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

const prods = [
  { id: 1, name: "product1", cost: 100 },
  { id: 2, name: "product2", cost: 200 },
  { id: 3, name: "product3", cost: 300 },
];

const users = [
  { id: 1, name: "user1", surn: "surn1", age: 30 },
  { id: 2, name: "user2", surn: "surn2", age: 31 },
  { id: 3, name: "user3", surn: "surn3", age: 32 },
];

function App() {
  const arr = ["a", "b", "c", "d", "e", "f"];

  const res = arr.map((item, index) => {
    return <p key={nanoid()}>{nanoid()}</p>;
  });

  const prod = prods.map(item => {
    return <p key={item.id}>{`${uuid()} --- ${item.cost}`}</p>;
  });

  const user = users.map(item => {
    return (
      <p key={item.id}>
        <span>{`${item.name}==`}</span>
        <span>{`${item.surn}==`}</span>
        <span>{`${item.age}`}</span>
      </p>
    );
  });

  const table = prods.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.cost}</td>
        <td>{item.name}</td>
      </tr>
    );
  });

  const userTable = users.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.surn}</td>
        <td>{item.age}</td>
      </tr>
    );
  });
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>surn</td>
            <td>age</td>
          </tr>
        </thead>
        <tbody>{userTable}</tbody>
      </table>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Cost</td>
          </tr>
        </thead>
        <tbody> {table}</tbody>
      </table>
      {res}
      {prod}
      {user}
    </>
  );
}

export default App;
