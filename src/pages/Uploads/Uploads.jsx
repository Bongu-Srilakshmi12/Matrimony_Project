import './Uploads.css';
import React, { useState } from 'react';

function CardWithImageOverlay() {
    const [profileImage, setProfileImage] = useState(null);
  
    
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    };
  
  return (
   <div>
    <div className='image-container'>
      <div className="upload-img">
        <h3 className='header-img'>Add your photo and get much better
        <br/> responses!</h3>
        <div className="profile-image">
          
          <img src={profileImage ? profileImage : "https://img.freepik.com/premium-photo/anime-girl-with-red-hair-white-hat-snow-generative-ai_900396-62862.jpg?w=740"} alt="Profile" className="profile" />
          <label htmlFor="file-upload" className="upload-button">Upload Image</label> <br />
          <input id="file-upload" type="file" onChange={handleImageUpload} />
          <span className='uploading-sizing'> Within 15 MB of size  jpg / gif / png / bmp </span> 

        </div>
      </div>
     
    </div>
    <div className='women-saftey'>
        <div className="image-women">
        <img src="https://imgs.bharatmatrimony.com/bmimgs/syspop-imgs/fs-payment-img.png" alt="" />
        </div>
        <div className="safty-text">
        <p>When it comes to your safety, we are #AsCaringAsFamily. You can always control who’ll be able to view your photos!</p>
        </div>

      </div>
    </div>
    
    
    
  );
}

export default CardWithImageOverlay;


