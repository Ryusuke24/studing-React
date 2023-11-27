import React, { useState } from "react";

function getSum(arr) {
  let res = 0;

  for (let elem of arr) {
    res += +elem;
  }

  return res;
}

function Calculator() {
  const [nums, setNums] = useState([1, 2, 3]);
  const [value, setValue] = useState(6);

  function handleChange(event) {
    let arr = event.target.value.split(",");
    setNums([...arr]);
  }

  function handleBlur() {
    console.log(nums);
    setValue(getSum(nums));
  }

  return (
    <div>
      <p>{value}</p>
      <input
        value={nums.join(",")}
        onChange={event => {
          handleChange(event);
        }}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default Calculator;
