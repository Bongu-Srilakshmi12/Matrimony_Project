import React from 'react';
import './Premium.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

function PricingCard() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="features-container">
                <h4>Pay now to contact matches</h4>
                <ul className="features-list">
                    <li className="feature">
                        <span className="checkmark">✓</span>
                        Send unlimited messages & chat, view 50 verified mobile numbers
                    </li>
                    <li className="feature">
                        <span className="checkmark">✓</span>
                        Check compatibility with matches by viewing unlimited horoscopes
                    </li>
                    <li className="feature disabled">
                        <span className="crossmark">✕</span>
                        View and contact ID verified matches with photos from exclusive Prime section
                    </li>
                    <li className="feature disabled">
                        <span className="crossmark">✕</span>
                        Priority customer service helpline
                    </li>
                    <li className="feature disabled">
                        <span className="crossmark">✕</span>
                        Get better visibility and responses from matches with 1 month Profile Highlighter
                    </li>
                </ul>
            </div>
            {/* // #membership part begin */}
            <div className="pricing-container">
                <div className="card-gold-premium">
                    {/* <div className="circle"> </div> */}
                    <input type="radio"  className='circle'/>
                    <div className="content-premium">
                        <h5>GOLD</h5>
                        <p>3 Months</p>
                        <h6>₹5,300</h6>
                    </div>
                </div>
                <div className="card best-seller">
                    {/* <div className="circle"></div> */}
                    <input type="radio"  className='circle'/>

                    <div className="content-premium">
                        <h5>PRIME GOLD</h5>
                        <p>3 Months</p>
                        <h6>₹7,500</h6>
                        <div className="badge">BEST SELLING</div>
                    </div>
                </div>
                <div className="card-gold-premium">
                    {/* <div className="circle"></div> */}
                    <input type="radio"  className='circle'/>

                    <div className="content-premium">
                        <h5>PRIME PLATINUM</h5>
                        <div><p>3 Months</p></div>
                        <h6>₹9,500</h6>
                    </div>
                </div>
                
            </div>
            <div className="offer-premium">
                    <span>Offer Valid Only Today!</span>
                    <div><button className='pay-now-btn'>Pay Now ₹5,300</button></div>
                    <div><button className='view-all-packages' onClick={()=>navigate('packages')}>View All Packages <ChevronRightIcon/></button></div>
                </div>
        </div>
    );
}

export default PricingCard;
