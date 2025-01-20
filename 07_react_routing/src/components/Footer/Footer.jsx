import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '/public/images/logo.svg'

export const Footer = () => {
  return (
    <>
    <div className='h-[200px] w-full bg-yellow-400 flex items-center justify-between px-[200px]'>
      <div>
        <Link to="/">
        <img src={logo} alt="" className='w-[100px]' />
        </Link>
      </div>
      <div>
        <p className='text-black'>&copy; 2025 Bilders. All Rights Reserved.</p>
      </div>
      <div>
        <ul className='font-extrabold text-[20px]'>
          <li>
            <NavLink to="/" className={({isActive})=>`block duration-300 ${isActive ? "text-orange-600" : "text-gray-600"}` }>HOME</NavLink>
          </li>
          <li>
          <NavLink to="/about" className={({isActive})=>`block duration-300 ${isActive ? "text-orange-600" : "text-gray-600"}` }>ABOUT</NavLink>
          </li>
          <li>
          <NavLink to="/contact" className={({isActive})=>`block duration-300 ${isActive ? "text-orange-600" : "text-gray-600"}` }>CONTACT</NavLink>
           </li>
        </ul>
      </div>

    </div>
    
    </>
  )
}
