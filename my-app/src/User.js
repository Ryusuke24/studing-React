import React, { useState } from "react";
import { nanoid } from "nanoid";

function User({
  name,
  surname,
  age,
  id,
  banned,
  getBanUser,
  isChange,
  toogleButton,
  changeUser,
}) {
  return (
    <>
      <div>
        <p>{id}</p>
        {isChange ? (
          <input
            defaultValue={name}
            onChange={event => changeUser(id, "name", event.target.value)}
          />
        ) : (
          <span>{name}</span>
        )}
        <br />
        {isChange ? (
          <input
            defaultValue={surname}
            onChange={event => changeUser(id, "surname", event.target.value)}
          />
        ) : (
          <span>{surname}</span>
        )}
        <br />
        {isChange ? (
          <input
            defaultValue={age}
            onChange={event => changeUser(id, "age", event.target.value)}
          />
        ) : (
          <span>{age}</span>
        )}
        <br />
        <button onClick={() => toogleButton(id)}>
          {isChange ? "save" : "edit"}
        </button>
        <p>{banned ? "yes" : "no"}</p>
        <button
          onClick={() => {
            getBanUser(id);
          }}
        >
          ban/unban user
        </button>
        <p>====================================================</p>
      </div>
    </>
  );
}

export default User;
