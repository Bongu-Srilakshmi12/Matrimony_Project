import React from 'react'
import './Safeabuse.css'
function Safeabuse() {
  return (
    <div className='Safe-abuse'>
      <div className='safe-header'>
     <p>
     <span className='d1-1'><strong>Grievance Officer</strong></span><br></br>
        <span >Mr. Dinesh John<br/>
Contact Address : M/s. Matrimony.com Limited,<br/>
No.94, TVH Beliciaa Towers, Tower - 2,<br/>
5th Floor, MRC Nagar, Chennai,<br/>
Tamil Nadu 600028<br/>
Phone : <span style={{color:"blue"}}> +91-8939455547,</span><br/>
Email: <span style={{color:"blue"}}>reportfraud@bharatmatrimony.com</span></span>
        </p>
      </div>
      <div className='labels-abuse-report'>
        <span className='column-abuse'>Grievance Form Only for Public Complaints relating to content on the site</span>
        <span className='column-right'>*Compulsary fields</span>
      </div>
      <form>
        <div className='forms-safe-container'>
          <div>
          <label><span className='safe-stars'>*</span>First Name : </label>
          <input type="text" placeholder='Name'className='input-fields' style={{margin:"0px 0px 0px 40px"}}></input>
          </div><br></br>
          <div>
          <label><span className='safe-stars'>*</span>Your E-Mail ID : </label>
          <input type="text" placeholder='Email ID' className='input-fields' style={{margin:"0px 0px 0px 40px"}}></input>
          </div><br></br>
          <div>
          <label><span className='safe-stars'>*</span>Your Contact Number : </label>
          <input type="text" placeholder='Mobile Number' className='input-fields' style={{margin:"0px 0px 0px 40px"}}></input>
          </div><br></br>
          <div>
          <label><span className='safe-stars'>*</span>Please mark the web portal which hosts the issue(s) encountered by you: </label>
          <select className='input-fields' style={{margin:"0px 0px 0px 40px",width:"300px",height:"30px"}}>
            <option>-Select Your Domain-</option>
            <option>Telugu Matrimony.com</option>
            <option>Hindi Matrimony.com</option>
            <option>Tamil Matrimony.com</option>
            <option>Marati Matrimony.com</option>
            <option>Gujarath Matrimony.com</option>
          </select>
          </div><br></br>
          <div>
          <label><span className='safe-stars'>*</span>Please share the link (URL) of the Page which you are reporting against : </label>
          <input type="text" placeholder='URL' className='input-fields' style={{margin:"0px 0px 0px 40px"}}></input>
          </div><br></br>
          <div>
          <label><span className='safe-stars'>*</span>Please tell us the reason for your complaint/concern. Choose an option which most closely matches with your concern. If you are unsure which option to choose, please select the last option. Thanks : </label>
          
          </div>
        </div>
        <div className='checkboxs-safes'>
      <input type="checkbox" value=" The content exposes personal data while violating Terms & Conditions and/or Privacy Policy of concerned website." className='check-box-check'></input>
      <div className='type-text-abuse'> The content exposes personal data while violating Terms & Conditions and/or Privacy Policy of concerned website.</div>
      <br/>
      <br/>
      
      <input type="checkbox" value=" The content is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic and/or unlawful in any manner" className='check-box-check'></input>
      <div className='type-text-abuse'>The content is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic and/or unlawful in any manner</div>
      <br/>
      <br/>
      <input type="checkbox" value=" The content is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic and/or unlawful in any manner" className='check-box-check'></input>
      <div className='type-text-abuse'>The content threatens the unity, integrity, defence, security or sovereignty of India and/or friendly relations with foreign states.</div>
      <br/>
      <br/>
      <input type="checkbox" value=" The content is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic and/or unlawful in any manner" className='check-box-check'></input>
      <div className='type-text-abuse'> The content infringes a patent, trademark, copyright or other proprietary rights.</div>
      <br/>
      <br/>
      <input type="checkbox" value=" The content is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic and/or unlawful in any manner" className='check-box-check'></input>
      <div className='type-text-abuse'> The content encourages money laundering or gambling</div>
      <br/>
      <br/>
      <input type="checkbox" value=" The content is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic and/or unlawful in any manner" className='check-box-check'></input>
      <div className='type-text-abuse'> The content hosts software viruses or any other computer code designed to harm the functionality of any computer resource.</div>
      <br/>
      <br/>
      <input type="checkbox" value=" The content is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic and/or unlawful in any manner" className='check-box-check'></input>
      <div className='type-text-abuse'> The content harms minors in any way</div>
      <br/>
      <br/>
      <input type="checkbox" value=" The content is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic and/or unlawful in any manner" className='check-box-check'></input>
      <div className='type-text-abuse'> Other
      <input type="text" placeholder='Other'></input></div>
      <br/>
      <br/>
      <div>
          <label><span className='safe-stars-s'>*</span>Please describe your complaint/concern in detail: </label>
          <textarea type="text-area" placeholder='' className='input-fields' style={{margin:"0px 0px 0px 40px",height:"100px"}}></textarea>
          </div><br/>
          <input type="text" placeholder='Enter Verification Code' className='input-fields' style={{margin:"0px 0px 0px 40px"}}></input><br/>
          <button className='safe-abuse-button'>SUBMIT</button><br/><br/>
      </div>
      <div className='home-footer'>
          <p>Copyright © 2024 Matrimony.com Ltd. All rights reserved</p>
        </div>  
       
    </form>
     
      
          </div>
  )
}

export default Safeabuse