import React from 'react';
import { useState } from 'react';
import {  NavLink,Link} from 'react-router-dom';
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
import logo_website from '../../images/matchmate.jpeg';


import { MdOutlineEditCalendar } from "react-icons/md";
import { LiaUserEditSolid } from "react-icons/lia";
import { CgEditStraight } from "react-icons/cg";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineSafety } from "react-icons/ai";
import { TbHearts } from "react-icons/tb";


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
        <img src={logo_website} alt="logo"/>
        {/* <div className='logo-matchmate'>
          Matchmate
        </div> */}
        <span id='matchmate-logo'>Matchmate</span>
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
              {/* <Profile/> */}
              <div className='profile-container'>
      <div className='profile-info'>
            {/* <div><AccountCircleIcon className='profile-icon'/>
                <div className='cam-div'><CameraAltOutlinedIcon className='cam-icon'/></div>
            </div> */}
            <div className='profile-content'>
                    {/* <span id='zone'>Good Afternoon!</span> */}
                    <span style={{fontWeight:'600',fontSize:'18px'}}>Shruthi Gaddam</span>
                    <span>T8963762</span>
                    <span style={{fontWeight:'bold',marginTop:'6px'}}>Membership: Free</span>
                    <span>Become a paid member now</span>
                    <span><Link to='premium'><button>Upgrade</button></Link></span>
            </div>
            <hr className='line'/>
            <div className='profile-content2'>
              <span><MdOutlineEditCalendar className='icons-content'/><Link to='editProfile'>Edit Profile</Link></span>
              <span><LiaUserEditSolid className='icons-content'/><Link to='editPreferences'>Edit Preferences</Link></span>
              <span><CgEditStraight className='icons-content'/><Link to='genHoroscope'>Generate Horoscope</Link></span>
              <span><MdOutlineVerifiedUser className='icons-content'/><Link to='verifyProfile'>Verify Your Profile</Link></span>
            </div>
            <hr className='line'/>
            <div className='profile-content2'>
              <span><IoSettingsOutline className='icons-content'/><Link to='settings'>Settings</Link></span>
              <span><AiOutlineMessage className='icons-content'/><Link to='help'>Help</Link></span>
              <span><AiOutlineSafety className='icons-content'/><Link to='safeMatrimony'>Safe Matrimony</Link></span>
              <span><TbHearts className='icons-content'/><Link to='successStories'>Success Stories</Link></span>
            </div>
      </div>
    </div>
            </div>
          }
            <RiArrowDropDownLine className='icon'/>
      </div>
    </div>
  )
}

export default Header
