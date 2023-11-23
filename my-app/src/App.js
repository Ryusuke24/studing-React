import React, { useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

function getId() {
  return nanoid();
}

const initNotes = [
  {
    id: getId(),
    name: "name1",
    desc: "long description 1",
    show: false,
  },
  {
    id: getId(),
    name: "name2",
    desc: "long description 2",
    show: false,
  },
  {
    id: getId(),
    name: "name3",
    desc: "long description 3",
    show: false,
  },
];

function App() {
  function changeShow(id, show) {
    setNotes(
      notes.map(note => {
        if (note.id === id) {
          note.show = !show;
        }
        return note;
      })
    );
  }
  const [notes, setNotes] = useState(initNotes);
  const res = notes.map((note, index) => {
    return (
      <p key={note.id}>
        {note.name}{" "}
        <button onClick={() => changeShow(note.id, note.show)}>
          Show desc
        </button>
        {note.show ? <i> {note.desc} </i> : ""}
      </p>
    );
  });
  return <>{res}</>;
}

export default App;
