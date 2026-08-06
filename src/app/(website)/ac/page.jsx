"use client";

import React, { useState } from 'react';

function Counter() {
  // 1. Declare the state variable 'count' initialized at 0
  const [count, setCount] = useState(0);

  // 2. Define handler functions to update the state
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Counter</h1>
      
      {/* 3. Display the current count */}
      <h2>{count}</h2>
      
      {/* 4. Attach event handlers to buttons */}
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset} style={{ margin: '0 10px' }}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;