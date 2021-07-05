import React, { useState } from "react";

// class Example1 extends React.Component {
//   state = { count: 0 };

//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={this.click}>Click me</button>
//       </div>
//     );
//   }

//   click = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
// }

export default function Example2() {
  // const [count, SetCount] = React.useState(0);
  const [count, setCount] = useState(0);
  function click() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>You clicked {count} times!!!@@!@#!</p>
      <button onClick={click}>Click me</button>
    </div>
  );
}
