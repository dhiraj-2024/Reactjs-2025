import React from 'react'
import logo from '/public/images/logo.svg'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
  return (
     <>
     <div className='w-full h-[80px] px-[100px] bg-yellow-400 flex items-center justify-between '>
        <div className=''>
          <Link to="/" className='w-[100px] inline-flex items-center gap-5 '>
          <img src={logo} alt="" className='w-16' />
            <h1 className='text-[35px] font-extrabold text-gray-600'>Bilders</h1>
          </Link>
        </div>
        <div>
          <ul className='flex gap-10 font-bold text-[18px] cursor-pointer '>
            <li><NavLink to="/" className={({isActive})=>`block duration-200 ${isActive ? "text-orange-600" : "text-black"} `}>HOME</NavLink></li>
            <li><NavLink to="/about" className={({isActive})=>`block duration-200 ${isActive ? "text-orange-600" : "text-black"}`}>ABOUT</NavLink></li>
            <li><NavLink to ="/contact" className={({isActive})=>`block duration-200 ${isActive ? "text-orange-600" : "text-black"}`}>CONTACT</NavLink></li>
          </ul>
        </div>

     </div>
     
     
     </>
  )
}
