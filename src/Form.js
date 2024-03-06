import React, { useState } from 'react';

export function Form(props) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const handleClick = () => {
    // Replace 'https://example.com' with the URL you want to open
    window.open('https://github.com/jatinchary/trip-checklist');
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    props.onAddItems(newItem);
    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What all do you need for your trip???</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
      <button onClick={handleClick}>github</button>
     
    </form>
  );
}
