import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import {Link} from 'react-router-dom';
import avathar from '../../images/men9.jpg';
import men13 from '../../images/men13.jpeg';
import men14 from '../../images/men14.jpg';

function Main() {
  return (
    
   <div className='main-content'>
   
    <span className='paragraph'>Incoming conversations from matches (45)</span><br></br>
<div className='main-butons'>
 <span id="d-11">messages for paid mumbers(14)</span>
 <span id="d-2-2">interest received(34)</span>
</div>
    <div className='mailbox-content-link'>
    <Link to='userdetails'>
            <div className='images'>
        <div className='img-avathar'>
        <img src={avathar} alt='avathar'></img>
        <div className='img-summery'>
          <span id="id1">ID Verified</span>
          <div className='cancel-icon'>
          <span id="id2"><CiMenuKebab /></span>
          <div className='person-details'>
        <span className='img-name'>V Prasanth Kumar</span>
        <span className='id-num'>123456789</span>
        <div className='person-age'>
        <span className='age'>
        <ul className='list'>
          <li>27yrs</li>
          <li>5'7"</li>
          <li>Padmashali</li>
          <li>MBA</li>
          <li>Airline</li>
          
        </ul>
        <ul className='city'>
          <li className='city-area'>Professsional</li>
          <li>Rs.18L</li>
          <li>Hyderabad</li>
        </ul>
        <span><b>He has sent request to you</b> -19-march-2024</span>
        </span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className='divs-button'>
          <span id="decline"><IoMdClose />Decline</span>
          <span id="accept"><FaCheck />Accept</span>
        </div>
        </div>
    </Link>
    </div>
    <div className='mailbox-content-link'>
    <Link to='userdetails'>
            <div className='images'>
        <div className='img-avathar'>
        <img src={avathar} alt='avathar'></img>
        <div className='img-summery'>
          <span id="id1">ID Verified</span>
          <div className='cancel-icon'>
          <span id="id2"><CiMenuKebab /></span>
          <div className='person-details'>
        <span className='img-name'>V Prasanth Kumar</span>
        <span className='id-num'>123456789</span>
        <div className='person-age'>
        <span className='age'>
        <ul className='list'>
          <li>27yrs</li>
          <li>5'7"</li>
          <li>Padmashali</li>
          <li>MBA</li>
          <li>Airline</li>
          
        </ul>
        <ul className='city'>
          <li className='city-area'>Professsional</li>
          <li>Rs.18L</li>
          <li>Hyderabad</li>
        </ul>
        <span><b>He has sent request to you</b> -19-march-2024</span>
        </span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className='divs-button'>
          <span id="decline"><IoMdClose />Decline</span>
          <span id="accept"><FaCheck />Accept</span>
        </div>
        </div>
    </Link>
    </div>
    <div className='mailbox-content-link'>
    <Link to='userdetails'>
            <div className='images'>
        <div className='img-avathar'>
        <img src={men13} alt='avathar'></img>
        <div className='img-summery'>
          <span id="id1">ID Verified</span>
          <div className='cancel-icon'>
          <span id="id2"><CiMenuKebab /></span>
          <div className='person-details'>
        <span className='img-name'>V Prasanth Kumar</span>
        <span className='id-num'>123456789</span>
        <div className='person-age'>
        <span className='age'>
        <ul className='list'>
          <li>27yrs</li>
          <li>5'7"</li>
          <li>Padmashali</li>
          <li>MBA</li>
          <li>Airline</li>
          
        </ul>
        <ul className='city'>
          <li className='city-area'>Professsional</li>
          <li>Rs.18L</li>
          <li>Hyderabad</li>
        </ul>
        <span><b>He has sent request to you</b> -19-march-2024</span>
        </span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className='divs-button'>
          <span id="decline"><IoMdClose />Decline</span>
          <span id="accept"><FaCheck />Accept</span>
        </div>
        </div>
    </Link>
    </div>
    <div className='mailbox-content-link'>
    <Link to='userdetails'>
            <div className='images'>
        <div className='img-avathar'>
        <img src={men14} alt='avathar'></img>
        <div className='img-summery'>
          <span id="id1">ID Verified</span>
          <div className='cancel-icon'>
          <span id="id2"><CiMenuKebab /></span>
          <div className='person-details'>
        <span className='img-name'>V Prasanth Kumar</span>
        <span className='id-num'>123456789</span>
        <div className='person-age'>
        <span className='age'>
        <ul className='list'>
          <li>27yrs</li>
          <li>5'7"</li>
          <li>Padmashali</li>
          <li>MBA</li>
          <li>Airline</li>
          
        </ul>
        <ul className='city'>
          <li className='city-area'>Professsional</li>
          <li>Rs.18L</li>
          <li>Hyderabad</li>
        </ul>
        <span><b>He has sent request to you</b> -19-march-2024</span>
        </span>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className='divs-button'>
          <span id="decline"><IoMdClose />Decline</span>
          <span id="accept"><FaCheck />Accept</span>
        </div>
        </div>
    </Link>
    </div>

   </div>
    
  )
}

export default Main
