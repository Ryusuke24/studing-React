import React, { useState } from "react";

function UserField({ id, type, text, changeField }) {
  const [isChange, setIsChange] = useState(false);
  return isChange ? (
    <input
      defaultValue={text}
      onChange={event => changeField(id, type, event)}
      onBlur={() => setIsChange(false)}
    />
  ) : (
    <span onClick={() => setIsChange(true)}>{text}</span>
  );
}

export default UserField;
