import React from 'react'
import './Verify.css';

import privacy from '../../images/privacy.jpg'
function Verify() {
  return (
    <div className='verify-header'>
       <div className='main-header'>
       <img src={privacy} alt="privacy"></img>
   
   <div className='header-box'>
   <span>Your profile is pending verification</span>
   </div>
       </div>
      {/* <div className='header-box'> */}
        {/* <span>Your profile is pending verification</span> */}
   
      <div className='bigBox'>
        <div id="leftBox">
          
          <span className='text'>ID Verification</span>
          <p className='para'>Select one of the below documents to verify your identity information. The documents chosen by you will not be shown to other members.</p>
          <button id="d1">Driving Licence</button>
          <button id="d1">Pan card</button>
          <button id="d2">Passport</button>
          <button id="d2">VoterId</button>
          <button id="d2">Aadhar</button>
          <input type="checkbox" value="important" className='checkbox'>
            
          </input>
          <p className='type-para'>By uploading my ID/Aadhaar, I give my consent<br></br> for the purpose of verifying my profile.</p>
                 </div>
        <div id="rightBox">
        <span className='right-text'>Education Verification</span>
          <p className='right-para'>
          Educational Qualification mentioned in your profile: M.Sc. IT / Computer Science
          </p>
          <p className='right-para'>Upload your education certificate and help us verify your educational qualification. The certificate uploaded by you will not be shown to other members.</p>
          <button id="d1-1">Upload Education Certificate</button>
        </div>
        {/* <div className='right-boxes'>
        <div id="rightBox1">
        <span className='right-text1'>Photo Verification</span>
          <p className='right-para1'>
          We will need to verify your profile photo with a selfie
          </p>
          <p className='right-para1'>
          To complete your photo verification, download our mobile application.
          </p>
          <span id="d1-11">Download App</span>
          </div> */}
        </div>
        <div className='right-boxes'>
        <div id="rightBox1">
        <span className='right-text1'>Photo Verification</span>
          <p className='right-para1'>
          We will need to verify your profile photo with a selfie
          </p>
          <p className='right-para1'>
          To complete your photo verification, download our mobile application.
          </p>
          <button id="d1-11">Download App</button>
          </div>
      </div>
     
    </div>
    
  )
}

export default Verify
