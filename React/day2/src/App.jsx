import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  useState[isCalcVisible, setIsCalcVisible] = useState(false)
  useState[apiResponse, setApiResponse] = useState(null)
  //fetch api
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => setApiResponse(data))
  })
  return (
    <>
    if(isCalcVisible){
      <Calculator/>
    }else{
      <h1>{apiResponse}</h1>
    }
    </>
  )
}

export default App
