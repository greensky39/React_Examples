import React, { useState } from "react";

function Example12() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItem = (event) => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        name: itemName,
      },
    ]);
    setItemName("");
  };

  return (
    <>
      <p>
        <b>Example12</b>
      </p>
      <form onSubmit={addItem}>
        <label>
          <input
            name="item"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Example12;