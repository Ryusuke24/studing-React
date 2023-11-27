import React, { useState } from "react";
import { nanoid } from "nanoid";
import User from "./User";

function id() {
  return nanoid();
}

const initUsers = [
  {
    id: id(),
    name: "user1",
    surname: "surn1",
    age: 30,
    banned: false,
  },
  {
    id: id(),
    name: "user2",
    surname: "surn2",
    age: 31,
    banned: false,
  },
  {
    id: id(),
    name: "user3",
    surname: "surn3",
    age: 32,
    banned: false,
  },
];

function Users() {
  function changeField(id, prop, event) {
    setUsers(
      users.map(user => {
        if (id === user.id) {
          user[prop] = event.target.value;
        }
        return user;
      })
    );
  }

  function getBanUser(id) {
    setUsers(
      users.map(user => {
        if (id == user.id) {
          user.banned = !user.banned;
        }

        return user;
      })
    );
  }

  const [users, setUsers] = useState(initUsers);
  const result = users.map(user => (
    <User
      key={user.id}
      id={user.id}
      name={user.name}
      surname={user.surname}
      age={user.age}
      banned={user.banned}
      getBanUser={getBanUser}
      changeField={changeField}
    />
  ));
  return <>{result}</>;
}

export default Users;
