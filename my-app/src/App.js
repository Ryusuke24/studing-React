import React, { useEffect, useLayoutEffect, useState } from "react";
import { nanoid } from "nanoid";
import uuid from "react-uuid";

function getId() {
  return nanoid();
}

function App() {
  const [color, setColor] = useState("green");

  useLayoutEffect(() => {
    document.title = "Learning React";
    document.body.style.backgroundColor = color;
    // window.addEventListener("keydown", handlerEnter);
    window.addEventListener("click", hideBlock);

    return () => {
      // window.removeEventListener("keydown", handlerEnter);
      window.removeEventListener("click", hideBlock);
    };
  }, [color]);

  function changeColor() {
    if (color === "orangered") {
      setColor("green");
    } else setColor("orangered");
  }

  const [name, setName] = useState("Daniel");

  function changeName(event) {
    setName(event);
    localStorage.setItem("name", event);
  }

  // function handlerEnter(event) {
  //   if (event.keyCode === 13) {
  //     setColor("red");
  //   }
  // }

  // function handlerClick() {
  //   setColor("white");
  // }

  function hideBlock() {
    setBlock(false);
  }

  const [block, setBlock] = useState(false);

  function handleClicker(event) {
    setBlock(true);
    event.stopPropagation();
  }

  return (
    <>
      {" "}
      <p>========================================</p>
      <div>
        <button onClick={event => handleClicker(event)}>open div</button>
        {block ? (
          <div
            style={{
              width: "150px",
              backgroundColor: "yellow",
            }}
          >
            hello!
          </div>
        ) : (
          "none"
        )}
      </div>
      <p>========================================</p>
      <div>
        <h1>{name}</h1>
        <input
          defaultValue={name}
          onBlur={event => changeName(event.target.value)}
        />
      </div>
      <p>========================================</p>
      <div>
        <h1>React App</h1>
        <button onClick={changeColor}>Change color</button>
      </div>
    </>
  );
}

export default App;
