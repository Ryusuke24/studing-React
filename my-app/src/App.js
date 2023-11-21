import React, { useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

function getId() {
  return nanoid();
}

function App() {
  const [value, setValue] = useState("");
  const [city, setCity] = useState("");

  const texts = ["text1", "text2", "text3", "text4"];
  const [value2, setValue2] = useState("");
  const options = texts.map((text, index) => (
    <option key={index}>{text}</option>
  ));

  const cities = ["Moscow", "Tokio", "Osaka", "Paris", "Minsk"];
  const [city2, setCity2] = useState("city");
  const op = cities.map((city, index) => <option key={index}>{city}</option>);
  const [value3, setValue3] = useState("");
  const [age, setAge] = useState("0-12");

  const texts2 = ["text1", "text2", "text3", "text4"];
  const [value4, setValue4] = useState("");
  let op2 = texts2.map((item, index) => (
    <option key={index} value={index}>
      {item}
    </option>
  ));

  return (
    <>
      {" "}
      <div>
        <select
          defaultValue={value4}
          onChange={event => setValue4(event.target.value)}
        >
          {op2}
        </select>
        <p>Your : {texts2[value4]}</p>
      </div>
      <p>=======================================================</p>
      <div>
        <select
          defaultValue={age}
          onChange={event => setAge(event.target.value)}
        >
          <option value={1}>0-12</option>
          <option value={2}>13-17</option>
          <option value={3}>18-25</option>
          <option value={4}>25+</option>
        </select>
        <p>
          {age === "1" && "0-12"}
          {age === "2" && "13-17"}
          {age === "3" && "18-25"}
          {age === "4" && "25+"}
        </p>
      </div>
      <p>=======================================================</p>
      <div>
        <select onChange={event => setValue3(event.target.value)}>
          <option value="1">text1</option>
          <option value="2">text2</option>
          <option value="3">text3</option>
          <option value="4">text4</option>
        </select>
        <p>
          {value3 === "1" && "text1"}
          {value3 === "2" && "text2"}
          {value3 === "3" && "text3"}
          {value3 === "4" && "text4"}
        </p>
      </div>
      <p>=======================================================</p>
      <div>
        <select
          defaultValue={city2}
          onChange={event => setCity2(event.target.value)}
        >
          {op}
        </select>
        <p>your city == {city2}</p>
      </div>
      <p>=======================================================</p>
      <div>
        <select
          defaultValue={value2}
          onChange={event => setValue2(event.target.value)}
        >
          {options}
        </select>
        <p>your op : {value2}</p>
      </div>
      <div>
        <p>=======================================================</p>
        <select
          defaultValue={city}
          onChange={event => setCity(event.target.value)}
        >
          <option>Moscow</option>
          <option>Istambul</option>
          <option>Paris</option>
          <option>NY</option>
          <option>London</option>
        </select>
        <p>Your city is == {city}</p>
      </div>
      <div>
        <p>=======================================================</p>
        <select
          defaultValue={value}
          onChange={event => setValue(event.target.value)}
        >
          <option>op1</option>
          <option>op2</option>
          <option>op3</option>
          <option>op4</option>
        </select>
        <p>You choice : {value}</p>
      </div>
    </>
  );
}

export default App;
