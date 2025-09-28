import { NavLink, useNavigate} from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    const handleLogo = () =>{
        navigate('/')
    }
  return (
    <div className='bg-blue-900 p-4 shadow-md flex justify-center'>
        <div onClick={handleLogo} className='mr-355 text-white'>Home Button</div>
        <NavLink to="/" className={({isActive}) => isActive ? 'text-red-500 hover:underline mx-2' : 'text-white hover:underline mx-2'}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'text-red-500 hover:underline mx-2' : 'text-white hover:underline mx-2'}>About</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? 'text-red-500 hover:underline mx-2' : 'text-white hover:underline mx-2'}>Contact</NavLink>
    </div>
  )
}

export default Navbar