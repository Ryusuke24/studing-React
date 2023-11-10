import React from "react";

function App() {
  const list = (
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  );

  const list2 = (
    <ul>
      <li>text1</li>
      <li>text2</li>
      <li>text3</li>
    </ul>
  );

  const block = (
    <div>
      {""}
      {list} <p class="one">paragraf 1</p> <p class="two">paragraf 2</p>
      <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
      {list2};
    </div>
  );

  return (
    <>
      <input />
      {block}
    </>
  );
}

export default App;
