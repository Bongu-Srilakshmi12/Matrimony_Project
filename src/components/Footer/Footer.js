import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import logo from '../../images/logo1.jpg';


const Footer = () => (
 
  <footer className="footer">
    <div className="About_Us">
    <div className='about-logo'><img src={logo} alt="logo" className="logo_about" />
      <h3>About Us</h3></div>
        <p>
          SindhiMatrimony is a part of BharatMatrimony - the pioneers of online matrimony service. Today, we are the most trusted Matrimony website by Brand Trust Report. Millions of happy marriages happened and continue to happen through BharathMatrimony. we have been featured in the Limca book of records for the highest number of documented marriages online. besides internet, We also have a strong offline presence across india with over <a href="140+ matrimony branches!">140+ matrimony branches!</a>. Bharath matrimony is the first group to offer 100% mobiles verifies profiles, reinforcing the trust that members have on us. we have also pioneered the highly personalized matchmaking services - Assisted services and EliteMatrimony. Our <a href="#purpose">purpose</a> is to build a better Bharat through happy marriages.
        </p>
      </div>
    <div className="second_column">
      <div className="Help-and-Support">
      <h3>Help & Support</h3>
      <ul>
        <li><a href="/Help" className="24x7">24x7 Live help</a></li>
        <li>Contact us</li>
        <li>Feedback</li>
        <li><a href="/FAQ" className="FAQ">FAQs</a></li>
      </ul>
      </div>
      <div className="Our-Other-services">
      <h3>Our Other Services</h3>
      <ul>
          <li>EliteMatrimony.com</li>
      </ul>
      </div>
      <div className="Social-Initiatives">
      <h3>Social Initiatives</h3>
      <ul>
          <li>AbilityMatrimony.com</li>
          <li>Happymarriages.com</li>
      </ul>
      </div>
      <div className="Our-Wedding-Services">
      <h3>Our Wedding Services</h3>
      <ul>
          <li>MatrimonyMandapas.com</li>
      </ul>
      </div>
    </div>
    <div className="Information">
      <h3>Information</h3>
      <ul>
          <li>About </li>
          <li>Awards</li>
          <li>Milestones</li>
          <li>Success stories</li>
          <li>Careers</li>
          <li>Media Room</li>
          <li>Affiliates</li>
          <li>TV Commercials</li>
          <li>Advertise with us</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
    </div>
    <div className="Related_Matrimony_Services">
      <h3>Related Matrimony Services</h3>
      <ul>
          <li>HappyMarriages.com</li>
          <li>Safe Matrimony</li>
          <li>Matrimonial Tools</li>
          <li>Matrimonial Sites</li>
          <li>Sindhi Matrimonials</li>
          <li>Matrimonial Websites</li>
          <li>Sindhi Matrimony Branches</li>
          <li>Marriage Halls</li>
          <li>Banquet Halls</li>
        </ul>
      </div>
      <div className="footer-disclaimer-container">
      <p className="footer-disclaimer">
        This website is strictly for matrimonial purpose only and not a dating website.<br/>
        Copyright © 2024 Matrimony.com, the most trusted matrimony brand.
      </p>
      <div>
        <span>FOLLOW US ON:</span>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  </footer>
  
  );

export default Footer;
