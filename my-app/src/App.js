import React from "react";

function App() {
  let text = "";
  let flag = true;
  const isAdult = false;
  let adultCheck = "";
  if (flag)
    text = (
      <p>
        <strong>txt222</strong>
      </p>
    );

  if (isAdult) {
    adultCheck = (
      <p>
        <strong>
          <i>Yea</i>
        </strong>
      </p>
    );
  } else {
    adultCheck = <p>gerara here</p>;
  }
  return (
    <>
      <div>{text}</div>
      <div>{adultCheck}</div>
    </>
  );
}

export default App;
