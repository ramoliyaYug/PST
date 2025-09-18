import React from 'react'

const App = () => {
  return (
    <div>
      <form>
        <input id="email" type="text" placeholder='Enter Email..'/>
        <input id="pass" type="password" placeholder='Enter Password..'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App