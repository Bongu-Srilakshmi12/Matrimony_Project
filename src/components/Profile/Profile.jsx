import React from 'react';
import '../styles/Profile.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { MdOutlineEditCalendar } from "react-icons/md";
import { LiaUserEditSolid } from "react-icons/lia";
import { CgEditStraight } from "react-icons/cg";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlineSafety } from "react-icons/ai";
import { TbHearts } from "react-icons/tb";

const profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-info'>
            <div><AccountCircleIcon className='profile-icon'/>
                <div className='cam-div'><CameraAltOutlinedIcon className='cam-icon'/></div>
            </div>
            <div className='profile-content'>
                    <span id='zone'>Good Afternoon!</span>
                    <span style={{fontWeight:'600',fontSize:'18px'}}>Shruthi Gaddam</span>
                    <span>T8963762</span>
                    <span style={{fontWeight:'bold',marginTop:'6px'}}>Membership: Free</span>
                    <span>Become a paid member now</span>
                    <span><button>Upgrade</button></span>
            </div>
            <hr className='line'/>
            <div className='profile-content2'>
              <span><MdOutlineEditCalendar className='icons-content'/>Edit Profile</span>
              <span><LiaUserEditSolid className='icons-content'/>Edit Preferences</span>
              <span><CgEditStraight className='icons-content'/>Generate Horoscope</span>
              <span><MdOutlineVerifiedUser className='icons-content'/>Verify Your Profile</span>
            </div>
            <hr className='line'/>
            <div className='profile-content2'>
              <span><IoSettingsOutline className='icons-content'/>Settings</span>
              <span><AiOutlineMessage className='icons-content'/>Help</span>
              <span><AiOutlineSafety className='icons-content'/>Safe Matrimony</span>
              <span><TbHearts className='icons-content'/>Success Stories</span>
            </div>
      </div>
    </div>
  )
}

export default profile
