import React, { useState } from 'react';
import { Box } from "@mui/material";
import Tabs from '@mui/material/Tabs'; 
import Tab from '@mui/material/Tab';
import { AppBar } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CallIcon from '@mui/icons-material/Call';
import GenHoroscope from '../../components/Genhoroscope/GenHoroscope';


const TabPanel = (props) =>{
    const{children,value,index} = props
    return(
        <div hidden={value!== index}>
            {value === index && (<box mt={2} mx={2}>{children}</box>)}
        </div>
    )
}

const Muitabs = () => {

    const[activeTab,setActiveTab] = useState(0);
  return(
    <div>
        <AppBar position='static' sx={{ marginTop: '140px', width: '80%', alignItems: 'center', color: 'white', backgroundColor: 'transparent',boxShadow:'none' }}>
    <Tabs value={activeTab} onChange={(event, newValue) => setActiveTab(newValue)} sx={{ width: '80%', 
            color: 'gray', 
            fontWeight: 600,
            textDecoration:'none',
            '& .MuiTab-root': {
                backgroundColor: '#f1f1f1',
                
                '&.Mui-selected': {
                    backgroundColor: '#ffffff',
                    color: 'green',
                    fontWeight: '600',
                    boxShadow:'2px 4px 2px #f1f1f1',
                    textDecoration:'none'
                }
            } 
            }}>
        <Tab label='Add Horoscope' sx={{ border: '1px solid #f1f1f1', marginRight: '10px',textDecoration:'none' }} />
        <Tab label='Horoscope Settings' sx={{ border: '1px solid #f1f1f1', marginRight: '10px',textDecoration:'none' }} />
        <Tab label='AstroMatch' sx={{ border: '1px solid #f1f1f1', marginRight: '10px',textDecoration:'none' }} />
    </Tabs>
</AppBar>

    <TabPanel value={activeTab} index={0}>
        <GenHoroscope/>
    </TabPanel>
    <TabPanel value={activeTab} index={1}>
        <div className='horo-border-box'>
            <div className='horoscope-btm'>
                <div className='horoscope-left'>
                    <p>The Horoscope Match settings are used for horoscope compatibility.</p>
                    <h4>Given below are your current Horoscope Match settings:</h4>
                    <div className='settings-form'>
                        <form className="form-container-horo">
                            <div className="form-content">
                                <div className="label">
                                    Star Check
                                    <span class="star">*</span>
                                </div>
                                <div className="input-fields">
                                    <div className="selectbox-ui">
                                        <select name="star" id="" className="selectbox">
                                            <option value="1">kerala</option>
                                            <option value="2" selected>Tamil Nadu</option>
                                            <option value="3">Gunamilan</option>
                                            <option value="4">North Indian</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="form-content">
                                <div className="label">
                                    Kuja dosha check
                                    <span class="star">*</span>
                                </div>
                                <div className="input-fields">
                                    <div className="selectbox-ui">
                                        <select name="star" id="" className="selectbox">
                                            <option value="1" selected>Ordinary check</option>
                                            <option value="2" >Strict heck</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="form-content">
                                <div className="label">
                                    Dasa sandhi check
                                    <span class="star">*</span>
                                </div>
                                <div className="input-fields">
                                    <div className="selectbox-ui">
                                        <select name="star" id="" className="selectbox">
                                            <option value="1" selected>Ordinary check</option>
                                            <option value="2" >Strict check</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="form-content">
                                <div className="label">
                                    Papasamya check
                                    <span class="star">*</span>
                                </div>
                                <div className="input-fields">
                                    <div className="selectbox-ui">
                                        <select name="star" id="" className="selectbox">
                                            <option value="1">Papasamya check</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="clear"></div>
                            </div> 
                            <div className="modetory">
                                <span className='modetory-star'>*</span>
                                All fields are mandatory
                            </div> 
                            <div className='primary-button'>
                                <input type='submit' value="modify" className='primary-btn'></input>
                            </div>                         
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </TabPanel>
    <TabPanel value={activeTab} index={2}>
        <div className='astromatch-horo-container'>
        <div className="left-container">
            <h1 className='astromatch'>Astromatch</h1>
            <p className='dotted'></p>
            <p className='bold-text'>Real time horoscope matching report in one click!</p>
            <p className="normal-paragraph"> <span class="icon-container">< CheckRoundedIcon /></span> A unique service that matches your horoscope with other members' horoscopes</p>  
            <p className="normal-paragraph">
            <span class="icon-container">< CheckRoundedIcon /></span>Analyzes partner compatibility based on Birth Stars, Papasamya, Kujadosha & Dasasandhi and generates instant online reports
            </p>
            <p className='bold-text'>Find your compatible match now!</p>
            <table>
                <tr>
                    <th>Amount</th>
                    <th>Astromatch</th>
                    <th>Validity</th>
                </tr>
                <tr>
                    <td><input type="radio" name='package' id='package' />Rs.700</td>
                    <td>50</td>
                    <td>3 Months</td>
                </tr>
                <tr>
                    <td><input type="radio" name='package' id='package' />Rs.1000</td>
                    <td>100</td>
                    <td>6 Months</td>
                </tr>
                <tr>
                    <td><input type="radio" name='package' id='package' />Rs.1300</td>
                    <td>50</td>
                    <td>9 Months</td>
                </tr>
            </table>
            <div className='subscribe-now'>
                <input type='submit' value="SUBSCRIBE NOW" className='subscribe'></input>
            </div>
            <div className='contact-information'>
                <span className="call-icon">< CallIcon /></span>
                For further details about this service <br />
                <span className="number">Call 9999999999</span> 
            </div>                
        </div>
        <div className="right-container">
            <h1 className="sample-astromatch">Sample Astromatch</h1>
            <div className="image-background">
                <div className="image-container">
                    <img src="https://img.freepik.com/free-vector/bifold-brochure-text-icons_1284-45154.jpg?w=740&t=st=1711006762~exp=1711007362~hmac=39fc8ae97d0301a120a42dc2da75019ebfc9b70432564c00cd8aa1f4d5b52a4c" alt=""  className='sample-img'  />
                </div>
            </div>
        </div>
        </div>
    </TabPanel>

    </div>
  )
}

export default Muitabs