import React, { useCallback, useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

function getId() {
  return nanoid();
}

function App() {
  const [value, setValue] = useState("");
  const [trans, setTrans] = useState("привет");

  function getTranslite(str) {
    str = str.split("");
    let map = {
      а: "a",
      б: "b",
      в: "v",
      г: "g",
      д: "d",
      ["ё"]: "e",
      ["е"]: "e",
      ж: "j",
      з: "z",
      и: "i",
      й: "i",
      к: "k",
      л: "l",
      м: "m",
      н: "n",
      о: "o",
      п: "p",
      р: "r",
      с: "s",
      т: "t",
      у: "y",
      ч: "ch",
      ш: "sh",
      щ: "sch",
      ы: "i",
      ь: "'",
      ю: "u",
      я: "ya",
      [" "]: " ",
    };

    let newStr = "";
    for (let elem of str) {
      newStr += map[elem];
    }

    return newStr;
  }

  const [num, setNum] = useState("0");

  function getSum(value) {
    value = value.split("\n");
    let sum = 0;
    for (let elem of value) {
      sum += +elem;
    }
    return sum;
  }

  const [checked, setChecked] = useState(true);

  const [greetings, setGreetings] = useState(true);
  const [val, setVal] = useState("Hello");

  const [html, setHtml] = useState(true);
  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);

  const [checked2, setChecked2] = useState(true);
  let message;
  if (checked2) {
    message = <p>mess1</p>;
  } else {
    message = <p>mess2</p>;
  }

  const [validateAge, setValidateAge] = useState(true);
  let accept;
  if (validateAge) {
    accept = (
      <div>
        <h2>Yaapi ,adult content</h2>
        <p>there placed content only 18+</p>
      </div>
    );
  } else {
    accept = (
      <div>
        <p>You're not adult</p>
      </div>
    );
  }

  const [visPara, setVisPara] = useState(true);
  let para;

  if (visPara) {
    para = <p style={{ display: "block" }}>123</p>;
  } else {
    para = <p style={{ display: "none" }}>123</p>;
  }

  return (
    <>
      {" "}
      <div>
        <p>================================================</p>
        <input
          type="checkbox"
          defaultChecked={visPara}
          onChange={event => setVisPara(!visPara)}
        />
        {para}
      </div>
      <div>
        <p>================================================</p>
        <input
          type="checkbox"
          defaultChecked={validateAge}
          onChange={event => setValidateAge(!validateAge)}
        />
        <p>{accept}</p>
      </div>
      <div>
        <p>================================================</p>
        <input
          type="checkbox"
          defaultChecked={checked2}
          onChange={event => setChecked2(!checked2)}
        />
        <p>{message}</p>
      </div>
      <div>
        <p>================================================</p>
        <label>
          html
          <input
            type="checkbox"
            defaultChecked={html}
            onChange={() => setHtml(!html)}
          />
        </label>{" "}
        <label>
          css
          <input
            type="checkbox"
            defaultChecked={css}
            onChange={() => setCss(!css)}
          />
        </label>{" "}
        <label>
          js
          <input
            type="checkbox"
            defaultChecked={js}
            onChange={() => setJs(!js)}
          />
        </label>
        <p>
          Knowledge:{html ? "html" : ""} {css ? "css" : ""} {js ? "js" : ""}
        </p>
      </div>
      <div>
        <p>================================================</p>
        <input
          type="checkbox"
          defaultChecked={greetings}
          onChange={() => setGreetings(!greetings)}
        />
        <button onClick={() => (greetings ? setVal("Hello") : setVal("Bye"))}>
          {" "}
          press{" "}
        </button>
        <p>{val}</p>
      </div>
      <div>
        <p>================================================</p>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={event => setChecked(!checked)}
        />
        <p>{checked ? `checked` : `not checked`}</p>
      </div>
      <div>
        <p>================================================</p>
        <textarea
          defaultValue={num}
          onChange={event => setNum(event.target.value)}
        ></textarea>
        <p>{getSum(num)}</p>
      </div>
      <div>
        <p>================================================</p>
        <textarea
          defaultValue={trans}
          onChange={event => setTrans(event.target.value)}
        ></textarea>
        <p>{getTranslite(trans)}</p>
      </div>
      <div>
        <p>================================================</p>
        <textarea
          defaultValue={value}
          onChange={event => setValue(event.target.value)}
        ></textarea>
        <p>{value}</p>
      </div>
    </>
  );
}

export default App;
