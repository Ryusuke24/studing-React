import React from "react";

function User({ username, uid, age }) {
  return (
    <>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>{username}</td>
            <td>{age}</td>
            <td>{uid}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default User;
