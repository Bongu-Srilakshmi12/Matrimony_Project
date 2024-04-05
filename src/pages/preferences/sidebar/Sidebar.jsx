import React from 'react';
import './sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS
import HeartIcon from '../HeartIcon/HeartIcon';
import Basic_Preferences from '../../../images/What_we_are_looking_for.png';
import edit_icon from '../../../images/edit_icon.png';
import Religious_preferences from '../../../images/Religious_preferences.png';
import proffesionaal_preferences from '../../../images/proffesionaal_preferences.png';


const EditPreferences = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 bg-green">
        <div className="sidebar-logo">
          <HeartIcon />
          <h2>PARTNER PREFERENCES</h2>
          </div>
          <ul className="sidebar-items">
        <li className="sidebar-item">Basic</li>
        <li className="sidebar-item">Religious</li>
        <li className="sidebar-item">Professional</li>
        <li className="sidebar-item">Location</li>
        <li className="sidebar-item">About My Partner</li>
      </ul>
   
        </div>
        <div className="col-md-9">
          {/* Partner preferences content goes here */}
          
          <h2>Partner Preferences</h2>
            <p>Matches recommended by us are based on <b>Acceptable matches</b> criteria and at times might go slightly beyond your preferences.</p>
            <p>Turn on "Compulsory" to get matches exactly as per your preferences.</p>
            <div className="Main">
                <h3>
                <img src={Basic_Preferences} alt="icon" className="document-icon" />
                Basic Preferences</h3>
                
                <div className="preference-item">
                    <span>Groom's Age</span>
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>21 - 28 years</span>
                </div>
                <div className="preference-item">
                    <span>Height</span>
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>5 Ft - 6 Ft / 152 Cms- 183 Cms</span>
                    </div>

                <div className="preference-item">
                    <span>Marital Status</span> 
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>never married</span>
                     </div>

                <div className="preference-item">
                    <span>Mother Tongue</span> 
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>Any</span>
                    </div>

                <div className="preference-item">
                    <span>Physical Status</span> 
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>Normal</span>
                    </div>

                <div className="preference-item">
                    <span>Eating Habits</span> 
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>Vegetarian, Eggetarian</span>
                    </div>

                <div className="preference-item">
                    <span>Drinking Habits</span> 
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>Doesn't matter</span>
                    </div>

                <div className="preference-item">
                    <span>Smoking Habits</span>
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>Doesn't matter</span>
                    </div>
            </div>

            <div className="Main">
            <h3>
            <img src={Religious_preferences} alt="icon" className="document-icon" />
            Religious Preferences</h3>
                
                <div className="preference-item">
                    <span>Religion</span> 
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>Hindu</span>
                </div>
                <div className="preference-item">
                    <span>Caste</span> 
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>Any</span>
                </div>

                <div className="preference-item">
                    <span>Dosh</span> 
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>Doesnt matter</span>
                    </div>

                <div className="preference-item">
                    <span>Star</span> 
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>Any</span>
                    </div>
            </div>

            <div className="Main">
                <h3><img src={Basic_Preferences} alt="icon" className="document-icon" />Professional Preferences
                </h3>
                
                <div className="preference-item">
                    <span>Education</span> 
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>Bachelors - Engineering</span>
                </div>
                <div className="preference-item">
                    <span>Employed In</span> 
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>Any</span>
                </div>

                <div className="preference-item">
                    <span>Occupation</span> 
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>Any</span>
                    </div>

                <div className="preference-item">
                    <span>Annual Income</span> 
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>Any</span>
                    </div>
            </div>

            <div className="Main">
                <h3><img src={Religious_preferences} alt="icon" className="document-icon" />
                Location Preferences</h3>
                
                <div className="preference-item">
                    <span>Country</span> 
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                    <span>Any</span>
                </div>
            </div>

            <div className="Main">
                <h3><img src={Religious_preferences} alt="icon" className="document-icon" />
                What we are looking for</h3>
                
                <div className="preference-item">
                    <span>Good person</span>
                    <img src={edit_icon} alt="Edit" className="edit-icon" />
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default EditPreferences;

