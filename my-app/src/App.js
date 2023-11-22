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

  const initObj = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3",
  };

  const [obj, setObj] = useState(initObj);

  function handleChange2(prop, event) {
    let copy = Object.assign({}, obj);
    copy[prop] = event.target.value;
    setObj(copy);
    console.log({ ...obj });
  }

  const initDate = {
    year: 2025,
    month: 12,
    day: 31,
  };

  const [date, setDate] = useState(initDate);

  function onHandleChange(prop, event) {
    const copy = Object.assign({}, date);
    copy[prop] = event.target.value;
    setDate(copy);
  }

  return (
    <>
      <div>
        <input
          defaultValue={date.year}
          onChange={event => onHandleChange("year", event)}
        />
        <input
          defaultValue={date.month}
          onChange={event => onHandleChange("month", event)}
        />
        <input
          defaultValue={date.day}
          onChange={event => onHandleChange("day", event)}
        />
        <p>
          {date.year}-{date.month}-{date.day}
        </p>
      </div>
      <p>==================================================</p>
      <div>
        <input
          defaultValue={obj.prop1}
          onChange={event => handleChange2(["prop1"], event)}
        />
        <input
          defaultValue={obj.prop2}
          onChange={event => handleChange2(["prop2"], event)}
        />
        <input
          defaultValue={obj.prop3}
          onChange={event => handleChange2(["prop3"], event)}
        />
        <p></p>
        {obj.prop1}-{obj.prop2}-{obj.prop3}
      </div>
      <p>==================================================</p>
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
