import React, { useState } from "react";

function ProductField({ id, text, type, changeField }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <td>
      {isEdit ? (
        <input
          defaultValue={text}
          onChange={event => changeField(id, type, event)}
          onBlur={() => setIsEdit(false)}
        />
      ) : (
        <span onClick={() => setIsEdit(true)}>{text}</span>
      )}
    </td>
  );
}

export default ProductField;
