import React from 'react';
import './MatchesProfile.css';
import men from '../../images/men8.jpg';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';

const MatchesProfile = () => {
  return (
    <div className='matchesProfile-container'>
     <Link to='userdetails'>
     <div className='border-container'>
        <div className='matches-image'>
          <img src={men} alt='Men-profile'/>
        </div>
        <div className='matches-data'>
          <div>
            <h5>Shiva Kumar</h5>
            <span>T9008488 | Last seen few hour ago</span>
            <span>28 yrs • 5'11" • Velama • B.Tech. • Architect • Rs. 1 </span>
            <span>Lakh • Srikakulam</span>
          </div>
          <div className='matches-interest'>
            <h6>Interested in him?</h6>
            <span>Connect Now </span>
            <div>
              <button className='dont-show-btn'><CloseIcon className='closeIcon'/>Don't Show</button>
             <button className='send-interest-btn'><CheckIcon className='checkIcon'/>Send Interst</button></div>
          </div>
        </div>
      </div>
     </Link>
    </div>
  )
}

export default MatchesProfile
