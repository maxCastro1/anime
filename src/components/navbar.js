import React, {useState} from "react";
import { NavLink,useNavigate } from 'react-router-dom'
import logo from '../images/st-jhn-logo.png'

export default function Navbar(){
  const navigate = useNavigate();
  const [search,setSearch] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/:${search}`);
    setSearch("")
  }

    return(
        <div className="nav-bar">
        <ul>
          <li>
          <NavLink to='/'><img src={logo} alt="logo" className='logo' /></NavLink>
          </li>
             <NavLink to='/'>Home</NavLink>
             <NavLink to='/Discover'>Discover </NavLink>
          <li className='search'>
            <form onSubmit={handleSubmit}>
              <input 
              id="search" 
              type="search" 
              placeholder="Search..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </li>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/ContactUs'>Contact Us</NavLink>
        </ul>
      </div>
    )
}