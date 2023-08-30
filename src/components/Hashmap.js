import React, { useState } from 'react';
import './HashMapVisualization.css'; // Create this CSS file for styling

const HashMapVisualization = () => {
  const [hashMapData, setHashMapData] = useState({});

  const handleInsert = (key, value) => {
    setHashMapData(prevData => ({ ...prevData, [key]: value }));
  };

  return (
    <div className="hashmap-container">
      <h1>Hashmap Visualization</h1>
      <div className="hashmap">
        <div className='headings'>
            <div className='Key'><h3>Key</h3></div>
            <div className='Value'><h3>Value</h3></div>
        </div>
        {Object.entries(hashMapData).map(([key, value]) => (
          <div key={key} className="hashmap-entry">
            <div className="entry-key">{key}</div>
            <div className="entry-value">{value}</div>
          </div>
        ))}
      </div>
      <div className="insert-form">
        <input type="text" placeholder="Key" id="keyInput" />
        <input type="text" placeholder="Value" id="valueInput" />
        <button
          onClick={() => {
            const key = document.getElementById('keyInput').value;
            const value = document.getElementById('valueInput').value;
            if (key && value) {
              handleInsert(key, value);
            }
          }}
        >
          Insert
        </button>
      </div>
    </div>
  );
};

export default HashMapVisualization;
