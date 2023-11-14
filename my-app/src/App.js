import React, { useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

function getNanoidId() {
  return nanoid();
}

function getUuidId() {
  return uuid();
}

const prods = [
  { id: getNanoidId(), name: "product1", cost: 100 },
  { id: getNanoidId(), name: "product2", cost: 200 },
  { id: getNanoidId(), name: "product3", cost: 300 },
];

const users = [
  { id: getUuidId(), name: "user1", surn: "surn1", age: 30 },
  { id: getUuidId(), name: "user2", surn: "surn2", age: 31 },
  { id: getUuidId(), name: "user3", surn: "surn3", age: 32 },
];

function App() {
  const [name, setName] = useState("prod");
  function clickHandler() {
    setName("xxxx");
  }
  const [inCart, setInCart] = useState(false);
  const [isBanned, getBan] = useState(false);

  const [username, setUsername] = useState("username");
  const [surname, setSurname] = useState("surname");
  const [age, setAge] = useState("age");
  let arr = prods.map(item => {
    return (
      <p key={item.id}>{`${item.name} == ${item.cost} ----- ${item.id}`}</p>
    );
  });

  let arrUsers = users.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.surn}</td>
        <td>{item.age}</td>
      </tr>
    );
  });
  return (
    <>
      <p>{isBanned ? "qwe" : "Unbanned"}</p>
      <button
        onClick={() => {
          getBan(true);
        }}
      >
        ban
      </button>
      <button
        onClick={() => {
          getBan(false);
        }}
      >
        unban
      </button>
      <p>=========================</p>
      <p>{inCart ? "yes" : "no"}</p>
      <button onClick={() => setInCart(!inCart)}>add</button>
      <p>=========================</p>
      <div>
        <p>{username}</p>
        <button onClick={() => setUsername(users[0].name)}>press</button>
        <p>{surname}</p>
        <button onClick={() => setSurname(users[0].surn)}>press</button>
        <p>{age}</p>
      </div>
      <p>=========================</p>
      <p>{name}</p>
      <button onClick={() => setName("xxxx")}>press</button>
      <p>=========================</p>
      {arr}
      <p>==========================</p>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>surn</td>
            <td>age</td>
          </tr>
        </thead>
        <tbody>{arrUsers}</tbody>
      </table>
    </>
  );
}

export default App;
