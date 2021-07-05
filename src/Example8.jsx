import React, { useState, useEffect } from "react";

function Example8() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("componentDidMount");
    return () => {
      //cleanup
      // componentWillUnmount
    };
  }, []);

  useEffect(() => {
    console.log("componentDidMount & componentDidUpdate", count);

    return () => {
      // cleanup
      console.log("claenup by count", count);
    };
  }, [count]);

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

export default Example8;
