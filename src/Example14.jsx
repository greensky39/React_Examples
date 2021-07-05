import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import {} from "@emotion/react";

function Example14() {
  let [count, setCount] = useState(0);
  function clickplus() {
    if (count > 4) {
      count = 4;
    }
    setCount(count + 1);
  }
  function clickminus() {
    if (count < -4) {
      count = -4;
    }
    setCount(count - 1);
  }

  return (
    <>
      <p>
        <b>Example14</b>
      </p>
      <p>count : {count}</p>
      <button onClick={clickplus}>click !</button>
      <button onClick={clickminus}>click !</button>
    </>
  );
}

export default Example14;
