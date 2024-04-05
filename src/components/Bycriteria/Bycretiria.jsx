import React from 'react'
import './Bycretiria.css';
function Bycretiria() {
  return (
    <form className='form-container'>
        <div className='form-row'>
      <div className='mail-id'>
      <span className='Text-float'>Enter Matrimony ID</span>
      
      {/* <input type="text" placeholder='eg:123456' className='text-input'></input> */}
      </div>
     
      <div className='search-id input-id'>
        <input type="text" placeholder='Eg:TS123456' className='text-input'></input>
  
      </div>
      </div>
      <div className='text-button'>
    <button>View Profile</button>
    </div>
      </form>
  )
}

export default Bycretiria

