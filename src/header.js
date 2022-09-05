import React from 'react'
import './index.css'
import logo from './images/logo.svg'
// import user from './images/users.svg'
import MenuIcon from './icon'

export default function Header() {
  return (
    <div className="nav-bar">
      <img src={logo} alt="logo" className='logo' />
      <ul>
        <li>Home</li>
        <li>Contact us </li>
        <li>settings</li>
        <li className='search'><input placeholder="Enter Post Title" /></li>
        <li><MenuIcon fill="white" /></li>
        <li><p>anna</p></li>

      </ul>
    </div>
  )
}

