// import React, { Component } from "react";

// class ToggleSwitch extends Component {
//   render() {
//     return (
//       <div className="toggle-switch">
//         <input
//           type="checkbox"
//           className="toggle-switch-checkbox"
//           name="toggleSwitch"
//           id="toggleSwitch"
//         />
//         <label className="toggle-switch-label" htmlFor="toggleSwitch">
//           <span className="toggle-switch-inner" />
//           <span className="toggle-switch-switch" />
//         </label>
//       </div>
//     );
//   }
// }

// export default ToggleSwitch;

import React, { useState, useEffect } from "react";

function ToggleSwitch() {
  const [tg, setToggle] = useState(false);

  function onToggle() {
    // setToggle(tg);
  }
  function consoleLogPrint() {
    console.log("check");
  }

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
        checked={consoleLogPrint}
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
}

export default ToggleSwitch;
