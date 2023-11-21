import React, { useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

function getId() {
  return nanoid();
}

function App() {
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(1);
  const [lang, setLang] = useState("Js");

  return (
    <>
      <div>
        <input
          type="radio"
          name="lang"
          value="php"
          onChange={event => setLang(event.target.value)}
        />
        <input
          type="radio"
          name="lang"
          value="Js"
          onChange={event => setLang(event.target.value)}
        />
        <input
          type="radio"
          name="lang"
          value="Pyton"
          onChange={event => setLang(event.target.value)}
        />
        <p>{lang === "Js" ? "You are Cool!" : lang}</p>
      </div>
      <p>==================================================</p>
      <div>
        <input
          type="radio"
          name="radio2"
          value="1"
          onChange={event => setValue2(event.target.value)}
        />
        <input
          type="radio"
          name="radio2"
          value="2"
          onChange={event => setValue2(event.target.value)}
        />
        <input
          type="radio"
          name="radio2"
          value="3"
          onChange={event => setValue2(event.target.value)}
        />
        <p>{value2}</p>
      </div>
      <p>==================================================</p>
      <div>
        <input
          type="radio"
          name="radio"
          value="1"
          checked={value === "1" ? true : false}
          onChange={event => setValue(event.target.value)}
        />
        <input
          type="radio"
          name="radio"
          value="2"
          checked={value === "2" ? true : false}
          onChange={event => setValue(event.target.value)}
        />
        <input
          type="radio"
          name="radio"
          value="3"
          checked={value === "3" ? true : false}
          onChange={event => setValue(event.target.value)}
        />
        <p>{value}</p>
      </div>
      <p>==================================================</p>
    </>
  );
}

export default App;
