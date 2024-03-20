import React from 'react';
import './MatchesComp.css';
import { FaChevronDown } from "react-icons/fa";

function MatchesComp() {
  return (
    <div className='container'>
        <div className='MatchComp-container'>
            <span>All Matches</span>
            <span>Newly Joined</span>
            <span>Nearby Matches</span>
            <span>Viewed You</span>
            <span>Shorlisted You</span>
            <span>Viewed By You</span>
            <span>Shorlisted By You</span>
            <span>More<FaChevronDown/></span>
        </div>
      
    </div>
  )
}

export default MatchesComp
