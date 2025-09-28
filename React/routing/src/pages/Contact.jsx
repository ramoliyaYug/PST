import React from 'react'
import { Outlet, useNavigate} from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  const toPhone = () =>{
    navigate('/contact/phone')
  }
  const toEmail = () =>{
    navigate('/contact/email')
  }
  return (
    <div >
      <div className='bg-gray-100 p-4 rounded-lg text-center shadow-md'>Contact</div>
      {/* <div className='bg-gray-100 p-4 rounded-lg text-center shadow-md'>
        <NavLink to="/contact/email" className={({isActive}) => isActive ? 'text-red-500 hover:underline mx-2' : 'text-blue hover:underline mx-2'}>Email</NavLink>
        <NavLink to="/contact/phone" className={({isActive}) => isActive ? 'text-red-500 hover:underline mx-2' : 'text-blue hover:underline mx-2'}>Phone</NavLink>
      </div> */}

      <div className='bg-gray-100 p-4 rounded-lg text-center shadow-md'>
        <button onClick={toEmail} className="px-4 py-2 m-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Email</button>
        <button onClick={toPhone} className="px-4 py-2 m-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Phone</button>
      </div> 
      <div>
      <Outlet/>
      </div>
    </div>
  )
}

export const Email = () => {
  return (
    <div className='bg-gray-100 p-4 rounded-lg text-center shadow-md'>Email</div>
  )
}

export const Phone = () => {
  return (
    <div className='bg-gray-100 p-4 rounded-lg text-center shadow-md'>Phone</div>
  )
}

export default Contact