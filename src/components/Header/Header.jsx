import React from 'react';
import { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import './Header.css';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { RiArrowDropDownLine } from "react-icons/ri";
import Profile from '../Profile/Profile';


const Header = () => {

    const[showDropdown,setShowDropdown] = useState(false);

    const handleMouseOver = () => {
        setShowDropdown(true);
    };

    const handleMouseOut = () => {
        setShowDropdown(false);
    };

    const NavLinkStyles =({isActive}) =>{
        return{
          color : isActive ? 'green' : 'black',
          fontWeight : isActive ? 600 :'normal',
        }
    }

  return (
    <div className='header-container'>
      <div className='logo'>
        <img src="../images/logo1.jpg" alt="logo"/>
      </div>
      <div className='header-nav-links'>
        <span className='col-head-col'><NavLink to='/' style={NavLinkStyles}><HomeOutlinedIcon className='icon'/>Home</NavLink></span>
        <span className='col-head-col'><NavLink to='/matches' style={NavLinkStyles}><PeopleAltOutlinedIcon className='icon'/>Matches</NavLink></span>
        <span className='col-head-col'><NavLink to='/mailbox' style={NavLinkStyles}><MailOutlinedIcon className='icon'/>Mailbox</NavLink></span>
        <span className='col-head-col'><NavLink to='/chats' style={NavLinkStyles}><QuestionAnswerOutlinedIcon className='icon'/>Chats</NavLink></span>
        <span className='col-head-col'><NavLink to='/search' style={NavLinkStyles}><SearchOutlinedIcon className='icon'/>Search</NavLink></span>
        <span className='col-head-col'><NavLink to='/notification' style={NavLinkStyles}><NotificationsNoneOutlinedIcon className='icon'/>Notification</NavLink></span>
      </div>
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} id='profile'>
        <AccountCircleIcon className='profile-icon'/>
            {showDropdown && 
            <div className='dropdown-content'>
              {/* Dropdown content goes here */}
              <Profile/>
            </div>
          }
            <RiArrowDropDownLine className='icon'/>
      </div>
    </div>
  )
}

export default Header
