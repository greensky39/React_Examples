import React, { useState } from "react";

//useState = count
// useState = { count: 0};
function Example3() {
  const [state, setState] = useState({ count: 0 });

  function click() {
    // setState({ count: state.count + 1 });
    setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }

  return (
    <>
      <div>객체화 count : {state.count} </div>
      <p>
        <button onClick={click}>button</button>
      </p>
    </>
  );
}

export default Example3;
