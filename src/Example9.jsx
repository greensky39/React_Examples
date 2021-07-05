import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Example9() {
  const [count, setCount] = useState(0);

  function click() {
    setCount(count + 1);
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={click}>click btn !</button>
    </>
  );
}

export default Example9;
