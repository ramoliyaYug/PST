import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact, { Email, Phone } from './pages/Contact'
import Layout from './Layout'
import Param from './pages/Param'

const router1 = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />,
        children: [
          { path: "email", element: <Email /> },
          { path: "phone", element: <Phone /> }
        ]
      }
    ]
  },
  {
    path:'/abcd/:id/:name',
    element:<Param/>
  },
  {
    path:'*',
    element:<>This page does not exist. Enter a valid url</>
  }
]);

const App2 = () => {
  return (
    <div>
      <RouterProvider router={router1}/>
    </div>
  )
}
export default App2