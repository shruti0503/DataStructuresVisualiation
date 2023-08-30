import React, { useState } from 'react';
import ArrayVisualization from './components/Array';
import HashMapVisualization from './components/Hashmap';
import Stack from './components/stack';

function App() {
  return (
    <div>
      <ArrayVisualization />
      <HashMapVisualization />
      <Stack />
    </div>
  )
  
}

export default App;
