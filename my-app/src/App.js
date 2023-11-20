import React, { useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

function getId() {
  return nanoid();
}

function App() {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(2);
  const [button, Submit] = useState(0);

  let date = new Date();
  const [date1, setDate1] = useState(
    `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  );

  const [focus, setFocus] = useState(0);
  const [date2, setDate2] = useState(2023);
  const [btn, click] = useState(true);

  function getRangeDays(date1, date2) {
    date1 = date1.split("-");
    date2 = date2.split("-");
    let firstDate = new Date(date1[0], date1[1] - 1, date1[2]);
    let secondDate = new Date(date2[0], date2[1] - 1, date2[2]);
    return Math.abs((firstDate - secondDate) / 1000 / 60 / 60 / 24);
  }

  const [blur2, getBlur2] = useState(0);

  function getDel(num) {
    let res = "1";
    const NOD = 2;
    for (let i = NOD; i <= num; i++) {
      if (num % i === 0) {
        res += `*${i}`;
        num = Math.floor(num / i);
        i = NOD;
      }
    }
    console.log(res);
    return res;
  }
  return (
    <>
      <div>
        <p>=====================================================</p>
        <input onBlur={event => getBlur2(event.target.value)} />
        <p>{getDel(blur2)}</p>
      </div>
      <div>
        <p>=====================================================</p>
        <input onBlur={event => setFocus(focus + +event.target.value)} />
        <p>{focus}</p>
      </div>
      <div>
        <p>=====================================================</p>
        <input
          defaultValue={date1}
          onChange={event => setDate1(event.target.value)}
        />
        <input onChange={event => setDate2(event.target.value)} />
        <button onClick={() => click(getRangeDays(date1, date2))}>
          getRange
        </button>
        <p>{btn}</p>
      </div>
      <div>
        <p>=====================================================</p>
        <input onChange={event => setValue1(event.target.value)} />
        <input onChange={event => setValue2(event.target.value)} />
        <button onClick={() => Submit(+value1 + +value2)}>+</button>
        <button onClick={() => Submit(+value1 * +value2)}>*</button>
        <p>{button}</p>
      </div>
      <div>
        <p>=====================================================</p>
        <input onChange={event => setValue1(event.target.value)} />
        <input onChange={event => setValue2(event.target.value)} />
        <button onClick={() => Submit(+value1 + +value2)}>press</button>
        <p>{button}</p>
      </div>
    </>
  );
}

export default App;
