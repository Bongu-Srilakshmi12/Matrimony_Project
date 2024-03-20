import React, { useState } from 'react';
import { Box } from "@mui/material";
import Tabs from '@mui/material/Tabs'; 
import Tab from '@mui/material/Tab';
import { AppBar } from '@mui/material';
// import TabPanel from '@mui/lab/TabPanel';
// import GenHoroScopePage from '../tabs/Muitabs';
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
        <AppBar position='static'>
        <Tabs value={activeTab} 
        onChange={(event,newValue)=>setActiveTab(newValue)} 
       style={{
            backgroundColor: "transparent", // Remove or override the background color
            backgroundColor: "#f1f1f1",
            color: 'gray',
            padding: '10px 14px 13px 14px',
            margin: 8,
            fontWeight: 600
        }}
       >
            <Tab label='Add Horoscope' style={{
                backgroundColor: "#f1f1f1",
                color: 'gray',
                padding: '10px 14px 13px 14px',
                margin: 8,
                fontWeight: 600
            }}/>
            <Tab label='Horoscope Settings'/>
            <Tab label='AstroMatch'/>
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
                        <form className="form-container">
                            <div className="form-group">
                                <label htmlFor='starCheck'>Star Check</label>
                                <input type='text' id='starCheck' className='input-field' />
                            </div>
                            <div className="form-group">
                                <label htmlFor='kujaDosha'>Kuja Dosha Check</label>
                                <input type='text' id='kujaDosha' className='input-field' />
                            </div>
                            <div className="form-group">
                                <label htmlFor='dasaSandhi'>Dasa Sandhi Check</label>
                                <input type='text' id='dasaSandhi' className='input-field' />
                            </div>
                            <div className="form-group">
                                <label htmlFor='papasamya'>Papasamya Check</label>
                                <input type='text' id='papasamya' className='input-field' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </TabPanel>
    <TabPanel value={activeTab} index={2}>Tab 3</TabPanel>

    </div>
  )
}

export default Muitabs