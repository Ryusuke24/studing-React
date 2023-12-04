import React, { memo } from "react";

function Items({ items, addItem }) {
  const result = items.map((item, index) => <p key={index}> {item} </p>);

  return (
    <>
      <div>
        <h3>Our items</h3>
        {result}
        <button onClick={addItem}>add item</button>
      </div>
    </>
  );
}

export default memo(Items);
