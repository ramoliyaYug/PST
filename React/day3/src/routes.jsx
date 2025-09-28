import React from 'react'
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact, { Email, Phone } from './pages/Contact'
import Navbar from './components/Navbar'
import Layout from './pages/Layout'
import Param from './pages/Param'

const router=createBrowserRouter(     // array of objects
  [
    {path:"/",element:<Layout/>,children:[
      {path:"",element:<Home/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>,children:[{path:"email",element:<Email/> },{path:"phone",element:<Phone/>}]}
    ]},
    {
      path:"/abcd/:id/:name",
      element:<Param/>
    },
    {
      path:"*",element:<>This page does not exist.Enter a valid url</>
    }
  ]
)

const App = () => {
  return (
    <div>
      {/* <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}>
         <Route path="email" element={<Email/>}/>
         <Route path="phone" element={<Phone/>}/>
        </Route>
       </Routes> */}

       <RouterProvider router={router}/>

    </div>
  )
}

export default App