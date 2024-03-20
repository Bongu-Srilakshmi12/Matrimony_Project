import React, { useEffect, useState } from 'react';
import '../styles/MatrimonyMain.css';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';

function MatrimonyMain() {

    const backgroundImages = ['images/img7.jpg','images/img9.jpeg','images/img11.jpeg','images/img15.jpeg'];

    const [currentImageIndex,setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Function to change the background image every 2 seconds
        const interval = setInterval(() => {
          // Increment the image index or loop back to the first image
          setCurrentImageIndex((prevIndex) =>
            prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000);
    
        // Clear the interval on component unmount
        return () => clearInterval(interval);
      }, []);

    const currentBackgroundImage = backgroundImages[currentImageIndex];
  return (
    <div className='Matrimony-container'>
        <div className='backgroundImage' style={{backgroundImage:`url(${currentBackgroundImage})`}}>
            <header>
                <div id='logo-name'>Matrimony</div>
                <div id='menu'>
                    <span>Already a member?</span>
                    <span><button className='login-btn'>LOG IN</button></span>
                    <span><HelpOutlineOutlinedIcon className='icon'/>Help<KeyboardArrowDownIcon className='icon'/></span>
                </div>
            </header>

            <main>
                <div className='main-heading'>The biggest and most trusted matrimony service for Indians!
                </div>
                <div>
                <button id='main-btn'>Get Started<ArrowRightAltTwoToneIcon className='icon-arrow'/></button>
                </div>
            </main>
        </div>
    </div>
  )
}

export default MatrimonyMain
