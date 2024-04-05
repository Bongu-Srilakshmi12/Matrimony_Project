import React, { useState } from 'react';
import { Box } from "@mui/material";
import Tabs from '@mui/material/Tabs'; 
import Tab from '@mui/material/Tab';
import { AppBar } from '@mui/material';
import './SuccessStories.css';



const TabPanel = (props) =>{
    const{children,value,index} = props
    return(
        <div hidden={value!== index}>
            {value === index && (<box mt={2} mx={2}>{children}</box>)}
        </div>
    )
}

const SuccessStories = () => {

    const[activeTab,setActiveTab] = useState(0);
  return(
    <div className='success-stories-container'>
        <AppBar position='static' style={{ 
            width: 600,
            height: 'auto',
            borderRadius: 10 
            }}
            >
            <Tabs value={activeTab} 
                onChange={(event,newValue)=>setActiveTab(newValue)} 
                style={{
                    backgroundColor: "#f1f1f1", // Background color for the tabs bar
                    color: 'gray',
                    padding: '10px 14px 13px 14px',
                    fontWeight: 600,
                    borderRadius: 10                    
                }}
        >
                <Tab label='Success Stories' style={{
                    backgroundColor: activeTab === 0 ? "#FFFF" : "#f1f1f1", // Active and inactive tab background color
                    color: activeTab === 0 ? 'black' : 'gray', // Active and inactive tab text color
                    padding: '10px 14px 13px 14px',
                    margin: 8,
                    fontWeight: 600,
                    borderRadius: 10
                }}/>
                <Tab label='Post Your Success Story' style={{
                    backgroundColor: activeTab === 1 ? "#FFFF" : "#f1f1f1",
                    color: activeTab === 1 ? 'black' : 'gray',
                    padding: '10px 14px 13px 14px',
                    margin: 8,
                    fontWeight: 600,
                    borderRadius: 10
                }}/>
                <Tab label='Tinies'style={{
                    backgroundColor: activeTab === 2 ? "#FFFF" : "#f1f1f1",
                    color: activeTab === 2 ? 'black' : 'gray',
                    padding: '10px 14px 13px 14px',
                    margin: 8,
                    fontWeight: 600,
                    borderRadius: 10
                }}/>
            </Tabs>
        </AppBar>
        <TabPanel value={activeTab} index={0}>
            <div className="success-stories">
                <div className="stories">
                    <div className="top-cards">
                        <div className="featured-couple">
                            <h1 className="couple-heading">Featured Couple</h1>
                            <a href="#">
                                <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1" className='featured-couple-image'  />
                            </a>
                            <span className="details">
                                <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                <p className="couples-names">Jessica & Tony</p>
                            </span>
                            <button className="readmore">Read more</button>
                        </div>
                        <div className="right-cards">
                            <div className="cards">
                                <a href="#">
                                    <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                                </a> <br />
                                <span className="card-details">
                                    <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                    <p className="couples-names">Jessica & Tony</p>
                                </span>
                                <button className="card-readmore">Read more</button>
                            </div>
                            <div className="cards">
                                <a href="#">
                                    <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                                </a> <br />
                                <span className="card-details">
                                    <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                    <p className="couples-names">Jessica & Tony</p>
                                </span>
                                <button className="card-readmore">Read more</button>
                            </div>
                            <div className="cards">
                                <a href="#">
                                    <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                                </a> <br />
                                <span className="card-details">
                                    <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                    <p className="couples-names">Jessica & Tony</p>
                                </span>
                                <button className="card-readmore">Read more</button>
                            </div>
                            <div className="cards">
                                <a href="#">
                                    <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                                </a> <br />
                                <span className="card-details">
                                    <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                    <p className="couples-names">Jessica & Tony</p>
                                </span>
                                <button className="card-readmore">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-card">
                        <div className="cards">
                            <a href="#">
                                <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                            </a> <br />
                            <span className="card-details">
                                <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                <p className="couples-names">Jessica & Tony</p>
                            </span>
                            <button className="card-readmore">Read more</button>
                        </div>
                        <div className="cards">
                            <a href="#">
                                <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                            </a> <br />
                            <span className="card-details">
                                <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                <p className="couples-names">Jessica & Tony</p>
                            </span>
                            <button className="card-readmore">Read more</button>
                        </div>
                        <div className="cards">
                            <a href="#">
                                <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                            </a> <br />
                            <span className="card-details">
                                <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                <p className="couples-names">Jessica & Tony</p>
                            </span>
                            <button className="card-readmore">Read more</button>
                        </div>
                        <div className="cards">
                            <a href="#">
                                <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                            </a> <br />
                            <span className="card-details">
                                <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                <p className="couples-names">Jessica & Tony</p>
                            </span>
                            <button className="card-readmore">Read more</button>
                        </div>
                        <div className="cards">
                            <a href="#">
                                <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                            </a> <br />
                            <span className="card-details">
                                <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                <p className="couples-names">Jessica & Tony</p>
                            </span>
                            <button className="card-readmore">Read more</button>
                        </div>
                        <div className="cards">
                            <a href="#">
                                <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                            </a> <br />
                            <span className="card-details">
                                <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                <p className="couples-names">Jessica & Tony</p>
                            </span>
                            <button className="card-readmore">Read more</button>
                        </div>
                        <div className="cards">
                            <a href="#">
                                <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                            </a> <br />
                            <span className="card-details">
                                <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                <p className="couples-names">Jessica & Tony</p>
                            </span>
                            <button className="card-readmore">Read more</button>
                        </div>
                        <div className="cards">
                            <a href="#">
                                <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                            </a> <br />
                            <span className="card-details">
                                <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                <p className="couples-names">Jessica & Tony</p>
                            </span>
                            <button className="card-readmore">Read more</button>
                        </div>
                        <div className="cards">
                            <a href="#">
                                <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                            </a> <br />
                            <span className="card-details">
                                <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                <p className="couples-names">Jessica & Tony</p>
                            </span>
                            <button className="card-readmore">Read more</button>
                        </div>
                        <div className="cards">
                            <a href="#">
                                <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                            </a> <br />
                            <span className="card-details">
                                <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                <p className="couples-names">Jessica & Tony</p>
                            </span>
                            <button className="card-readmore">Read more</button>
                        </div>
                        <div className="cards">
                            <a href="#">
                                <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                            </a> <br />
                            <span className="card-details">
                                <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                <p className="couples-names">Jessica & Tony</p>
                            </span>
                            <button className="card-readmore">Read more</button>
                        </div>
                        <div className="cards">
                            <a href="#">
                                <img src="https://img.freepik.com/premium-photo/wedding-marriage-hindu-couple-together-celebration-love-commitment-ceremony-happy-romance-islamic-with-birde-groom-getting-married-outdoor-tradition-their-culture_590464-180329.jpg?w=740" alt="1"  />
                            </a> <br />
                            <span className="card-details">
                                <a href="#" className="id-date">T3229329 | 2016-12-04</a> <br />
                                <p className="couples-names">Jessica & Tony</p>
                            </span>
                            <button className="card-readmore">Read more</button>
                        </div>    
                    </div>
                </div>
            </div>
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
            <div className="story-description">
                <p className='description'>Share your success story & Inspire others to find their best match!</p>
                <p className='dotted'></p>
                <div className="story-form">
                    <form className="form-container">
                        <div className="form-content">
                            <div className="input-information">
                                <div className="label">
                                    Bride Name (Female)
                                    <span class="star">*</span>
                                </div>
                                <div>
                                    <input type="text"  className='textfield'/>
                                </div>
                            </div>
                            <div className="input-information">
                                <div className="label">
                                    Groom Name (Male)
                                    <span class="star">*</span>
                                </div>
                                <div>
                                    <input type="text"  className='textfield'/>
                                </div>
                            </div>
                            <div className="input-information">
                                <div className="label">
                                    Your Matrimony Id
                                    <span class="star">*</span>
                                </div>
                                <div>
                                    <input type="text"  className='textfield'/>
                                </div>
                            </div>
                            <div className="input-information">
                                <div className="label">
                                    Your Partner's Matrimony Id
                                    <span class="star">*</span>
                                </div>
                                <div>
                                    <input type="text"  className='textfield'/>
                                </div>
                            </div>
                            <div className="input-information">
                                <div className="label">
                                    E-Mail
                                    <span class="star">*</span>
                                </div>
                                <div>
                                    <input type="text"  className='textfield'/>
                                </div>
                            </div>
                            <div className="input-information">
                                <div className="label">
                                    Engagement Date
                                    <span class="star">*</span>
                                </div>
                                <div className='engagement-data'>
                                    <select name="day" id="day" className='select-box'>
                                        <option value="0">DD</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                    <select name="month" id="month" className='select-box'>
                                        <option value="0">MM</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                    <select name="year" id="year" className='select-box'>
                                        <option value="0">YYYY</option>
                                        <option value="1">2024</option>
                                        <option value="2">2025</option>
                                        <option value="3">2026</option>
                                        <option value="4">2027</option>
                                        <option value="5">2028</option>
                                        <option value="6">2029</option>
                                        <option value="7">2030</option>
                                        <option value="8">2031</option>
                                        <option value="9">2032</option>
                                        <option value="10">2033</option>
                                        <option value="11">2034</option>
                                        <option value="12">2035</option>
                                        <option value="13">2036</option>
                                        <option value="14">2037</option>
                                        <option value="15">2038</option>
                                        <option value="16">2039</option>
                                        <option value="17">2040</option>
                                        <option value="18">2041</option>
                                        <option value="19">2041</option>
                                        <option value="20">2043</option>
                                        <option value="21">2044</option>
                                        <option value="22">2045</option>
                                        <option value="23">2046</option>
                                        <option value="24">2047</option>
                                        <option value="25">2048</option>
                                        <option value="26">2049</option>
                                        <option value="27">2050</option>
                                        <option value="28">2051</option>
                                        <option value="29">2052</option>
                                        <option value="30">2053</option>
                                        <option value="31">2054</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-information">
                                <div className="label">
                                    Marriage Date
                                    <span class="star">*</span>
                                </div>
                                <div className='engagement-data'>
                                    <select name="day" id="day" className='select-box'>
                                        <option value="0">DD</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                    <select name="month" id="month" className='select-box'>
                                        <option value="0">MM</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                    <select name="year" id="year" className='select-box'>
                                        <option value="0">YYYY</option>
                                        <option value="1">2024</option>
                                        <option value="2">2025</option>
                                        <option value="3">2026</option>
                                        <option value="4">2027</option>
                                        <option value="5">2028</option>
                                        <option value="6">2029</option>
                                        <option value="7">2030</option>
                                        <option value="8">2031</option>
                                        <option value="9">2032</option>
                                        <option value="10">2033</option>
                                        <option value="11">2034</option>
                                        <option value="12">2035</option>
                                        <option value="13">2036</option>
                                        <option value="14">2037</option>
                                        <option value="15">2038</option>
                                        <option value="16">2039</option>
                                        <option value="17">2040</option>
                                        <option value="18">2041</option>
                                        <option value="19">2041</option>
                                        <option value="20">2043</option>
                                        <option value="21">2044</option>
                                        <option value="22">2045</option>
                                        <option value="23">2046</option>
                                        <option value="24">2047</option>
                                        <option value="25">2048</option>
                                        <option value="26">2049</option>
                                        <option value="27">2050</option>
                                        <option value="28">2051</option>
                                        <option value="29">2052</option>
                                        <option value="30">2053</option>
                                        <option value="31">2054</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-information">
                                <div className="label">
                                    Upload Photo
                                </div>
                                <div>
                                    <input type="file"  className='choose-photos'/> <br /><br/>
                                    <input type="file" />
                                    <span className='addmore'>Add more</span>
                                </div>                                                               
                            </div>
                            <div className="input-information">
                                <div className="label">
                                    Address
                                    <span class="star">*</span>
                                </div>
                                <div>
                                    <textarea name="address" id="address" cols="30" rows="10" className='address'></textarea>
                                </div>
                            </div> 
                            <div className="input-information">
                                <div className="label">
                                    Country Living in
                                    <span class="star">*</span>
                                </div>
                                <div>
                                    <select name="country" id="country" className='country'>
                                        <option value="0">-Select-</option>
                                        <option value="1">India</option>
                                        <option value="2">United State Of America</option>
                                        <option value="3">United Arab Emirates</option>
                                        <option value="4">United Kingdom</option>
                                        <option value="5">Australia</option>
                                        <option value="6">Singapore</option>
                                        <option value="7">Canada</option>
                                        <option value="8">Qatar</option>
                                        <option value="9">Kuwait</option>
                                        <option value="10">Oman</option>
                                        <option value="11">Bahrain</option>
                                        <option value="12">Saudi Arabia</option>
                                        <option value="13">Malaysia</option>
                                        <option value="14">Germany</option>
                                        <option value="15">Zew Zealand</option>
                                        <option value="16">France</option>
                                        <option value="17">Ireland</option>
                                        <option value="18">Switzerland</option>
                                        <option value="19">South Africa</option>
                                        <option value="20">Sri Lanka</option>
                                        <option value="21">Indonesia</option>
                                        <option value="22">Nepal</option>
                                        <option value="23">Pakistan</option>
                                        <option value="24">Bangladesh</option>
                                        <option value="25">Afghanistan</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-information">
                                <div className="label">
                                    Country Code
                                    <span class="star">*</span>
                                </div>
                                <div>
                                    <select name="country" id="country" className='country'>
                                        <option value="0">-Select-</option>
                                        <option value="1">India(+91)</option>
                                        <option value="2">United State Of America(+1)</option>
                                        <option value="3">United Arab Emirates(+971)</option>
                                        <option value="4">United Kingdom(+44)</option>
                                        <option value="5">Australia(+61)</option>
                                        <option value="6">Singapore(+65)</option>
                                        <option value="7">Canada(+1)</option>
                                        <option value="8">Qatar(+974)</option>
                                        <option value="9">Kuwait(+965)</option>
                                        <option value="10">Oman(+968)</option>
                                        <option value="11">Bahrain(+973)</option>
                                        <option value="12">Saudi Arabia(+966)</option>
                                        <option value="13">Malaysia(+60)</option>
                                        <option value="14">Germany(+49)</option>
                                        <option value="15">Zew Zealand(+64)</option>
                                        <option value="16">France(+33)</option>
                                        <option value="17">Ireland(+353)</option>
                                        <option value="18">Switzerland(+41)</option>
                                        <option value="19">South Africa(+27)</option>
                                        <option value="20">Sri Lanka(+94)</option>
                                        <option value="21">Indonesia(+62)</option>
                                        <option value="22">Nepal(+977)</option>
                                        <option value="23">Pakistan(+92)</option>
                                        <option value="24">Bangladesh(+880)</option>
                                        <option value="25">Afghanistan(+93)</option>
                                    </select>
                                </div>
                            </div> 
                            <div className="input-information">
                                <div className="label">
                                    Telephone
                                    <span class="star">*</span>
                                </div>
                                <div>
                                    <input type="number"  className='textfield'/>
                                </div>
                            </div> 
                            <div className="input-information">
                                <div className="label">
                                    Success Story
                                    <span class="star">*</span>
                                </div>
                                <div>
                                    <textarea name="address" id="address" cols="30" rows="10" className='address'></textarea>
                                </div>
                            </div>
                            <div className="share-facebook">
                                <input type="checkbox" className='checkboxs-success' />
                                <span className='checkbox-description'>Share on Facebook </span>
                                <span><a href="facebook.com" className='facebook-link'><i class="fa-brands fa-square-facebook"></i>How your story appear on Facebook </a></span>
                            </div>
                            <div className='primary-button'>
                                <input type='submit' value="Submit" className='primary-btn'></input>
                                <span className='dotteds'></span>
                                
                            </div>
                            <div className="success-story-content">
                    <span className="topics">A good success story should cover this topics</span>
                </div>
                <ul className="topics-descriptions">
                    <ul>
                    <li className="topics-content">How you went about your search for a partner</li>  
                    <li className="topics-content">How you and your partner met and established contact.</li> 
                    </ul>
                    <ul>
                    <li className="topics-content">How you got to know each other's expectations and decided to proceed further.</li>  
                    <li className="topics-content">Your experience of BharatMatrimony.com</li>  
                    </ul>                                    
                </ul>
                            
                        </div>           
                    </form>
                </div>
                
                {/* <span className='dotteds'></span> */}
               
               
                {/* <div className="success-story-content">
                    <span className="topics">A good success story should cover this topics</span>
                </div>
                <ul className="topics-descriptions">
                    <li className="topics-content">How you went about your search for a partner</li>  
                    <li className="topics-content">How you got to know each other's expectations and decided to proceed further.</li> 
                    <li className="topics-content">How you and your partner met and established contact.</li>  
                    <li className="topics-content">Your experience of BharatMatrimony.com</li>                                      
                </ul> */}
            </div>
        </TabPanel>
        <TabPanel value={activeTab} index={2}>
            <div className="baby-gallery">
                <div className="baby-top-content">
                    <div className="favorite-family">
                        <a href="#">
                            <img src="https://img.freepik.com/free-photo/family-lifestyle-outdoors-autumn-time_23-2149131621.jpg?t=st=1711096035~exp=1711099635~hmac=1fca31ef16fa15caa4230a6f0b05fe3cfb89fae60bf27952a479188ff4b032e4&w=900" alt="" />
                        </a> <br />
                        <p className="family-names">John and Scarlet family</p>
                    </div>
                    <div className="white-background">
                        <div className="family-text">
                            <p>
                            Having a baby is the most wonderful feeling in the world, and the experience lasts for a lifetime. As parents, even if you're tired and sleep-deprived , looking at your little one gives you a sense of happiness and fulfillment. There's no greater joy than watching your baby. <br />  <br />
                            Share your child's photos with BharatMatrimony, the place where you found your perfect partner. BharatMatrimony brings to you "Tinies", an initiative to keep in touch with our members after they are successfully married. Put your child's photo in "Tinies" and spread the cheer. <br /> <br />
                            <b>Once you upload your child's photo, we will plant a tree on your behalf.</b>  <br /> <br />
                            </p>
                            <div className="plant-data">
                                <div className="hand-plant">
                                    <img src="https://img.freepik.com/free-photo/close-up-picture-hand-passing-sapling-plant-another-hand_1150-28365.jpg?w=900&t=st=1711109058~exp=1711109658~hmac=1bb90a352437e13d14c1a05c675c954d3a19d6d78f6427c3cb71a741c628d5c5" alt="" />
                                </div>
                                <div className="plant-content">
                                    <p>
                                    Joining hands with Isha Foundation for our social initiative BharatGreenHands, we are promoting the cause of creating a greener planet for our future generations by planting more trees. For your child's photo we shall plant a tree to spread the joy and do our bit to conserve Nature. <br />  <br />
                                    Do you have friends or relatives who have been matched through BharatMatrimony? Invite them to share their child's photo also.  <br /> <br />
                                    Come to "Tinies" and create lifetime memories. <br />  
                                    </p> 
                                    
                                </div>             
                            </div>
                            <div className="gallery">
                                <h1>Gallery</h1>
                                <div className="bottom-part">
                                    <div className="left-gallery">
                                        <div className="left-images-row1">
                                            <div className="left-images">
                                                <a href="#" className="baby-birth">
                                                    <img src="https://img.freepik.com/free-photo/cute-baby-born_624325-1181.jpg?w=900&t=st=1711111489~exp=1711112089~hmac=df74f5486674577c858223a627c1890f98688b16710e21c407ac0dac86f6d178" alt="" /> 
                                                    <span>John family</span> <br />
                                                    <span className='date-birth'><i class="fa-solid fa-cake-candles"></i>20.05.2024</span>  
                                                </a>
                                            </div>
                                            <div className="left-images">
                                                <a href="#" className="baby-birth">
                                                    <img src="https://img.freepik.com/free-photo/cute-baby-born_624325-1181.jpg?w=900&t=st=1711111489~exp=1711112089~hmac=df74f5486674577c858223a627c1890f98688b16710e21c407ac0dac86f6d178" alt="" /> 
                                                    <span>John family</span> <br />
                                                    <span  className='date-birth'><i class="fa-solid fa-cake-candles"></i>20.05.2024</span>  
                                                </a>
                                            </div>
                                        </div>
                                        <div className="left-images-row1">
                                            <div className="left-images">
                                                <a href="#" className="baby-birth">
                                                    <img src="https://img.freepik.com/free-photo/cute-baby-born_624325-1181.jpg?w=900&t=st=1711111489~exp=1711112089~hmac=df74f5486674577c858223a627c1890f98688b16710e21c407ac0dac86f6d178" alt="" /> 
                                                    <span>John family</span> <br />
                                                    <span  className='date-birth'><i class="fa-solid fa-cake-candles"></i>20.05.2024</span>  
                                                </a>
                                            </div>
                                            <div className="left-images">
                                                <a href="#" className="baby-birth">
                                                    <img src="https://img.freepik.com/free-photo/cute-baby-born_624325-1181.jpg?w=900&t=st=1711111489~exp=1711112089~hmac=df74f5486674577c858223a627c1890f98688b16710e21c407ac0dac86f6d178" alt="" /> 
                                                    <span>John family</span> <br />
                                                    <span  className='date-birth'><i class="fa-solid fa-cake-candles"></i>20.05.2024</span>  
                                                </a>
                                            </div>
                                        </div>
                                        <div className="left-images-row1">
                                            <div className="left-images">
                                                <a href="#" className="baby-birth">
                                                    <img src="https://img.freepik.com/free-photo/cute-baby-born_624325-1181.jpg?w=900&t=st=1711111489~exp=1711112089~hmac=df74f5486674577c858223a627c1890f98688b16710e21c407ac0dac86f6d178" alt="" /> 
                                                    <span>John family</span> <br />
                                                    <span  className='date-birth'><i class="fa-solid fa-cake-candles"></i>20.05.2024</span>  
                                                </a>
                                            </div>
                                            <div className="left-images">
                                                <a href="#" className="baby-birth">
                                                    <img src="https://img.freepik.com/free-photo/cute-baby-born_624325-1181.jpg?w=900&t=st=1711111489~exp=1711112089~hmac=df74f5486674577c858223a627c1890f98688b16710e21c407ac0dac86f6d178" alt="" /> 
                                                    <span>John family</span> <br />
                                                    <span  className='date-birth'><i class="fa-solid fa-cake-candles"></i>20.05.2024</span>  
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="upload-photo">
                                        <h1> <i class="fa-solid fa-photo-film"></i> Upload Your Kid's Photo</h1>
                                        <form className="form-container">
                                            <div className="form-content">
                                                <div className="input-information">
                                                    <div className="label">
                                                        Kid's Name :
                                                    </div>
                                                    <div>
                                                        <input type="text"  className='textfield'/>
                                                    </div>
                                                </div>
                                                <div className="input-information">
                                                    <div className="label">
                                                        Date of Birth :
                                                    </div>
                                                    <div className='engagement-data'>
                                                        <select name="day" id="day" className='select-box'>
                                                            <option value="0">DD</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                            <option value="13">13</option>
                                                            <option value="14">14</option>
                                                            <option value="15">15</option>
                                                            <option value="16">16</option>
                                                            <option value="17">17</option>
                                                            <option value="18">18</option>
                                                            <option value="19">19</option>
                                                            <option value="20">20</option>
                                                            <option value="21">21</option>
                                                            <option value="22">22</option>
                                                            <option value="23">23</option>
                                                            <option value="24">24</option>
                                                            <option value="25">25</option>
                                                            <option value="26">26</option>
                                                            <option value="27">27</option>
                                                            <option value="28">28</option>
                                                            <option value="29">29</option>
                                                            <option value="30">30</option>
                                                            <option value="31">31</option>
                                                        </select>
                                                        <select name="month" id="month" className='select-box'>
                                                            <option value="0">MM</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                        </select>
                                                        <select name="year" id="year" className='select-box'>
                                                            <option value="0">YYYY</option>
                                                            <option value="1">2024</option>
                                                            <option value="2">2025</option>
                                                            <option value="3">2026</option>
                                                            <option value="4">2027</option>
                                                            <option value="5">2028</option>
                                                            <option value="6">2029</option>
                                                            <option value="7">2030</option>
                                                            <option value="8">2031</option>
                                                            <option value="9">2032</option>
                                                            <option value="10">2033</option>
                                                            <option value="11">2034</option>
                                                            <option value="12">2035</option>
                                                            <option value="13">2036</option>
                                                            <option value="14">2037</option>
                                                            <option value="15">2038</option>
                                                            <option value="16">2039</option>
                                                            <option value="17">2040</option>
                                                            <option value="18">2041</option>
                                                            <option value="19">2041</option>
                                                            <option value="20">2043</option>
                                                            <option value="21">2044</option>
                                                            <option value="22">2045</option>
                                                            <option value="23">2046</option>
                                                            <option value="24">2047</option>
                                                            <option value="25">2048</option>
                                                            <option value="26">2049</option>
                                                            <option value="27">2050</option>
                                                            <option value="28">2051</option>
                                                            <option value="29">2052</option>
                                                            <option value="30">2053</option>
                                                            <option value="31">2054</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="input-information">
                                                    <div className="label">
                                                        Location :
                                                    </div>
                                                    <div>
                                                        <select name="country" id="country" className='country'>
                                                            <option value="0">-Select-</option>
                                                            <option value="1">India</option>
                                                            <option value="2">United State Of America</option>
                                                            <option value="3">United Arab Emirates</option>
                                                            <option value="4">United Kingdom</option>
                                                            <option value="5">Australia</option>
                                                            <option value="6">Singapore</option>
                                                            <option value="7">Canada</option>
                                                            <option value="8">Qatar</option>
                                                            <option value="9">Kuwait</option>
                                                            <option value="10">Oman</option>
                                                            <option value="1">Bahrain</option>
                                                            <option value="2">Saudi Arabia</option>
                                                            <option value="3">Malaysia</option>
                                                            <option value="4">Germany</option>
                                                            <option value="5">Zew Zealand</option>
                                                            <option value="6">France</option>
                                                            <option value="7">Ireland</option>
                                                            <option value="8">Switzerland</option>
                                                            <option value="9">South Africa</option>
                                                            <option value="10">Oman</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="input-information">
                                                    <div className="label">
                                                        Add Kid's Photo :
                                                    </div>
                                                    <div>
                                                        <input type="file"  className='photo-upload'/>
                                                    </div>
                                                </div>
                                                <div className="input-information">
                                                    <div className="label">
                                                        Parents's Name :
                                                    </div>
                                                    <div>
                                                        <input type="text"  className='textfield'/>
                                                    </div>
                                                </div>
                                                <div className="input-information">
                                                    <div className="label">
                                                    </div>
                                                    <div>
                                                        <input type="text"  className='textfield'/>
                                                    </div>
                                                </div>
                                                <div className="input-information">
                                                    <div className="label">
                                                        E-mail ID :
                                                    </div>
                                                    <div>
                                                        <input type="text"  className='textfield'/>
                                                    </div>
                                                </div>
                                                <div className="input-information">
                                                    <div className="label">
                                                        MatriID (Optional) :
                                                    </div>
                                                    <div>
                                                        <input type="text"  className='textfield'/>
                                                    </div>
                                                </div>
                                                <div className="input-information">
                                                    <div className="label">
                                                        Date of Marriage :
                                                    </div>
                                                    <div className='engagement-data'>
                                                        <select name="day" id="day" className='select-box'>
                                                            <option value="0">DD</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                            <option value="13">13</option>
                                                            <option value="14">14</option>
                                                            <option value="15">15</option>
                                                            <option value="16">16</option>
                                                            <option value="17">17</option>
                                                            <option value="18">18</option>
                                                            <option value="19">19</option>
                                                            <option value="20">20</option>
                                                            <option value="21">21</option>
                                                            <option value="22">22</option>
                                                            <option value="23">23</option>
                                                            <option value="24">24</option>
                                                            <option value="25">25</option>
                                                            <option value="26">26</option>
                                                            <option value="27">27</option>
                                                            <option value="28">28</option>
                                                            <option value="29">29</option>
                                                            <option value="30">30</option>
                                                            <option value="31">31</option>
                                                        </select>
                                                        <select name="month" id="month" className='select-box'>
                                                            <option value="0">MM</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                        </select>
                                                        <select name="year" id="year" className='select-box'>
                                                            <option value="0">YYYY</option>
                                                            <option value="1">2024</option>
                                                            <option value="2">2025</option>
                                                            <option value="3">2026</option>
                                                            <option value="4">2027</option>
                                                            <option value="5">2028</option>
                                                            <option value="6">2029</option>
                                                            <option value="7">2030</option>
                                                            <option value="8">2031</option>
                                                            <option value="9">2032</option>
                                                            <option value="10">2033</option>
                                                            <option value="11">2034</option>
                                                            <option value="12">2035</option>
                                                            <option value="13">2036</option>
                                                            <option value="14">2037</option>
                                                            <option value="15">2038</option>
                                                            <option value="16">2039</option>
                                                            <option value="17">2040</option>
                                                            <option value="18">2041</option>
                                                            <option value="19">2041</option>
                                                            <option value="20">2043</option>
                                                            <option value="21">2044</option>
                                                            <option value="22">2045</option>
                                                            <option value="23">2046</option>
                                                            <option value="24">2047</option>
                                                            <option value="25">2048</option>
                                                            <option value="26">2049</option>
                                                            <option value="27">2050</option>
                                                            <option value="28">2051</option>
                                                            <option value="29">2052</option>
                                                            <option value="30">2053</option>
                                                            <option value="31">2054</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="input-information">
                                                    <div className="label">
                                                        Comments :
                                                    </div>
                                                    <div>
                                                        <textarea name="address" id="address" cols="30" rows="10" className='address'></textarea>
                                                    </div>
                                                </div>
                                                <div className='primary-button'>
                                                    <input type='submit' value="Submit" className='primary-btn'></input>
                                                </div>
                                            </div>           
                                        </form>
                                    </div>
                                </div>
                            </div>                                          
                        </div>
                        
                    </div>
                </div>
                
            </div>           
        </TabPanel>

    </div>
  )
}

export default SuccessStories