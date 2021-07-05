import React, { useState } from "react";
/** @jsxImportSource @emotion/react*/
import { css } from "@emotion/react";

//useState = count
// useState = { count: 0};
function Example6() {
  const [state, setState] = useState({ color: 2 });

  function click() {
    // setState({ count: state.count + 1 });
    setState((state) => {
      return {
        color: 1,
      };
    });
  }

  return (
    <>
      <div>color : {state.color} </div>
      <p>
        <button onClick={click}>Change Color !!</button>
      </p>
    </>
  );
}

export default Example6;
