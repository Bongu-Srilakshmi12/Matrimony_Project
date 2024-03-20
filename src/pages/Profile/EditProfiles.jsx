import React from 'react';
import './EditProfiles.css';
import ProfileDetail from '../../components/EditProfile/ProfileDetail';
import AddPartner from '../../components/EditProfile/AddPartner';
import Photos from '../../components/EditProfile/Photos';
import PersonalInfo from '../../components/Personal_Info/PersonalInfo';

function EditProfiles() {
  return (
    <div className='container'>
      <div className='editProfiles-container'>
        <div>
            <ProfileDetail/>
            <Photos/>
            <PersonalInfo/>
        </div>
        <div className='addpartner'>
            <AddPartner id='comp'/>
            <AddPartner/>
            <AddPartner/>
            <AddPartner/>
        </div>
      </div>
    </div>
  )
}

export default EditProfiles
