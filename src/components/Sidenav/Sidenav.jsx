import React, { useState } from 'react';
import{Link} from 'react-router-dom'
import './Sidenav.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { hover } from '@testing-library/user-event/dist/hover';
import { RiArrowDropDownLine } from "react-icons/ri";
const SideNav=()=>{
    const [showDropdown, setShowDropdown] = useState(false);
    const [sentDropdown, setSentDropdown] = useState(false);
    const[receive,setReceive] = useState(false);
    const[calls,setCalls] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleDropdownSent = () => {
    setSentDropdown(!sentDropdown);
  };
  const toggleReceive =()=>{
    setReceive(!receive)
  }
  const toggleCalls =()=>{
    setCalls(!calls)
  }
    return (
        <div className='dropup ' style={{ width: '300px', backgroundColor: 'white', marginLeft:"150px",marginTop:"150px",border:"1px solid gray",position:"absolute"}}>
        {/* Side Nav */}
        <ul style={{ listStyleType: 'none', padding:0}}>
          <li style={{ padding: '10px', color: 'black', cursor: 'pointer',fontSize:"15px",marginRight:"200px"  }} onClick={toggleDropdown}>
           <b>Received</b>
           <span style={{marginLeft:"260px",float:"left",}}><RiArrowDropDownLine /></span>
            
            {showDropdown && (
              <ul style={{ listStyleType: 'none', padding: 0,fontSize:"12px" }}>
                <li style={{ padding: '5px', color: 'black' }}>All</li>
                <li style={{ padding: '5px',  color: 'black' }}>Pending(45)</li>
                <li style={{ padding: '5px',  color: 'black' }}>Accepted/Replied</li>
                <li style={{ padding: '5px',  color: 'black' }}>Declined</li>
                <li style={{ padding: '5px',  color: 'black' }}>Expired</li>
              </ul>
            )}
          </li>
          </ul>
          <hr></hr>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ padding: '10px', color: 'black', cursor: 'pointer',marginRight:"200px" }} onClick={toggleDropdownSent}>
            <b>Sent</b>
            <span style={{marginLeft:"260px",float:"left",}}><RiArrowDropDownLine /></span>
            {/* Dropdown Content */}
            {sentDropdown && (
              <ul style={{ listStyleType: 'none', padding: 0,fontSize:"12px" }}>
                <li style={{ padding: '5px', color: 'black' }}>All</li>
                <li style={{ padding: '5px',  color: 'black' }}>Pending(45)</li>
                <li style={{ padding: '5px',  color: 'black' }}>Accepted/Replied</li>
                <li style={{ padding: '5px',  color: 'black' }}>Declined</li>
                <li style={{ padding: '5px',  color: 'black' }}>Expired</li>
              </ul>
            )}
          </li>
          </ul>
        <hr></hr>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ padding: '10px', color: 'black', cursor: 'pointer',marginRight:"200px"  }} onClick={toggleReceive}>
           <b> Requests</b>
           <span style={{marginLeft:"260px",float:"left",}}><RiArrowDropDownLine /></span>
            {/* Dropdown Content */}
            {receive && (
              <ul style={{ listStyleType: 'none', padding: 0 ,fontSize:"12px"}}>
                <li style={{ padding: '5px', color: 'black' }}>Requests Completed</li>
                <li style={{ padding: '5px',  color: 'black' }}>Requests Received</li>
                <li style={{ padding: '5px',  color: 'black' }}>Requests Sent</li>
                
              </ul>
            )}
          </li>
          </ul>
        <hr></hr>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ padding: '10px', color: 'black', cursor: 'pointer',marginRight:"200px"  }} onClick={toggleCalls}>
           <b> Calls</b>
           <span style={{marginLeft:"260px",float:"left",}}><RiArrowDropDownLine /></span>
            {/* Dropdown Content */}
            {calls&& (
              <ul style={{ listStyleType: 'none', padding: 0,fontSize:"12px"  }}>
                <li style={{ padding: '5px', color: 'black' }}>Contacted You</li>
                <li style={{ padding: '5px',  color: 'black' }}>Contacted By You</li>
                
                
              </ul>
            )}
          </li>
          </ul>
        <hr></hr>
      </div>
      
    );   
}



export default SideNav;