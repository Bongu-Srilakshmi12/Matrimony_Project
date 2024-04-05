// HeartIcon.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './HeartIcon.css'; // Make sure to create a CSS file for styling

const HeartIcon = () => {
  return <FontAwesomeIcon icon={faHeart} className="heart-icon" />;
};

export default HeartIcon;
