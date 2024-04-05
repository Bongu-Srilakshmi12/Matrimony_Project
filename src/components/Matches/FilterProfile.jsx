import * as React from 'react';
import './FilterProfile.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Typography } from '@mui/material';


export default function FilterProfile() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='filter-profile-container'>
    <Box sx={{ width: '100%', typography: 'body1' }} >
      <TabContext value={value}>
        <Box sx={{ borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{fontWeight:'600'}}>
            <Tab label="Filter Profiles" value="1" 
            sx={{
                  textTransform: "none",
                  "&.Mui-selected": {
                    color:'#000000',
                   fontWeight:'600',
                   borderBottomColor:'green'
                   
                  }
                }}/>
            <Tab label="Sort Profiles" value="2" 
             sx={{
              textTransform: "none",
              "&.Mui-selected": {
                color:'#000000',
               fontWeight:'600',
               borderBottomColor:'green'
               
              }
            }}/>
          </TabList>
        </Box>
        {/* Filter Profiles */}
        <TabPanel value="1"  sx={{ overflowY: 'auto', maxHeight: '500px','&::-webkit-scrollbar': { width: '6px', right: '20px' },'&::-webkit-scrollbar-thumb': { backgroundColor: '#888' },marginLeft:'-20px' }}>
            <div>
              <Accordion sx={{ 
                border:'1px solid #c4c4c4', 
                marginBottom:'16px',
                boxShadow: '0 0 3px #00000029'
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    fontSize:'16px',
                    fontFamily:'Lato',
                    fontWeight:700,
                  }}
                >
                  Basic Details
                </AccordionSummary>
                <AccordionDetails >
                  <div className='accordion-details'>
                    <span>Age</span>
                    <span>23 Yrs-30 Yrs <span className='accordion-edit'><EditOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-details'>
                    <span>Height</span>
                    <span>5'0"-6'0" <span className='accordion-edit'><EditOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-details'>
                    <span>Profile Created By</span>
                    <span>Any <span className='accordion-edit'><EditOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-viewmore'>View more <KeyboardArrowDownOutlinedIcon/></div>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ 
                border:'1px solid #c4c4c4', 
                marginBottom:'16px',
                boxShadow: '0 0 3px #00000029'
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={{
                    fontSize:'16px',
                    fontFamily:'Lato',
                    fontWeight:700,
                  }}
                >
                 Religious Details
                </AccordionSummary>
                <AccordionDetails>
                <div className='accordion-details'>
                    <span>Religion</span>
                    <span>Hindu <span className='accordion-edit'><EditOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-details'>
                    <span>Caste</span>
                    <span>Velama <span className='accordion-edit'><EditOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-details'>
                    <span>Subcaste</span>
                    <span>Any <span className='accordion-edit'><EditOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-details'>
                    <span>Profiles with Horoscope</span>
                    <span><input type='checkbox'/><span className='accordion-lock'><LockOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-details'>
                    <span>star</span>
                    <span>Any <span className='accordion-lock'><LockOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-details'>
                    <span>Dosha(m)</span>
                    <span>Doesn't Matter <span className='accordion-edit'><EditOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-viewmore'>View more <KeyboardArrowDownOutlinedIcon/></div>
                </AccordionDetails>
              </Accordion>

              <Accordion defaultExpanded sx={{ 
                border:'1px solid #c4c4c4', 
                marginBottom:'16px',
                boxShadow: '0 0 3px #00000029'
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                  sx={{
                    fontSize:'16px',
                    fontFamily:'Lato',
                    fontWeight:700,
                  }}
                >
                  Professional Details
                </AccordionSummary>
                <AccordionDetails>
                <div className='accordion-details'>
                    <span>Occupation</span>
                    <span>Any <span className='accordion-edit'><EditOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-details'>
                    <span>Anual Income</span>
                    <span>Any <span className='accordion-edit'><EditOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-details'>
                    <span>Employment Type</span>
                    <span>Any <span className='accordion-edit'><EditOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-details'>
                    <span>Education</span>
                    <span>Any <span className='accordion-edit'><EditOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-details'>
                    <span>Institution Details</span>
                    <span>Any <span className='accordion-lock'><LockOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-details'>
                    <span>Organisation Details</span>
                    <span>Any <span className='accordion-lock'><LockOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-viewmore'>View more <KeyboardArrowDownOutlinedIcon/></div>
                </AccordionDetails>
               
              </Accordion>

              <Accordion sx={{ 
                border:'1px solid #c4c4c4', 
                marginBottom:'16px',
                boxShadow: '0 0 3px #00000029'
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    fontSize:'16px',
                    fontFamily:'Lato',
                    fontWeight:700,
                  }}
                >
                  Location Details
                </AccordionSummary>
                <AccordionDetails>
                <div className='accordion-details'>
                    <span>Profiles with Horoscope</span>
                    <span><input type='checkbox'/></span>
                  </div>
                  <div className='accordion-details'>
                    <span>Country</span>
                    <span>Any <span className='accordion-edit'><EditOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-details'>
                    <span>Citizenship</span>
                    <span>Any <span className='accordion-edit'><EditOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-viewmore'>View more <KeyboardArrowDownOutlinedIcon/></div>

                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ 
                border:'1px solid #c4c4c4', 
                marginBottom:'16px',
                boxShadow: '0 0 3px #00000029'
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    fontSize:'16px',
                    fontFamily:'Lato',
                    fontWeight:700,
                  }}
                >
                  Lifestyle
                </AccordionSummary>
                <AccordionDetails>
                  <div>Mutual Hobbies</div>
                  <div className='accordion-details'>
                    <span>Matches who have similar hobbies as you</span>
                    <span><input type='checkbox'/></span>
                  </div>
                  <div className='accordion-details'>
                    <span>Eating Habits</span>
                    <span>Any <span className='accordion-edit'><EditOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-viewmore'>View more <KeyboardArrowDownOutlinedIcon/></div>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ 
                border:'1px solid #c4c4c4', 
                marginBottom:'16px',
                boxShadow: '0 0 3px #00000029'
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    fontSize:'16px',
                    fontFamily:'Lato',
                    fontWeight:700,
                  }}
                >
                  Family Details
                </AccordionSummary>
                <AccordionDetails>
                <div className='accordion-details'>
                    <span>Family Status</span>
                    <span>Any <span className='accordion-edit'><EditOutlinedIcon/></span></span>
                  </div>
                  <div className='accordion-viewmore'>View more <KeyboardArrowDownOutlinedIcon/></div>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ 
                border:'1px solid #c4c4c4', 
                marginBottom:'16px',
                boxShadow: '0 0 3px #00000029'
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    fontSize:'16px',
                    fontFamily:'Lato',
                    fontWeight:700,
                  }}
                >
                  Recently active profiles
                </AccordionSummary>
                <AccordionDetails>
                  <div>Profile Created
                    <br/>
                    Profiles based on created date</div>
                    <div className='active-profiles'>
                      <button>All</button>
                      <button>Today</button>
                      <button>Last 3 days</button>
                      <button>One week</button>
                      <button>One month</button>
                    </div>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ 
                border:'1px solid #c4c4c4', 
                marginBottom:'16px',
                boxShadow: '0 0 3px #00000029'
                }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    fontSize:'16px',
                    fontFamily:'Lato',
                    fontWeight:700,
                  }}
                >
                  Profile Type
                </AccordionSummary>
                <AccordionDetails>
                <p>Mutual Matches</p>
                  <div className='accordion-details'>
                    <span>Profiles matching your preferences & vice versa</span>
                    <span><input type='checkbox'/></span>
                  </div>
                  <p>Profiles with photo</p>
                  <div className='accordion-details'>
                    <span>Matches who have added photos</span>
                    <span><input type='checkbox'/></span>
                  </div>                
                </AccordionDetails>
              </Accordion>
        </div>
        </TabPanel>
        <TabPanel value="2" sx={{border:'1px solid gray'}}>
          <div>
            <Typography variant='body2' sx={{fontWeight:'600'}}>Sort profiles on the basis of</Typography>
            <div>
              <p>Last Login</p>
              <div className='sort-profiles'>
              <span>Show recently logged-in members first</span>
              <span><input type='radio'/></span>
              </div>
            </div>
                <p>Mutual Matches</p>
                  <div className='sort-profiles'>
                    <span>Profiles matching your preferences & vice versa</span>
                    <span><input type='radio'/></span>
                  </div>
          </div>

        </TabPanel>

          <div>
            <button id='apply-btn'>Apply</button>
          </div>
      </TabContext>
    </Box>
    </div>
  );
}