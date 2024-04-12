import React from 'react';
import './Verify.css';
import privacy from '../../images/privacy.jpg';


function Verify() {
  return (
    <div className='verify-header'>
       <div className='main-header'>
          <div className='verify-profile-img-contain'>
            <img src={privacy} alt="privacy"></img>
          </div>
        <div className='header-box-text'>Your profile is pending verification</div>
       </div>

      <div className='verification-container'>
            <div className='verification-leftside'>
              <div className='id-verification'>
                <h4>ID Verification</h4>
                
                <p>Select one of the below documents to verify your identity information. The documents chosen by you will not be shown to other members.</p>
              
                <div>
                  <button>Passport</button>
                  <button>Voter ID</button>
                  <button>Aadhar</button>
                </div>
                <div>
                  <button>Driving License</button>
                  <button>Pan Card</button>
                </div>
                <div><input type='checkbox'/>By uploading my ID/Aadhaar, I give my consent for the purpose of verifying my profile.</div>
              </div>
              
              <div className='id-verification'>
                <h4>Salary Verification</h4>
                <p>Annual income mentioned in your profile: Rs. 0 - 1 Lakh</p>  
                <p>Upload your salary slip and help us verify your current salary. The salary slip uploaded by you will not be shown to other members.</p>            
                <div>
                  <button>Upload Salary Slip</button>
                </div>                
              </div>

            </div>
            <div className='verification-rightside'>
            <div className='id-verification'>
                <h4>Education Verification</h4>
                <p>Educational Qualification mentioned in your profile: B.Tech.</p>  
                <p>Upload your education certificate and help us verify your educational qualification. The certificate uploaded by you will not be shown to other members.</p>
                <div>
                  <button>Upload Education Certificate</button>
                </div>                
            </div>

            <div className='id-verification'>
                <h4>Photo Verification</h4>
                <p>We will need to verify your profile photo with a selfie.</p>  
                <p>To complete your photo verification, download our mobile application.</p>
                <div>
                  <button>Download App</button>
                </div>                
            </div>

            </div>
      </div>
   
      
    </div>
    
  )
}

export default Verify
