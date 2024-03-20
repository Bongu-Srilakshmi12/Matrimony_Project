import React from 'react';
import './PersonalInfo.css';
import { MdOutlineModeEdit } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

function PersonalInfo() {
  return (
    <div className='PersonalInfo-container'>
      <h2>Personal information</h2>

        {/* About her */}
      <div className='personal'>
        <div className='personal-top'>
            <span className='heading'>A few words about her</span>
            <span><button className='edit-btn'><MdOutlineModeEdit/>Edit</button></span>
        </div>
        <div className='about-bottom'>
            <p>
            I have made this profile on behalf of my friend. She is currently working as a software professional in private sector, after having completed her bachelor's degree. She comes from a middle class, joint family with traditional values presently living in Yadadri Bhuvanagiri.
            </p>
        </div>
      </div>

        {/* Basic Details */}
      <div className='personal'>
        <div className='personal-top'>
            <span className='heading'>Basic Details</span>
            <span><button className='edit-btn'><MdOutlineModeEdit/>Edit</button></span>
        </div>
        <div className='about-bottom'>
            <p>Get better responses by verifying your name and age</p>
            <button id='badge-btn'>Get Identity Badge<FaChevronRight/></button>
            <hr/>
        </div>
        <div className='info-container'>
            <div>
                <p>Profile created for : Friend</p>
                <p>Body Type : Add Body Type</p>
                <p>Physical : StatusNormal</p>
                <p>Weight : Add Weight</p>
                <p>Marital Status : Never Married</p>
                <p>Drinking Habits : Add Drinking Habits</p>
            </div>
            <div>
                <p>Name : Shruthi Gaddam</p>
                <p>Age : 23 Years - Verify</p>
                <p>Height : 5 Ft / 152 Cms</p>
                <p>Mother Tongue : Telugu</p>
                <p>Eating Habits : Add Eating Habits</p>
                <p>Smoking Habits : Add Smoking Habits</p>
            </div>
        </div>
      </div>

        {/* Religion Information */}
      <div className='personal'>
        <div className='personal-top'>
            <span className='heading'>Religion Information</span>
            <span><button className='edit-btn'><MdOutlineModeEdit/>Edit</button></span>
        </div>
        <div className='info-container'>
            <div>
                <p>Religion : Hindu</p>
                <p>Caste / Sub Caste : Velama - Adivelama</p>
                <p>Gothram : -</p>
                <p>Star / Raasi : Add Star / Raasi</p>
                <p>Dosham : Not Specified</p>
            </div>
            <div>
                <p>Time of Birth : Add Time</p>
                <p>Place of Birth : Add place</p>
            </div>
        </div>
      </div>

      {/* Bride's Location */}
      <div className='personal'>
        <div className='personal-top'>
            <span className='heading'>Bride's Location</span>
            <span><button className='edit-btn'><MdOutlineModeEdit/>Edit</button></span>
        </div>
        <div className='info-container'>
            <div>
                <p>Country : India</p>
                <p>State : Telangana</p>
                <p>Ancestral Origin : Not Specified</p>
            </div>
            <div>
                <p>City : Yadadri Bhuvanagiri</p>
                <p>Citizenship :India</p>
            </div>
        </div>
      </div>

       {/* Professional Information */}
       <div className='personal'>
        <div className='personal-top'>
            <span className='heading'>Professional Information</span>
            <span><button className='edit-btn'><MdOutlineModeEdit/>Edit</button></span>
        </div>
        <div className='info-container'>
            <div>
                <p>Education :B.Tech.</p>
                <p>Education in Detail : Not Specified</p>
                <p>College / Institution : Not Specified</p>
                <p>Employed in : Private Sector</p>
                <p>Occupation : Software Professional</p>
                <p>Occupation in Detail : Not Specified</p>
                <p>Organization : Not Specified</p>
                <p>Annual Income : Rs. 0 - 1 Lakh</p>
            </div>
        </div>
      </div>

    {/* Family Details */}
    <div className='personal'>
        <div className='personal-top'>
            <span className='heading'>Family Details</span>
            <span><button className='edit-btn'><MdOutlineModeEdit/>Edit</button></span>
        </div>
        <div className='info-container'>
            <div>
                <p>Family Values : Traditional</p>
                <p>Family Type : Joint</p>
                <p>Family Status : Middle class</p>
                <p>No of Sister(s) : Add No of Sisters</p>
            </div>
            <div>
                <p>Father's Occupation : Not Specified</p>
                <p>Mother's Occupation : Not Specified</p>
                <p>No of Brother(s) : Add No of Brothers</p>
                <p>Family Location : Not Specified</p>
            </div>
        </div>
      </div>

       {/* About My Family */}
       <div className='personal'>
        <div className='personal-top'>
            <span className='heading'>About My Family</span>
            <span><button className='edit-btn'><MdOutlineModeEdit/>Edit</button></span>
        </div>
        <div className='about-bottom'>
            <p>Not Specified </p>
        </div>
      </div>

    {/* Hobbies and Interests */}
    <div className='personal'>
        <div className='personal-top'>
            <span className='heading'>Hobbies and Interests</span>
            <span><button className='edit-btn'><MdOutlineModeEdit/>Edit</button></span>
        </div>
        <div className='about-bottom'>
            <p>Not Specified </p>
        </div>
      </div>

    </div>
  )
}

export default PersonalInfo
