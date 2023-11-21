import React, { useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

function getId() {
  return nanoid();
}

function getSum(arr) {
  let sum = 0;
  for (const elem of arr) {
    sum += +elem;
  }
  return sum;
}

function App() {
  const [value, setValue] = useState("text");
  const [checked, setChecked] = useState(false);

  const [notes, setNotes] = useState([1, 2, 3]);

  function handleChange(index, event) {
    setNotes([
      ...notes.slice(0, index),
      event.target.value,
      ...notes.slice(index + 1),
    ]);
  }

  const result = notes.map((note, index) => (
    <input
      key={index}
      value={note}
      onChange={event => handleChange(index, event)}
    />
  ));

  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const inputs = arr.map((input, index) => (
    <input
      key={index}
      value={input}
      onChange={event => getHandleChange(index, event)}
    />
  ));

  function getHandleChange(index, event) {
    setArr([
      ...arr.slice(0, index),
      event.target.value,
      ...arr.slice(index + 1),
    ]);
  }

  function getSrAr(arr) {
    let sum = 0;
    for (let elem of arr) {
      sum += +elem;
    }
    return Math.floor(sum / arr.length);
  }

  return (
    <>
      <div>
        {inputs}
        <p>{getSrAr(arr)}</p>
      </div>
      <p>==================================================</p>
      <div>
        {result}
        {getSum(notes)}
      </div>
      <p>==================================================</p>
      <div>
        <input defaultValue={value} />
        <input type="checkbox" defaultChecked={checked} />
      </div>
    </>
  );
}

export default App;
