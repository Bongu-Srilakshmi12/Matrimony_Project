import React from 'react';
import './AddPartner.css';
import { FaCaretRight } from "react-icons/fa";

function AddPartner() {
  return (
    <div>
        <div className='addpartner-container'>
        <div className='horoscope'></div>
        <div className='grid-horoscope'>
            <p id='heading-horoscope'>Add Horoscope</p>
            <p>It is simple and absolutely FREE!</p>
        </div>
        <div className='link-horoscope'>
            Add Horoscope<FaCaretRight id='right-icon'/>
        </div>
    </div>
    </div>
   
  )
}

export default AddPartner
