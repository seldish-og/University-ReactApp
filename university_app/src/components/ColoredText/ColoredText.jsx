import React, { useState } from 'react';

function ColorChangeFunc() {
  const [color, setColor] = useState('');

  function handleChange(event) {
    setColor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    document.getElementById('text').style.color = color;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="color-input">Enter a color:</label>
        <input type="text" id="color-input" value={color} onChange={handleChange} />
        <button type="submit">Change Text Color</button>
      </form>
      <p id="text">This is some text.</p>
    </div>
  );
}

export const ColorChanger = () => {
    // Возвращаем JSX-элемент с использованием props
    return ColorChangeFunc();
  }