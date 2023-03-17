import React from 'react'
import logo from './images/st-jhn-logo.png'
// import user from './images/users.svg'
import MenuIcon from '../icon'

export default function Header() {
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <img src={logo} alt="logo" className='logo' />
        </li>
        <a href='/#'><li>Home</li></a>
        <a href='/#'><li>Anime </li></a>
        <a href='/#'><li>Manga</li></a>
        <li className='search'>
          <form >
            <input id="search" type="search" placeholder="Search..." />
          </form>
        </li>
        <a href='/#'><li><p>Settings</p></li></a>
      </ul>
    </div>
  )
}

