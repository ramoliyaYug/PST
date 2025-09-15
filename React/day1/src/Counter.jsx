import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(0)
  return (
    <>
    <h1>Counter</h1>
    <h2>{count}</h2>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}

export default Counter