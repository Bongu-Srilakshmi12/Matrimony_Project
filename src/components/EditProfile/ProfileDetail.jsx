import React from 'react';
import './ProfileDetail.css';
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import unknownPic from '../../images/unknownperson.jpg';
import { Link } from 'react-router-dom';


function ProfileDetail() {
  return (
    <div className='profile-detail-container'>
        <div className='image-profile'>
          <Link to='uploads'>
            <img src={unknownPic} alt='unknown Person'/>
            <p>Add / Edit Photos</p>
          </Link>
          {/* <input type='file' placeholder='Add / Edit Photos'/> */}
        </div>

        <div className='grid-column2'>
            <h4>Shruthi Gaddam</h4>
            <p id='p1'>Profile created for Friend</p>
            <p id='p2'>23 Yrs, 5 Ft / 152 Cms</p>
            <p id='p3'>Hindu, Velama</p>
            <p id='p4'>Yadadri Bhuvanagiri, Telangana, India</p>
            <p id='p5'>B.Tech., Software Professional</p>
            <p><FaMobileScreenButton className='icons-grid2'/> +91-8106436485 (<FaCheck className='icons-grid2'/><span className='icons-grid2'>Verified </span>) <span id='edit'>Edit Mobile No</span></p>
        </div>

        <div className='grid-column3'>
            <p>How your profile looks to others</p>
            <button><IoEyeOutline className='eye-icon'/>Profile Preview</button>
        </div>
        
    </div>
  )
}

export default ProfileDetail
