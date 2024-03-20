import React from 'react';
import '../styles/Main.css';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HandshakeTwoToneIcon from '@mui/icons-material/HandshakeTwoTone';
// import PortraitTwoToneIcon from '@mui/icons-material/PortraitTwoTone';
import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import { BsPersonCheck } from "react-icons/bs";
import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';

function Main() {
  return (
    <div className='main-page'>
        {/* Header Part Start */}
        <header>
            <div id='logo'></div>
            <div className='header-part'>
                <span id='member'>Already a member?</span>
                <span><button id='login'>LOG IN</button></span>
                <HelpOutlineOutlinedIcon id='help'/><span>Help</span><KeyboardArrowDownIcon/>
            </div>
        </header>
        {/* Header Part Ends */}
        {/* Sectionn Start */}
        <section>
           <div className='section-top'>
                <div className='heading'>
                    <h1>
                        The biggest and most trusted
                        <br/>
                        matrimony service for Indians!
                    </h1>
                    <p>Now find matches based on your hobbies & interests</p>
                </div>
                <div >
                <div className='Loginform' id='login-top'>
                    <form>
                        <h4>Find your perfect match</h4>
                    <div>
                    <select className='dropdown'>
                        <option value='' disabled selected hidden>Select Profile</option>
                        <option>Myself</option>
                        <option>Daughter</option>
                        <option>Son</option>
                        <option>Sister</option>
                        <option>Brother</option>
                        <option>Relative</option>
                        <option>Vriend</option>
                    </select>
                    </div>
                    <div>
                        {/* <div><label>Select profile for</label></div> */}
                        <input type='text' placeholder='Enter Name' className='dropdown'/>
                    </div>
                    <div className='number-container'>
                        <select id='countrycode'>
                            <option value='+91'>India(+91)</option>
                        </select>
                        <input type='text' placeholder='Enter Number' className='dropdown' id='number'/>
                    </div>
                    {/* <div><label>Select profile for</label></div> */}
                    <button className='login-btn'>REGISTER FREE<ArrowRightAltTwoToneIcon/></button>
                    <div className='content'>*By clicking register free, I agree to the<u>T&C</u> and <u>Privacy Policy.</u></div>
                    </form>
                </div>
                </div>
           </div>



            <div className='images'>
                <div className='row1'>
                    <div className='img1 img'></div>
                    <div className='img2 img'></div>
                    <div className='img3 img'></div>
                    <div className='img4 img'></div>
                    <div className='img5 img'></div>
                    <div className='img6 img'></div>
                    <div className='img7 img'></div>
                    <div className='img8 img'></div>
                    <div className='img9 img'></div>
                    <div className='img10 down'></div>
                    <div className='img11 down'></div>
                    <div className='img12 down'></div>
                    <div className='img13 down'></div>
                    <div className='img14 down'></div>
                    <div className='img15 down'></div>
                    <div className='img16 down'></div>
                    <div className='img17 down'></div>
                    <div className='img18 down'></div>
                </div>
            </div>

            <div className='section-bottom'>
                <div>
                    <BsPersonCheck className='icon'/>
                    <span>
                        <b>100%</b>
                        <br/>
                        Mobile Verified profiles
                    </span>
                </div>
                <div>
                    <AdminPanelSettingsTwoToneIcon className='icon'/>
                    <span>
                        <b>4 Crores+</b>
                        <br/>
                        Customer served</span>
                </div>
                <div>
                <HandshakeTwoToneIcon className='icon'/>
                <span>
                    <b>23 Years</b>
                    <br/>
                    Of successful matchmaking
                </span>
                </div>
            </div>
        </section>
        <footer>
            <p>This website is strictly for matrimonal purpose only and not a dating website. Copuright &copy; 2024. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Main
