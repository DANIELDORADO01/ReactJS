import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa'; 
import Logo from '../assets/logo2.png';



const Navbar = () => {
  const[nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-blue-500 text-black-300">
    <div>
      <img src={Logo} alt="Logo Here!" style={{width: '50px'}}></img>
    </div> 


      <ul className='hidden md:flex'>
      <li>
          <a href='/'>Home</a>
        </li>
        <li>
        <a href='/about'>About</a>
        </li>
        <li>
        <a href='/skills'>Skills</a>
        </li>
      </ul>


      <div onClick={handleClick} className='md:hidden z-10'>
        <FaBars />
      </div>

      <ul className={!nav ? 'hidden' : 'absolute top-0 w-full h-screen bg-blue-500 flex flex-col justify-center items-center'}>
      <li className='py-6 text-4xl'>
      <a href='/'>Home</a>
        </li>
        <li className='py-6 text-4xl'>
          
          <a href='/About'>About</a>
        </li>
        <li className='py-6 text-4xl'>
          
          <a href='/Skills'>Skills</a>
        </li>
      </ul>

      <div className='hidden'></div>

    </div>
  )
}

export default Navbar