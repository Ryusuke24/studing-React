import React, { useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

function getId() {
  return nanoid();
}

function App() {
  const [value, setValue] = useState("text");
  const [firstInp, setFirstImp] = useState("inp1");
  const [secondInp, setSecondImp] = useState("inp2");
  const [num, setNum] = useState(2);
  const [str, setStr] = useState("abc");
  const [num2, setNum2] = useState(2);
  const [age, setAge] = useState(18);
  const [temp, setTemp] = useState(55);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(2);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function getPow(num) {
    return Math.pow(num, 2);
  }

  function convertFar(far) {
    return Math.floor(((Number(far) - 32) * 5) / 9);
  }

  function bornYear(age) {
    let date = new Date();
    let year = date.getFullYear();
    return year - Number(age);
  }

  return (
    <>
      <div>
        {" "}
        <input
          defaultValue={value2}
          onChange={event => setValue1(+event.target.value)}
        />
        <input
          defaultValue={value2}
          onChange={event => setValue2(+event.target.value)}
        />
        <p>result: {value1 + value2}</p>
        <p>=======================================================</p>
        <input
          defaultValue={temp}
          onChange={event => setTemp(event.target.value)}
        />
        <p>{convertFar(temp)}</p>
        <p>=======================================================</p>
        <input
          defaultValue={age}
          onChange={event => setAge(event.target.value)}
        />
        <p>{bornYear(age)}</p>
        <p>=======================================================</p>
        <input onChange={event => setNum2(event.target.value)} />
        <p>{getPow(num2)}</p>
        <p>=======================================================</p>
        <input
          defaultValue={str}
          onChange={event => setStr(event.target.value)}
        />
        <p>{str.length}</p>
        <p>=======================================================</p>
        <input
          defaultValue={num}
          onChange={event => setNum(Number(event.target.value))}
        />
        <p>{num ** 2}</p>
        <p>=======================================================</p>
        <input defaultValue={value} onChange={handleChange} />
        <input
          defaultValue={value}
          onChange={event => setFirstImp(event.target.value)}
        />
        <input
          defaultValue={value}
          onChange={event => setSecondImp(event.target.value)}
        />
        <p>{value}</p>
        <p>{firstInp}</p>
        <p>{secondInp}</p>
      </div>
    </>
  );
}

export default App;
