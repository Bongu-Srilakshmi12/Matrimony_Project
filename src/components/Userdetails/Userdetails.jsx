import React from 'react'
import './Userdetails.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import dumimg from '../../images/men4.jpg';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
// import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
// import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
// import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
//import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import InterpreterModeOutlinedIcon from '@mui/icons-material/InterpreterModeOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import SmokingRoomsOutlinedIcon from '@mui/icons-material/SmokingRoomsOutlined';
import WineBarOutlinedIcon from '@mui/icons-material/WineBarOutlined';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
// import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TempleBuddhistOutlinedIcon from '@mui/icons-material/TempleBuddhistOutlined';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';


function Userdetails() {
    return (
        <div>
            <div className='userdetails'>
                <h4 className='headingseting'><ArrowBackIcon /> Daily Recommendations(1/6) </h4>
                <div className="userimages">
                    <img src={dumimg} alt="1" />
                    <img src={dumimg} alt="2" />
                    <img src={dumimg} alt="3" />
                    <img src={dumimg} alt="4" />
                    <img src={dumimg} alt="5" />
                    <img src={dumimg} alt="6" />
                    <img src={dumimg} alt="7" />

                </div>
                <div className="profilecard">
                    <div className="profileimage">
                        <img src={dumimg} alt="8" />

                    </div>
                    <div className="profile-information">
                        <div className="fav">
                            <span ><StarBorderIcon /> Shorlist</span>
                            <span><CallIcon />Call</span>
                            <span><MoreVertIcon /></span>
                        </div>
                        <div className='main-profie'>
                            <h3>Akhil Rajan</h3>
                            <span>E5474676 | Last seen few hour ago</span> <br />
                            <span ><AccountCircleOutlinedIcon className='profile-design' />29 Yrs, 5'7"</span> <br />
                            <span><BookOutlinedIcon className='profile-design' />Vishwakarma</span> <br />
                            <span><BusinessCenterOutlinedIcon className='profile-design' />Others in Diploma,Others</span> <br />
                            <span><RoomOutlinedIcon className='profile-design' />Thodupuzha, Kerala</span> <br />
                            <span><AccountBalanceWalletOutlinedIcon className='profile-design' />₹50K-1L per annum</span> <br />
                        </div>
                        <div className="like">
                            <span>Interested in him?</span> <br />
                            <button className='show-intrest'>Don't Show</button>
                            <button className='show-intrest'>skip</button>
                            <button className='send-intrest'>send intrest</button>

                        </div>
                        <div className='like-one'>
                            <span>Connect Now</span>

                        </div>
                    </div>

                </div>
            </div>
            <div className="second-card">
                <div className='bio-design'>
                    <h4 className='about-profile'>About Jayesh</h4>
                    <p className='profile-description'>My son is a mechanical / production engineer with a
                        bachelor's degree currently working in private sector in United Arab Emirates.
                        We belong to a middle class, nuclear family with traditional values.
                    </p>
                    <h4 className="profie-verification">Profile verification - 2/5 </h4>

                    <div className="verify-id">
                        <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/profile-verification-mobile-verified.svg" alt="" />
                        <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/profile-verification-govid-verified.svg" alt="" />
                        <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/profile-verification-photo.svg" alt="" />
                        <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/profile-verification-education.svg" alt="" />
                        <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/profile-verification-income.svg" alt="" />



                        {/* <span><MobileFriendlyOutlinedIcon className='verify-id img'/></span>
                    <span><BadgeOutlinedIcon className='verify-id img'/></span>
                    <span><AccountBoxOutlinedIcon className='verify-id img'/></span>
                    <span><SchoolOutlinedIcon className='verify-id img'/></span>
                    <span><AccountBalanceWalletOutlinedIcon className='verify-id img'/></span>
                    <span></span> */}

                    </div>
                    <div className="main-two-profile">
                        <h4 className='person-info'> His Basic Details</h4>

                        <div className="profile-habits">
                            <span><AccountCircleOutlinedIcon className='about-design-one' /></span>
                            <span className='person-design-one'>Age</span>
                            <span className='details-setting'> 29years</span>
                        </div>
                        <div className="profile-habits">
                            <span><AccessibilityOutlinedIcon className='about-design-one' /></span>
                            <span className='person-design-one'> Physique</span>
                            <span className='details-setting'> 5'6"  Normal</span>

                        </div>
                        <div className="profile-habits">
                            <span><InterpreterModeOutlinedIcon className='about-design-one' /></span>
                            <span className='person-design-one'>Spoken Languages</span>
                            <span className='details-setting'> Malayalam (Mother Tongue), English, Hindi</span>
                        </div>
                        <div className="profile-habits">
                            <span><DinnerDiningOutlinedIcon className='about-design-one' /></span>
                            <span className='person-design-one'> Eating Habits</span>

                            <span className='deatils-setting'> Eating Habits Details requested</span>
                        </div>
                        <div className="profile-habits">
                            <span><SmokingRoomsOutlinedIcon className='about-design-one' /></span>
                            <span className='person-design-one'> Smoking Habits</span>

                            <span className='deatils-setting'> Smoking Habits Details requested</span>
                        </div>
                        <div className="profile-habits">
                            <span><WineBarOutlinedIcon className='about-design-one' /></span>
                            <span className='person-design-one'> Drinking Habits</span>

                            <span className='deatils-setting'> Drinking Habits Details requested</span>
                        </div>
                        <div className="profile-habits">
                            <span><BadgeOutlinedIcon className='about-design-one' /></span>
                            <span className='person-design-one'>Profile Created By</span>

                            <span className='deatils-setting'> Self</span>
                        </div>
                        <div className="profile-habits">
                            <span><WcOutlinedIcon className='about-design-one' /></span>
                            <span className='person-design-one'>Marital Status</span>

                            <span className='deatils-setting'> Never Married</span>
                        </div>
                        <div className="profile-habits">
                            <span><RoomOutlinedIcon className='about-design-one' /></span>
                            <span className='person-design-one'>Lives In</span>

                            <span className='deatils-setting'> Thiruvalla, Kerala</span>
                        </div>
                        <div className="profile-habits">
                            <span><FlagOutlinedIcon className='about-design-one' /></span>
                            <span className='person-design-one'>Citizenship</span>

                            <span className='deatils-setting'> Indian Citizen</span>
                        </div>

                    </div>
                    {/* contact card */}
                    <div className='contact-card'>
                        <div className="contact-number">
                            <span><CallOutlinedIcon className='caller-iconss' />Contact details</span> <br />
                            <span>+919848******</span>
                        </div>
                        <div className='call-nows'> 
                            <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/verified.svg" alt="" /> mobileno.verified  <br />
                            <button className='contact-connect'><CallOutlinedIcon /> call now</button>
                        </div>
                        <div className='premium-paid'>
                            <span>Upgrade to view his contact number</span> <br />
                            <button className="become-member">Become a paid member</button>
                        </div>

                    </div>
                    {/* second profile details */}
                    <div className="main-two-profile">
                        <h4 className='person-info'> His Religious Details</h4>

                        <div className="profile-habits">
                            <span><TempleBuddhistOutlinedIcon className='about-design-two' /></span>
                            <span className='person-design-one'>Religion</span>
                            <span className='details-setting'> Hindu</span>
                        </div>
                        <div className="profile-habits">
                            <span><BookOutlinedIcon className='about-design-two' /></span>
                            <span className='person-design-one'> Caste/Subcaste</span>
                            <span className='details-setting'> Baniyas/guptas</span>
                        </div>
                        <div className="profile-habits">
                            <span><LanOutlinedIcon className='about-design-two' /></span>
                            <span className='person-design-one'>Gothra(m)</span>
                            <span className='details-setting'> request gotra</span>
                        </div>
                        <div className="profile-habits">
                            <span><Brightness5OutlinedIcon className='about-design-two' /></span>
                            <span className='person-design-one'>Dosha(m)</span>
                            <span className='details-setting'> No dosham</span>
                        </div>
                        <div className="profile-habits">
                            <span><AutoAwesomeOutlinedIcon className='about-design-two' /></span>
                            <span className='person-design-one'>Star/Raasi</span>
                            <span className='details-setting'>Request Rassi</span>
                        </div>
                        <div className="profile-habits">
                            <span><PublicOutlinedIcon className='about-design-two' /></span>
                            <span className='person-design-one'>Kundli score</span>
                            <span className='details-setting'> Request Horcoscope</span>
                        </div>
                    </div>
                    {/* second scard */}

                    <div className='contact-card'>
                        <div className="contact-number">
                            <span><CallOutlinedIcon className='caller-iconss' />Contact details</span> <br />
                            <span>+919848******</span>
                        </div>
                        <div className='call-nows'> 
                            <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/verified.svg" alt="" /> mobileno.verified  <br />
                            <button className='contact-connect'><CallOutlinedIcon /> call now</button>
                        </div>
                        <div className='premium-paid'>
                            <span>Upgrade to view his contact number</span> <br />
                            <button className="become-member">Become a paid member</button>
                        </div>

                    </div>

                    {/* <div className='contact-card'>
                        <div className="contact-number">
                            <span><CalendarMonthOutlinedIcon className='caller-iconss' />Date Of birth</span>
                            <span>Time Of birth</span>
                            <div className='premium-paid'>
                                <span>Upgrade to view his contact number</span>
                                <button className="become-member">Become a paid member</button>
                            </div>

                        </div>
                    </div> */}

                    {/* third profile deatils */}

                    <div className="main-two-profile">
                        <h4 className='person-info'> His Professional details Details</h4>

                        <div className="profile-habits">
                            <span><BadgeOutlinedIcon className='about-design-three' /></span>
                            <span className='person-design-one'>Employment</span>
                            <span className='details-setting'> works in private scector</span>
                        </div>
                        <div className="profile-habits">
                            <span><AccountBalanceWalletOutlinedIcon className='about-design-three' /></span>
                            <span className='person-design-one'> income</span>
                            <span className='details-setting'> 2L-3L per anumm</span>
                        </div>
                        {/* fourth profil detail */}
                        <div className="main-two-profile">
                            <h4 className='person-info'> About his family</h4>
                            <h6 className='person-info'>request famly details</h6>

                            <div className="profile-habits">
                                <span><GroupsOutlinedIcon className='about-design-four' /></span>
                                <span className='person-design-one'>Anscestor Orgin</span>
                                <span className='details-setting'> add your anscestor orgin to view this</span>
                            </div>
                        </div>
                        {/* fifth profile details */}
                        <div className="main-two-profile">
                            <h3 className='person-info'> Ketan Gupta partner preference</h3>
                            <h4 className='person-info-five'> His bascic preference</h4>
                            {/* <span > your match</span> */}


                            <div className="profile-habits">
                                <span className='person-design-five'>Preferred Bride's Age</span>
                                <span className='details-setting-profile'> 21-28yrs</span>
                                <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />
                            </div>
                            <div className="profile-habits">
                                <span className='person-design-five'> Preferred Height</span>
                                <span className='details-setting-profile'> 4'7" - 5'7"</span>
                                <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                            </div>
                            <div className="profile-habits">
                                <span className='person-design-five'>Preferred martial status</span>
                                <span className='details-setting-profile'> Never married</span>
                                <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                            </div>
                            <div className="profile-habits">
                                <span className='person-design-five'> prefered mother tounge</span>
                                <span className='details-setting-profile'> Malyalam,Tamil,Hindi</span>
                                <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                            </div>
                            <div className="profile-habits">
                                <span className='person-design-five'>Preferred physical status</span>
                                <span className='details-setting-profile'> Normal</span>
                                <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                            </div>
                            <div className="profile-habits">
                                <span className='person-design-five'> Preferred Eating Habits</span>
                                <span className='details-setting-profile'> Doesn't Matter</span>
                                <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                            </div>
                            <div className="profile-habits">
                                <span className='person-design-five'>Preferred Smoking Habits</span>
                                <span className='details-setting-profile'> Doesn't Matter</span>
                                <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                            </div>
                            <div className="profile-habits">
                                <span className='person-design-five'> Preferred drinking Habits</span>
                                <span className='details-setting-profile'> Doesn't Matter</span>
                                <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                            </div>
                        </div>
                        {/* sixth profile details */}
                        <h4 className='person-info'> His religious preference</h4>

                        <div className="profile-habits">
                            <span className='person-design-five'>Preferred Religion</span>
                            <span className='details-setting-profile'> Hindu</span>
                            <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                        </div>
                        <div className="profile-habits">
                            <span className='person-design-five'> Preferred caste</span>
                            <span className='details-setting-profile'> 96 Kuli Maratha, Maratha</span>
                            <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                        </div>
                        <div className="profile-habits">
                            <span className='person-design-five'>Preferred subcaste</span>
                            <span className='details-setting-profile'> any</span>
                            <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                        </div>
                        <div className="profile-habits">
                            <span className='person-design-five'> prefered star</span>
                            <span className='details-setting-profile'> any</span>
                            <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                        </div>
                        <div className="profile-habits">
                            <span className='person-design-five'>Preferred dosha</span>
                            <span className='details-setting-profile'> Does't matter</span>
                            <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                        </div>
                        {/* sixth profile */}
                        <h4 className='person-info'> His professional preference</h4>

                        <div className="profile-habits">
                            <span className='person-design-five'>Preferred Education</span>
                            <span className='details-setting-profile'> B.Plan, Other Bachelor Degree</span>
                            <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                        </div>
                        <div className="profile-habits">
                            <span className='person-design-five'> Preferred employment type</span>
                            <span className='details-setting-profile'> any</span>
                            <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                        </div>
                        <div className="profile-habits">
                            <span className='person-design-five'>Preferred occupation </span>
                            <span className='details-setting-profile'> any</span>
                            <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                        </div>
                        <div className="profile-habits">
                            <span className='person-design-five'> prefered annual income</span>
                            <span className='details-setting-profile'> any</span>
                            <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                        </div>
                        {/* seventh profile */}
                        <h4 className='person-info'> His Location preference</h4>

                        <div className="profile-habits">
                            <span className='person-design-five'>Preferred country</span>
                            <span className='details-setting-profile'> any</span>
                            <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                        </div>
                        <div className="profile-habits">
                            <span className='person-design-five'> Preferred residing state</span>
                            <span className='details-setting-profile'>any</span>
                            <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                        </div>
                        <div className="profile-habits">
                            <span className='person-design-five'>Preferred residing city </span>
                            <span className='details-setting-profile'> any</span>
                            <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                        </div>
                        <div className="profile-habits">
                            <span className='person-design-five'> Preferred citizenship</span>
                            <span className='details-setting-profile'> any</span>
                            <img src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/vp_icon_matching.svg" alt="" className="img-set" />

                        </div>
                        <div className="foot-design">
                            <h3 className='footer-header'>Plan your wedding with <a href="">WeddingBazaar.com!</a> </h3>
                            <p className='footer-paragraph'>Weddingbazaar.com from Matrimony.com group is the India's largest wedding services marketplace with 2 lakh+ trusted vendors!</p>
                            <div className="userimages-footer">
                                <img src={dumimg} alt="1" />
                                <img src={dumimg} alt="2" />
                                <img src={dumimg} alt="3" />
                                <img src={dumimg} alt="4" />

                            </div>
                            <button className='footer-button'>Explore now</button>
                        </div>
                        
                        
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Userdetails
