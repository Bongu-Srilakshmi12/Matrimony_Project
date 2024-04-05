import React from 'react'
import './homesafe.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { IoMdAdd } from "react-icons/io";
import safematrimony from '../../images/safematrimony.jpg';
import Profession from '../../images/Profession.jpg'

  function Homesafe() {
  return (
    <div className='Home-safe'>
        <div className='home-safe-image'>
      <img src={safematrimony} alt="home"></img>
      </div>
      <div className='Content-home'>
      <h2 className='home-heading'><b>Why Safe Matrimony?</b></h2>
      <p className='home-para'>While online matchmaking helps millions of Indians find a life partner year after year, a few experience frauds. As the biggest matrimony service for Indians, it's <br/>our responsibility to ensure that your matchmaking journey is a safe one. Matrimony.com's 'Safe Matrimony', a 10-year-old initiative, educates users on staying <br/>safe while searching for their life partner. At Matrimony.com, we arecommitted to making the matchmaking experience safe for our members. We have<br/> implemented  multiple procedures to ensure this. Simultaneously, we also encourage all our members to remain vigilant. May your journey with Matrimony.com<br/> lead you to the perfect partner, creating a lifetime of shared joy and love!</p>
      <h3 className='home-headings'><b>Common frauds</b></h3>
      <p className='home-para'>While there can be multiple types of frauds like, the intention of the fraudster is always to extort money from the members. So a clear rule of thumb is under no<br/> circumstances agree to pay money to a potential match you may be interacting with online. Here are some common scenarios.</p>
      </div>
      <div className='home-images'>
      <div className='images-home-imgs'>
       <div className='imgs-imgs'>
      <img src={Profession} alt="home"></img>
      <div className='content-img-home'>
      <h4>1.Customer duty fraud</h4>
      <div className='content-img-para'>
      <p>Fraudster poses himself as an NRI or a customs officer,<br/> asking the member to pay customs duty to clear the <br/>gift he bought or received in the member's name.<br/> Watch Vidya Balan discuss Custom Fee Fraud in detail.</p>
      </div>
      </div>
       </div>
      
      </div>
      <div className='home-images'>
      <div className='images-home-imgs'>
       <div className='imgs-imgs'>
      <img src={Profession} alt="home"></img>
      <div className='content-img-home'>
      <h4>1.Customer duty fraud</h4>
      <div className='content-img-para'>
      <p>Fraudster poses himself as an NRI or a customs officer,<br/> asking the member to pay customs duty to clear the <br/>gift he bought or received in the member's name.<br/> Watch Vidya Balan discuss Custom Fee Fraud in detail.</p>
      </div>
      </div>
      
       </div>
      
      </div>
      
      </div>
      <div className='home-images'>
      <div className='images-home-imgs'>
       <div className='imgs-imgs'>
      <img src={Profession} alt="home"></img>
      <div className='content-img-home'>
      <h4>1.Customer duty fraud</h4>
      <div className='content-img-para'>
      <p>Fraudster poses himself as an NRI or a customs officer,<br/> asking the member to pay customs duty to clear the <br/>gift he bought or received in the member's name.<br/> Watch Vidya Balan discuss Custom Fee Fraud in detail.</p>
      </div>
      </div>
      
       </div>
      
      </div>
      
      </div>
      
     
      
      </div>
      
      <div className='mui-main-head'>
      <div className='mui-accordin'>
        
      <Accordion sx={{ width: '600px' }}>
        <AccordionSummary
          
        
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            
                <b style={{marginLeft:"20PX",marginTop:"20px"}}>Your safty is our priority</b>
            
            <span className='accordin-icon'><IoMdAdd /></span>
            
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='header-span-text'>
                <h5>Choose who views your photo</h5>
                <p>You can control who views your photos by showing them only to select members or even<br/> hide them completely.</p>
                </div>
                <div className='header-span-text'>
                <h5>Choose who sees your number</h5>
                <p>You can show your number only to members who contacted you or responded to your <br/>interest. Or reveal it only to Premium Members from your community.</p>     
                           </div>
                           <div className='header-span-text'>
                <h5>Safety for women</h5>
<p>Women, can turn on the "Secure Connect" feature to get calls from members without <br/>revealing their own number.</p>              
             </div>
                           <div className='header-span-text'>
                <h5>Protect your horoscope</h5>
                <p>You can choose to show your horoscope only to members who contacted you or responded <br/>to your interest. In fact, you can even hide your horoscope from being viewed.</p>     
                           </div>
                           
          </Typography>
        </AccordionDetails>
        
      </Accordion >
      </div>
      <br/>
      <br/>
      
      <div className='mui-accordin'>
      <Accordion sx={{ width: '600px',marginTop:"20PX" }}>
        <AccordionSummary
        
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            <b style={{marginLeft:"20PX",marginTop:"20px"}}>How to be safe?</b>
            <span className='accordin-icon'><IoMdAdd /></span>
            
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='header-span-text'>
                <h5>Never reveal your account details</h5>
                <p>Keep your matrimony profile username and password safe. No one from BharatMatrimony<br/> or any of our matrimony services will ever ask you for the same</p>
                </div>
                <div className='header-span-text'>
                <h5>Never make any financial transaction</h5>
                <p>Never engage in financial transactions during your search for a life partner, even if <br/>presented with plausible scenarios like a gift for you stuck at Customs Duty, Emergency <br/>Cash Requirement, etc</p>     
                           </div>
                           <div className='header-span-text'>
                <h5>End video calls upon encountering explicit content</h5>
<p>Terminate video calls upon encountering explicit content. If a member requests or displays <br/>obscene content during a video call, disconnect immediately, report the profile as abuse,<br/> and block it</p>              
             </div>
                           <div className='header-span-text'>
                <h5>Ensure a secure meeting with your match in a public setting</h5>
                <p>Arrange to meet your matches only in secure public locations, and always ensure your <br/>friends or family are aware of your plans.</p>     
                           </div>
                           <div className='header-span-text'>
                            <h5>Do not share any personal information</h5>
                            <p>Never share your personal information like Aadhar, Pan card or any other government ids. <br/>Do not disclose your bank account, Demat account details, email passwords etc.If someone<br></br> tries to generate a pin number or a password on your behalf and asks you for the same to<br/> complete any kind of transaction refrain them from doing so and don't share this information</p>
                           </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      

     
    </div>
    <div className='home-contact-deatils'>
    <div className='polices-contact-lefts'>
        <h3>Contact us</h3>
        <hr className='new2'></hr>
        <h5 className='matrimony-com'><b>Matrimony.com Helpline</b></h5>
        <span className='d1s'>Report any profile you find suspicious or wrongly <br/>misrepresenting themselves.</span><br></br>
        <span className='d2s'>Reach us and we shall assist you.</span><br></br><br></br><br/>
        <span className='d3s'>Phone:<span style={{color:"blue"}}>+91 1234567890</span></span><br></br>
        <span className='d4s'>Email:<span style={{color:"blue"}}>helpdesk@bharatmatrimony.com</span></span><br></br>
        <h5 className='cyber-calls'><b>Cyber Cell Contact Details</b></h5>
        <span className='d5s'>Any acts related to identity theft, e-mail scams, and<br/> obscene content can also be reported to the Cyber Cell.</span><br/><br/>
        <span className='d6s'>Find Details Here</span>
      </div>
        
       
       
       
      </div>
      

</div>
<h5 style={{float:"left",fontSize:"16px",paddingTop:"30px",fontFamily:"Lato"}}> We hereby declare that BharatMatrimony website is not a dating website and it is strictly for matrimonial purpose only.</h5>

      <div>
        
      </div>
      {/* <div className='home-footer'>
          <p>Copyright © 2024 Matrimony.com Ltd. All rights reserved</p>
        </div> */}
    </div>
  )
}
export default Homesafe;