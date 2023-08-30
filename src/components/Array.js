import React, { useState } from 'react';
import './array.css';

// function ArrayVisualization() { ... }:
function ArrayVisualization() {
  const [array, setArray] = useState([25, 10, 42, 7, 32]); // Initial array state
     
  const addElement = () => {
    const newValue = Math.floor(Math.random() * 50) + 1;
    setArray([...array, newValue]);
  };

  const removeElement = (index) => {
    const newArray = array.filter((_, i) => i !== index);
    setArray(newArray);
  };
// crete a defualt arr


  return (
    <div className="App">
      <h1>Array Data Structure Visualization</h1>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="array-element"
            style={{ height: `${value * 5}px` }}
          >
            {value}
            <button onClick={() => removeElement(index)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={addElement}>Add Random Element</button>
    </div>
  );
}

export default ArrayVisualization;
