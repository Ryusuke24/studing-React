import React, { useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

const initNotes = [
  {
    id: "GYi9G_uC4gBF1e2SixDvu",
    prop1: "value11",
    prop2: "value12",
    prop3: "value13",
  },
  {
    id: "IWSpfBPSV3SXgRF87uO74",
    prop1: "value21",
    prop2: "value22",
    prop3: "value23",
  },
  {
    id: "JAmjRlfQT8rLTm5tG2m1L",
    prop1: "value31",
    prop2: "value32",
    prop3: "value33",
  },
];

function getId() {
  return nanoid();
}

function App() {
  const [notes, setNotes] = useState(initNotes);
  const result = notes.map((note, index) => (
    <li key={note.id}>
      <span>{note.prop1}</span>
      <br />
      <span>{note.prop2}</span>
      <br />
      <span>{note.prop3}</span>
      <br />
      <button onClick={() => doSmth(note.id)}>doSmth</button>
      <button onClick={() => deleteLi(index)}>deleteLi</button>
      <button onClick={() => copyToInp(index)}>Copy to Input</button>
    </li>
  ));

  function deleteLi(index) {
    setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
  }

  function copyToInp(index, input) {
    let copy = [...notes];
    setInput11(copy[index].prop1);
    setInput22(copy[index].prop2);
    setInput33(copy[index].prop3);
    setInput44(copy[index].id);
  }

  function changeData(id) {
    setNotes(
      notes.map(note => {
        if (id === note.id) {
          note.prop1 = input11;
          note.prop2 = input22;
          note.prop3 = input33;
        }
        return note;
      })
    );
  }

  function doSmth(id) {
    setNotes(
      notes.map((note, index) => {
        if (note.id === id) {
          note.prop1 += "hello";
        }
        return note;
      })
    );
  }

  function addLi(notes, index) {
    let copy = [...notes];
    copy[index] = {};
    copy[index].id = nanoid();
    copy[index].prop1 = "hello";
    copy[index].prop2 = "world";
    copy[index].prop3 = "!";
    console.log(copy[index].id);
    setNotes(copy);
  }

  const [input11, setInput11] = useState("!");
  const [input22, setInput22] = useState("!");
  const [input33, setInput33] = useState("!");
  const [input44, setInput44] = useState("!");
  const [input1, setInput1] = useState("prop1");
  const [input2, setInput2] = useState("prop2");
  const [input3, setInput3] = useState("prop3");

  function addLiWithProp(arr, prop1, prop2, prop3) {
    let copy = [...arr];
    let length = copy.length;
    copy[length] = {};
    copy[length]["id"] = nanoid();
    copy[length]["prop1"] = prop1;
    copy[length]["prop2"] = prop2;
    copy[length]["prop3"] = prop3;
    console.log(copy[length]["id"]);
    setNotes(copy);
  }
  return (
    <>
      <p>===================================================</p>
      <div>
        <ul>{result}</ul>
        <input
          defaultValue={input11}
          value={input11}
          onChange={event => setInput11(event.target.value)}
        />

        <input
          defaultValue={input22}
          value={input22}
          onChange={event => setInput22(event.target.value)}
        />

        <input
          defaultValue={input33}
          value={input33}
          onChange={event => setInput33(event.target.value)}
        />
        <input
          defaultValue={input44}
          value={input44}
          onChange={event => setInput44(event.target.value)}
        />
        <button
          onClick={() => {
            changeData(input44);
          }}
        >
          changeData
        </button>
      </div>
      <p>===================================================</p>
      <div>
        <ul>{result}</ul>
      </div>
      <p>===================================================</p>
      <div>
        <ul>{result}</ul>
        <input
          defaultValue={input1}
          onChange={event => setInput1(event.target.value)}
        />
        <input
          defaultValue={input2}
          onChange={event => setInput2(event.target.value)}
        />
        <input
          defaultValue={input3}
          onChange={event => setInput3(event.target.value)}
        />
        <button onClick={() => addLiWithProp(notes, input1, input2, input3)}>
          press
        </button>
      </div>
      <p>===================================================</p>
      <div>
        <ul>{result}</ul>
        <button onClick={() => addLi(notes, notes.length)}>press</button>
      </div>
      <p>===================================================</p>
      <div>
        <ul>{result}</ul>
      </div>
      <p>===================================================</p>
    </>
  );
}

export default App;
