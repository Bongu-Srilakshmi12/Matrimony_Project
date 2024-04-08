import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
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

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-info'>
            <div><AccountCircleIcon className='profile-icon'/>
                {/* <div className='cam-div'><CameraAltOutlinedIcon className='cam-icon'/></div> */}
            </div>
            <div className='profile-content'>
                    <span id='zone'>Good Afternoon!</span>
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
  )
}

export default Profile
