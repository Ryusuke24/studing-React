import React, { useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

function getId() {
  return nanoid();
}

function App() {
  function addLi() {
    let copy = [...notes];
    copy[copy.length] = copy.length + 1;
    setNotes(copy);
  }

  function addLiWithText(text) {
    let copy = [...notes];
    copy[copy.length] = text;
    setNotes(copy);
  }

  const [input, setInput] = useState("hello");
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const result = notes.map((note, index) => <li key={index}>{note}</li>);

  const [notes2, setNotes2] = useState([1, 2, 3, 4, 5]);
  const result2 = notes2.map((note, index) => (
    <li key={index} onClick={() => doSmth(index)}>
      {note}
    </li>
  ));
  function doSmth(index) {
    let copy = [...notes2];
    copy[index] += "!";
    setNotes2(copy);
  }

  const [notes3, setNotes3] = useState([10, 11, 12, 13, 14]);
  const result3 = notes3.map((note, index) => (
    <li key={index} onClick={() => doPow(index)}>
      {note}
    </li>
  ));
  function doPow(index) {
    let copy = Object.assign([], notes3);
    copy[index] = copy[index] ** 2;
    setNotes3(copy);
  }

  const [notes4, setNotes4] = useState(["q", "w", "e", "r", "t", "y"]);
  const result4 = notes4.map((note, index) => (
    <li key={index}>
      {note}
      <button onClick={() => delNote(index)}>del</button>
    </li>
  ));

  function delNote(index) {
    let copy = [...notes4];
    copy.splice(index, 1);
    setNotes4(copy);
  }

  const [notes5, setNotes5] = useState([
    "text",
    "text",
    "text",
    "text",
    "text",
  ]);
  const result5 = notes5.map((note, index) => (
    <li key={index} onClick={() => changeLi(index)}>
      {note}
    </li>
  ));

  const [input2, setInput2] = useState("");

  function changeLi(index) {
    let copy = [...notes5];
    copy[index] = input2;
    setNotes5(copy);
  }

  const [notes6, setNotes6] = useState(["1", "2", "3", "4", "5"]);
  const result6 = notes6.map((note, index) => (
    <li key={index} onClick={() => changeLi(index)}>
      {note}
    </li>
  ));

  function reverseLi() {
    let copy = [...notes6];
    copy.reverse();
    setNotes6(copy);
  }
  return (
    <>
      <p>=============================================</p>
      <div>
        <button onClick={() => reverseLi()}>reverse</button>
        <ul>{result6}</ul>
      </div>
      <p>=============================================</p>
      <div>
        <input
          defaultValue={input2}
          onChange={event => setInput2(event.target.value)}
        />
        <ul>{result5}</ul>
      </div>
      <p>=============================================</p>
      <div>
        <ul>{result4}</ul>
      </div>
      <p>=============================================</p>
      <div>
        <ul>{result3}</ul>
      </div>
      <p>=============================================</p>
      <div>
        <ul>{result2}</ul>
      </div>
      <p>=============================================</p>
      <div>
        <input onChange={event => setInput(event.target.value)} />
        <button onClick={() => addLiWithText(input)}>add with text</button>
      </div>
      <p>=============================================</p>
      <div>
        <ul>{result}</ul>
        <button onClick={addLi}>add li</button>
      </div>
      <p>=============================================</p>
    </>
  );
}

export default App;
