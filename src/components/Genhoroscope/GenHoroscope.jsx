import React from 'react';
import './GenHoroscope.css';
import { MdOutlineGroup } from "react-icons/md";
import { TbMessage2Pin } from "react-icons/tb";
import { PiFolderLockDuotone } from "react-icons/pi";

function GenHoroscope() {
  return (
    <div>
      <div className='genHoroScope-container'>
        {/* <div className='mul-btns'>
           
        </div> */}

        <div className='horo-border-box'>
          <div className='horoscope-btm'>
              <div className='horoscope-left'>
                  <h4>Generate your horoscope and 
                      <br/>
                      get more responses.</h4>
                  <p>Enter your birth details and generate horoscope free in any 9 Indian languages and in any format (North, East, South and Kerala).</p>
                  <h4>Benefits of Adding Horoscope</h4>
                  <div className='horo-left-mid'>
                      <div><MdOutlineGroup  className='horo-icon'/><span>Check horoscope compatibility with other members</span>
                      </div>
                      <div><TbMessage2Pin className='horo-icon'/><span>Receive profiles that are compatible with your horoscope</span>
                      </div>
                      <div><PiFolderLockDuotone className='horo-icon'/><span>Get complete control on privacy</span>
                      </div>
                  </div>
              </div>

              <div className='form-container-horoscope'>
                <form>
                  <div className='form-box'>
                    <label className='column'>Date Of Birth</label>
                    <span className='column'>1 Dec 2000</span><span>Edit</span>
                  </div>

                  <div  className='form-box'>
                    <label className='column'>Time Of Birth</label>
                    <span className='column'>
                    <select className='time'>
                      <option>Hrs</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                    <select className='time'>
                      <option>00</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                    <select className='AM-PM'>
                      <option>AM/PM</option>
                      <option>AM</option>
                      <option>PM</option>
                    </select>
                    </span>
                  </div>

                  <div  className='form-box'>
                  <label className='column'>Country Of Birth</label>
                    <select className='column fields'>
                      <option>-Select-</option>
                      <option>Afganisthan</option>
                      <option>India</option>
                    </select>
                  </div>

                  <div className='form-box'>
                  <label className='column'>State Of Birth</label>
                    <select className='column fields'>
                      <option>-Select-</option>
                      <option>Telangana</option>
                      <option>Andhra Pradesh</option>
                    </select>
                  </div>

                  <div  className='form-box'>
                  <label className='column'>City Of Birth</label>
                    <select className='column fields'>
                      <option>-Select-</option>
                      <option>Hyderabad</option>
                    </select>
                  </div>

                  <div  className='form-box'>
                  <label className='column'>Chart Of Style</label>
                    <select className='column fields'>
                      <option>South Indian</option>
                      <option>North Indian</option>
                      <option>East Indian</option>
                      <option>Kerala</option>
                    </select>
                  </div>

                  <div  className='form-box'>
                  <label className='column'>Languages</label>
                    <select className='column fields'>
                      <option>English</option>
                      <option>telugu</option>
                      <option>Tamil</option>
                      <option>Kannada</option>
                    </select>
                  </div>

                  <div className='form-box'>
                  <label className='column'>Time Correction</label>
                    <select className='column fields'>
                      <option>Standard Time</option>
                      <option>Daylight Saving</option>
                      <option>Tamil</option>
                      <option>Kannada</option>
                    </select>
                  </div>
                  
                  <div>
                  <button id='generate-btn'>GENERATE HOROSCOPE</button>
                  </div>
                
                </form>
              </div>
          </div>

          <div className='dot-container'>
            <div className='dots'>
              OTHER WAYS TO ADD HOROSCOPE
            </div>
          </div>


          <div className='horo-bot'>
            <div>
              <h4>Upload a scanned copy of your horoscope.</h4>
              <div>
                <input type='file'/>
                <button id='upload-btn'>Upload</button>
              </div>
              <div className='gif'>Gif and Jpeg formats only. Max.10MB</div>
            </div>

            <div>
              <h4>E-mail Your Horoscope</h4>
              <div>to horoscope@bharatmatrimony.com 
                <br/>or send it to any of our offices 
                <br/>mentioning your Matrimony ID.</div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  )
}

export default GenHoroscope
