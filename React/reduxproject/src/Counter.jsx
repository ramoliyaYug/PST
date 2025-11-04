import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, setStep } from './store/counterSlice'

const Counter = () => {
  // Access both count and step from Redux state
  const count = useSelector((state) => state.myCounter.count)
  const step = useSelector((state) => state.myCounter.step)

  // Create dispatch function
  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Count: {count}</h2>

      {/* Input to change step value */}
      <label>Step: </label>
      <input
        type="number"
        value={step}
        onChange={(e) => dispatch(setStep(Number(e.target.value)))}
        style={{ width: "60px", textAlign: "center" }}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
