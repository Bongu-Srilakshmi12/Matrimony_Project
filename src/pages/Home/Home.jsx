import React from 'react';
import Profile from '../../components/Profile/Profile';
// import Recomendations from '../../components/Recommendations/Recomendations';
import './Home.css';
import HomeRightComp from '../../components/HomeRightComp/HomeRightComp';

const Home = () => {
  return (
    <div className='Home-container'>
        
      <div className='container'>
        <div className='section-part'>
          <div><Profile/></div>
          {/* <div><Recomendations/></div> */}
          <div>
            <HomeRightComp/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
