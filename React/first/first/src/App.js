import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  function increment() {
    count < 10 && setCount((c) => c + 1);
  }
  function decrement() {
    count > -10 && setCount((c) => c - 1);
  }
  return (
    <div className="abcd">
      <h1>Practice</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>{count}</h1>
    </div>
  );
};
export default App;
