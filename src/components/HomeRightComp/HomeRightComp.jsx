import React from 'react';
import './HomeRightComp.css';
import men1 from '../../images/men2.jpg';
import men2 from '../../images/men8.jpg';
import men3 from '../../images/men6.jpg';
import men4 from '../../images/men4.jpg';
import men9 from '../../images/men9.jpg';
import men10 from '../../images/men10.jpg';
import men11 from '../../images/men11.jpg';
import men12 from '../../images/men12.jpeg';
import men7 from '../../images/men7.jpg'; 
import men13 from '../../images/men13.jpeg';
import men14 from '../../images/men14.jpg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';

const HomeRightComp = () => {
  return (
    <div className='homeRightComp-container'>

        {/* Your Journey So Far */}
      <div className='journey-so-far'>
        <h5>Your Journey So Far</h5>
        <div className='journey-so-far-boxes'>
            <Link to='mailbox'>
                <div className='journey-box'>
                    <div className='row p-3'>
                        <div className='col-8'>
                            <h6>1</h6>
                            <p>Acceptances
                                <br/>
                                received
                            </p>
                        </div>
                        <div className='col-4'>
                            <img src={men1} alt='men'/>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='mailbox'>
                <div className='journey-box' id='box2'>
                    <div className='row p-3'>
                        <div className='col-8'>
                            <h6>50</h6>
                            <p>Interests
                                <br/>
                                received
                            </p>
                        </div>
                        <div className='col-4'>
                            <img src={men1} alt='men'/>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='mailbox'>
                <div className='journey-box' id='box3'>
                    <div className='row p-3'>
                        <div className='col-8'>
                            <h6>3</h6>
                            <p>Shortlisted
                                <br/>
                                you
                            </p>
                        </div>
                        <div className='col-4'>
                            <img src={men1} alt='men'/>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='mailbox'>
                <div className='journey-box' id='box4'>
                    <div className='row p-3'>
                        <div className='col-8'>
                            <h6>237</h6>
                            <p>Viewed you</p>
                        </div>
                        <div className='col-4'>
                            <img src={men1} alt='men'/>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
      </div>

      {/* Your Daily Recommendations for 1st Apr */}
      <div className='recommendations'>
        <div className='d-flex justify-content-between'>
            <h5>Your Daily Recommendations for 1st Apr</h5>
            <button className='see-all-btn'>See all <ChevronRightIcon className='right-icon'/></button>
        </div>
        <div className='recommendations-container'>
            <div>
               <Link to='userdetails'>
                    <img src={men2} alt="men2" />
                    <div className='content-of-image'>
                        <p>Rahesh Kumar</p>
                        <p>30 Yrs,5'10'</p>
                    </div>
               </Link>
            </div>

            <div>
               <Link to='userdetails'>
               <img src={men9} alt="men2" />
                <div className='content-of-image'>
                    <p>Sandeep Kumar</p>
                    <p>25 Yrs,5'10'</p>
                </div>
               </Link>
            </div>

            <div>
                <Link to='userdetails'>
                <img src={men10} alt="men2" />
                <div className='content-of-image'>
                    <p>Chukka Bhargav</p>
                    <p>29 Yrs,5'10'</p>
                </div></Link>
            </div>

            <div>
                <Link to='userdetails'>
                <img src={men11} alt="men2" />
                <div className='content-of-image'>
                    <p>Chukka Bhargav</p>
                    <p>29 Yrs,5'10'</p>
                </div></Link>
            </div>

            <div>
                <Link to='userdetails'>
                <img src={men12} alt="men2" />
                <div className='content-of-image'>
                    <p>Chukka Bhargav</p>
                    <p>29 Yrs,5'10'</p>
                </div></Link>
            </div>
        </div>
        </div>   

        {/* All Matches */}
        <div className='all-matches'>
            <div className='d-flex justify-content-between'>
                <div className='all-matches-head'>
                    <h5>All Matches (1163)</h5>
                    <p>Members who match your partner preferences</p>
                </div>
                <button className='see-all-btn'>See all <ChevronRightIcon className='right-icon'/></button>
            </div>
            <div className='all-matches-container'>
                <div className='all-matches-box'>
                    <Link to='userdetails'><img src={men14} alt="men3" /></Link>
                    <div className='head'>Tatarao Adireddi</div>
                    <div className='age'>29 Yrs, 5'11"</div>
                </div>
                <div className='all-matches-box'>
                    <Link to='userdetails'><img src={men2} alt="men3" /></Link>
                    <div className='head'>Tatarao Adireddi</div>
                    <div className='age'>29 Yrs, 5'11"</div>
                </div>
                <div className='all-matches-box'>
                    <Link to='userdetails'><img src={men4} alt="men3" /></Link>
                    <div className='head'>Tatarao Adireddi</div>
                    <div className='age'>29 Yrs, 5'11"</div>
                </div>
                <div className='all-matches-box'>
                    <Link to='userdetails'><img src={men13} alt="men3" /></Link>
                    <div className='head'>Tatarao Adireddi</div>
                    <div className='age'>29 Yrs, 5'11"</div>
                </div>
                <div className='all-matches-box'>
                    <Link to='userdetails'><img src={men3} alt="men3" /></Link>
                    <div className='head'>Tatarao Adireddi</div>
                    <div className='age'>29 Yrs, 5'11"</div>
                </div>
                
            </div>
        </div>  

        {/* New Matches */}
        <div className='new-matches'>
            <div className='d-flex justify-content-between'>
                <div className='all-matches-head'>
                    <h5>New Matches (115)</h5>
                    <p>Members who match your preferences and have joined in the last 30 days</p>
                </div>
                <button className='see-all-btn'>See all <ChevronRightIcon className='right-icon'/></button>
            </div>
            <div className='all-matches-container'>
                <div className='all-matches-box'>
                    <Link to='userdetails'><img src={men13} alt="men4" /></Link>
                    <div className='head'>Tatarao Adireddi</div>
                    <div className='age'>29 Yrs, 5'11"</div>
                </div>
                <div className='all-matches-box'>
                    <Link to='userdetails'><img src={men4} alt="men4" /></Link>
                    <div className='head'>Tatarao Adireddi</div>
                    <div className='age'>29 Yrs, 5'11"</div>
                </div>
                <div className='all-matches-box'>
                    <Link to='userdetails'><img src={men9} alt="men4" /></Link>
                    <div className='head'>Tatarao Adireddi</div>
                    <div className='age'>29 Yrs, 5'11"</div>
                </div>
                <div className='all-matches-box'>
                    <Link to='userdetails'><img src={men10} alt="men4" /></Link>                    
                    <div className='head'>Tatarao Adireddi</div>
                    <div className='age'>29 Yrs, 5'11"</div>
                </div>
                <div className='all-matches-box'>
                    <Link to='userdetails'><img src={men12} alt="men4" /></Link>
                    <div className='head'>Tatarao Adireddi</div>
                    <div className='age'>29 Yrs, 5'11"</div>
                </div>
                
            </div>
        </div> 

        {/* Awaiting Your Response */}
        <div className='awaiting-response'>
            <div className='d-flex justify-content-between'>
                <div className='all-matches-head'>
                    <h5>Awaiting Your Response (49)</h5>
                    <p>Members who are awaiting your response</p>
                </div>
                <button className='see-all-btn'>See all <ChevronRightIcon className='right-icon'/></button>
            </div>

            <div className='awaiting-response-container'>
                <div className='container1'>
                    <div><Link to='userdetails'><img src={men2} alt="men2" /></Link></div>
                    <div className='container1-body'>
                        <h6>Sunil</h6>
                        <p>28 Yrs, 5 ft 6 in,B.Tech.,Software
                            <br/>
                            Professional, Srikakulam
                        </p>
                    </div>
                    <div className='container1-footer'>
                        <div className='mb-2'>He has sent an interest to you</div>
                        <div><button className='dont-show-btn'><CloseIcon className='closeIcon'/>Decline</button></div>
                        <div><button className='send-interest-btn'><CheckIcon className='checkIcon'/>Accept</button></div>
                    </div>
                </div>
                <div className='container1'>
                    <div><Link to='userdetails'><img src={men2} alt="men2" /></Link></div>
                    <div className='container1-body'>
                        <h6>Sunil</h6>
                        <p>28 Yrs, 5 ft 6 in,B.Tech.,Software
                            <br/>
                            Professional, Srikakulam
                        </p>
                    </div>
                    <div className='container1-footer'>
                        <div className='mb-2'>He has sent an interest to you</div>
                        <div><button className='dont-show-btn'><CloseIcon className='closeIcon'/>Decline</button></div>
                        <div><button className='send-interest-btn'><CheckIcon className='checkIcon'/>Accept</button></div>
                    </div>
                </div>
                <div className='container1'>
                    <div><Link to='userdetails'><img src={men2} alt="men2" /></Link></div>
                    <div className='container1-body'>
                        <h6>Sunil</h6>
                        <p>28 Yrs, 5 ft 6 in,B.Tech.,Software
                            <br/>
                            Professional, Srikakulam
                        </p>
                    </div>
                    <div className='container1-footer'>
                        <div className='mb-2'>He has sent an interest to you</div>
                        <div><button className='dont-show-btn'><CloseIcon className='closeIcon'/>Decline</button></div>
                        <div><button className='send-interest-btn'><CheckIcon className='checkIcon'/>Accept</button></div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default HomeRightComp
