import React from 'react'

const App = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} id="email" type="text" placeholder='Enter Email..'/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} id="pass" type="password" placeholder='Enter Password..'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App