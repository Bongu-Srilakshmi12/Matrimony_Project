import React from 'react'
import './MatchesPage.css';
import MatchesComp from '../../components/Matches/MatchesComp';
import FilterProfile from '../../components/Matches/FilterProfile';
import MatchesProfile from '../../components/Matches/MatchesProfile';

function MatchesPage() {
  return (
    <div className='container'>
      <div className='matchespage-container'>
        <MatchesComp/>

        <section>
          <div className='matches-grid'>
            <div className='matches-grid-left'>
              <FilterProfile/>
            </div>
            
            <div className='matches-grid-right'>
              <MatchesProfile/>
              <MatchesProfile/>
              <MatchesProfile/>
              <MatchesProfile/>
              <MatchesProfile/>
              <MatchesProfile/>
              <MatchesProfile/>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default MatchesPage
