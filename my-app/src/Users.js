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
    isChange: false,
  },
  {
    id: id(),
    name: "user2",
    surname: "surn2",
    age: 31,
    banned: false,
    isChange: false,
  },
  {
    id: id(),
    name: "user3",
    surname: "surn3",
    age: 32,
    banned: false,
    isChange: false,
  },
];

function Users() {
  function changeUser(id, prop, value) {
    setUsers(
      users.map(user => {
        if (id === user.id) {
          user[prop] = value;
        }

        return user;
      })
    );
  }

  function toogleButton(id) {
    setUsers(
      users.map(user => {
        if (id === user.id) {
          user.isChange = !user.isChange;
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
      isChange={user.isChange}
      toogleButton={toogleButton}
      changeUser={changeUser}
    />
  ));
  return <>{result}</>;
}

export default Users;
