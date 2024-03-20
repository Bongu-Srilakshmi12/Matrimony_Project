import React from 'react';
import './GenHoroscopePage.css';
import GenHoroscope from '../../components/Genhoroscope/GenHoroscope';

function GenHoroScopePage() {
  return (
    <div className='container'>
        <div className='genhoroscope-container'>
          <GenHoroscope/>
        </div>
      
    </div>
  )
}

export default GenHoroScopePage
