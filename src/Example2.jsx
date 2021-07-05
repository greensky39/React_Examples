import React, { useState } from "react";

function Example2() {
  const [count, setCount] = useState(0);

  function click() {
    setCount(count + 1);
  }

  return (
    <>
      <div>count : {count} </div>
      <p>
        <button onClick={click}>button</button>
      </p>
    </>
  );
}

export default Example2;
