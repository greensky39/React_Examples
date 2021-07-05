// First: import useState. It's a named export from 'react'
// Or we could skip this step, and write React.useState
import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const MoreButton = css`
  color: #197fe6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  &:active {
    background-color: orange;
  }
  &:visited {
    background-color: red;
  }
`;

const LessButton = css`
  color: #95629c;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #f5e1d0;
  }
  &:active {
    background-color: black;
  }
  &:visited {
    background-color: yellow;
  }
`;

// This component expects 2 props:
//   text - the text to display
//   maxLength - how many characters to show before "read more"

function Example10() {
  const text = `Focused, hard work is the real key to success. 
  Keep your eyes on the goal, and just keep taking the next step towards completing it.`;
  const maxLength = 35;

  // Create a piece of state, and initialize it to `true`
  // `hidden` will hold the current value of the state,
  // and `setHidden` will let us change it
  const [hidden, setHidden] = useState(true);

  // If the text is short enough, just render it
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  // Render the text (shortened or full-length) followed by
  // a link to expand/collapse it.
  // When a link is clicked, update the value of `hidden`,
  // which will trigger a re-render
  function printTrue() {
    console.log("true");
  }
  function printFalse() {
    console.log("false");
  }
  return (
    <>
      <p>
        <b>Example10</b>
      </p>
      <span>
        {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
        {hidden ? (
          <div css={MoreButton} onClick={() => setHidden(false)}>
            {" "}
            read more
          </div>
        ) : (
          <div css={LessButton} onClick={() => setHidden(true)}>
            {" "}
            read less
          </div>
        )}
      </span>
    </>
  );
}
export default Example10;
