import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact, { Email, Phone } from './pages/Contact'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} >
          <Route path='email' element={<Email />} />
          <Route path='phone' element={<Phone />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App