import React, { useState } from "react";
import { nanoid } from "nanoid";
import UserField from "./UserField";

function User({ name, surname, age, id, banned, getBanUser, changeField }) {
  return (
    <>
      <div>
        <p>{id}</p>
        <UserField
          text={name}
          type={"name"}
          id={id}
          changeField={changeField}
        ></UserField>
        <br />
        <UserField
          text={surname}
          type={"surname"}
          changeField={changeField}
          id={id}
        ></UserField>
        <br />
        <UserField
          text={age}
          type={"age"}
          changeField={changeField}
          id={id}
        ></UserField>
        <br />
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
