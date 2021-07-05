// First: import useState, which is a named export from 'react'
// We could alternatively skip this step, and write React.useState
import React, { useState } from "react";

function Example11() {
  const [form, setValues] = useState({
    username: "",
    password: "",
  });

  const printValues = (e) => {
    e.preventDefault();
    console.log(form.username, form.password);
  };

  const updateField = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <p>
          <b>Example11</b>
        </p>
      </div>
      <form onSubmit={printValues}>
        <label>
          Username:
          <input value={form.username} name="username" onChange={updateField} />
        </label>
        <br />
        <label>
          Password:
          <input
            value={form.password}
            name="password"
            type="password"
            onChange={updateField}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Example11;
