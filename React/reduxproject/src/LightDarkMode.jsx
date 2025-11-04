import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from './store/darkModeSlice'

const LightDarkMode = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.myDarkMode.isDarkMode);
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' , backgroundColor: isDarkMode ? 'purple' : 'white', color: isDarkMode ? 'white' : 'purple',height: '100vh',margin:'-20px'}}>
      <h2>{isDarkMode ? 'Purple Mode' : 'White Mode'}</h2>
      <button onClick={() => dispatch(toggleDarkMode())}>
        Toggle Purple/White mode
      </button>
    </div> 
  )
}

export default LightDarkMode