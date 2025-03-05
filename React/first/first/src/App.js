import React, { useState } from 'react'
import './App.css'

const App = () => {
    const [count, setCount] = useState(0)
    function inc(){
        setCount(count + 1)
    }
    function dec(){
        setCount(count - 1)
    }
  return (
    <>
      <h1 className="title">App</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <p>Count: {count}</p>
    </>
  )
}

export default App