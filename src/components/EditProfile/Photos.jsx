import React from 'react';
import './Photos.css';
import { Link } from 'react-router-dom';

function Photos() {
  return (
    <div className='photos-container'>
      <h4>Photos are the first thing that prospects look at.</h4>
      <p>Add Shruthi Gaddam photo and get 10 times more responses!</p>
      <div>
        <button id='skip-btn'>Skip</button>
        <Link to='uploads'><button id='upload-btn'>Upload Photos Now</button></Link>
      </div>
    </div>
  )
}

export default Photos
