import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField, Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import './help.css';
import path_to_india_flag from '../../images/path_to_india_flag.png';
import path_to_uae_flag from '../../images/path_to_uae_flag.png';
import phone from '../../images/phone.png';
import live_chat from '../../images/live_chat.png';
import question_icon from '../../images/question_icon.png';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const [category, setCategory] = useState(''); // State for category here

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value); // Handler for category here
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <Box sx={{  width: '1250px', border: '2px solid #e0e0e0', margin: '0 auto', marginTop: '150px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',boxSizing: 'border-box', width: '1200px', margin: '0 auto' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Contact Us" {...a11yProps(0)} />
          <Tab label="Business Enquiries" {...a11yProps(1)} />
          <Tab label="Feedback" {...a11yProps(2)} />
          <Tab label="Our Retail Stores" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <div className="contact-container">
      
      <div className="contact-content">
        <div className="contact-info">
          <p>BharatMatrimony is eager to help you find your partner at the earliest. Our customer service team will be pleased to assist you anytime you have a query. You can contact our customer service team in one of the following ways.</p>
          <h2>Helpline Numbers</h2>
          <div className="helpline">
                
                <div className="helpline-numbers">
                    <div className="helpline-number">
                    <img src={path_to_india_flag} alt="India Flag" className="flag-icon" />
                    <span>INDIA: 0-8144-99-88-77</span>
                    </div>
                    <div className="helpline-number">
                    <img src={path_to_uae_flag} alt="UAE Flag" className="flag-icon" />
                    <span>UAE: +971 525060879</span>
                    </div>
                </div>
                </div>
                <h2>For payment related queries</h2>
            <div className="payment_queries">
                    <img src={phone} alt="phone icon" className="phone-icon" />
                    <span>Call  +91 7538895777</span>
            </div>

            <div className="dotted-line"></div>

            <div className="chatlive">
                    <img src={live_chat} alt="live_chat icon" className="livechat_icon" />
                    <span>Chat live</span>
            </div>
        <p>Chat live with our customer service<br/> team. Get answers instantly.</p>
      <button className="chatNowButton">Chat Now</button>
      <div className="dotted-line"></div>
           </div>
           
        <div className="faq">
        <div className="faq-header">
        <img src={question_icon} alt="commonly asked questions icon" className="Question-icon" />
            <span>Commonly Asked Questions</span>
        </div>
          <div className="dotted-line"></div>
          <ul className="faq-list">
    <li>I am a free member. How to contact other members?</li>
    <li>I am a Paid member. How to contact other members?</li>
    <li>How to delete my profile?</li>
    <li>How do I login?</li>
    <li>I am not getting the right matches. Why?</li>
    <li>How do I verify my phone number?</li>
    <li>How to view the phone number/contact details of other members?</li>
    <li>How can I edit my profile?</li>
    <li>How to validate my photo/horoscope?</li>
  </ul>
          
        </div>
      </div>
    </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Box className="business-enquiries-container">
  <Typography >
    If you're interested in partnering with BharatMatrimony.com, the Leader in Online Matrimony and the Most Visited Matrimony Portal by Indians world over, please fill the form below.
  </Typography>
  <div className="dotted-line"></div>

  <Typography variant="subtitle1" gutterBottom>
    *All fields are mandatory
  </Typography>
  <form noValidate autoComplete="off">
  <Grid container spacing={2} style={{ width: '70%'}}>
          <Grid item xs={12} sm={6}>
            <TextField id="name" label="Your Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="company" label="Organisation / Company" variant="outlined" fullWidth  />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="business" label="Nature of Business" variant="outlined"  fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="phone" label="Contact Phone" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="email" label="E-mail" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="partnership-details" label="Details / Queries about Partnership" variant="outlined"  multiline rows={8} fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}  style={{ marginTop : '-158px'}}>
            <TextField id="address" label="Contact Address" variant="outlined" multiline rows={4} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" className="submit-button" style={{ backgroundColor: '#ff6a00', color: "#fff", marginLeft: "559px", marginTop: "0px", borderRadius: "4px", cursor: "pointer", fontSize: "large", fontWeight: "bold"}} >
              Submit
            </Button>
            <div>
              <h4 style={{ marginTop: " 15px"}}>FOR MORE DETAILS, CONTACT</h4>
              <span>E-mail: <a href=" mailto:helpdesk@bharatmatrimony.com" className="faq-email">partnership@bharatmatrimony.com</a></span>
            </div>
          </Grid>
          </Grid>
      
  </form>
  
</Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2, mr: 2 }}>
      <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
        Please feel free to post your questions, comments and suggestions. We are eager to assist you and serve you better.
      </Typography>
      <div className="dotted-line"></div>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        *All fields are mandatory
      </Typography>
       <form noValidate autoComplete="off">
  <Grid container spacing={2} style={{ width: '70%'}}>
          <Grid item xs={12} sm={6}>
            <TextField id="name" label="Your Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="category">Category</InputLabel>
            <Select
              value={category}
              onChange={handleChange}
              label="Category"
              inputProps={{
                name: 'category',
                id: 'category',
              }}
            >
             
              <MenuItem value="option1">problems related to the website</MenuItem>
              <MenuItem value="option2">problems related to profiles</MenuItem>
              <MenuItem value="option3">Compliments and Suggestions</MenuItem>
              <MenuItem value="option3">Others</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField id="Matrimony ID" label="Matrimony ID" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="Suggestions / Feedback" label="Suggestions / Feedback" variant="outlined" style={{  marginBottom: '0px' }} multiline rows={6} fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" fullWidth style={{ width: '100%', marginTop: '-100px' }}>
            <InputLabel htmlFor="Priority">Priority</InputLabel>
            <Select
              value={category}
              onChange={handleChange}
              label="Priority"
              inputProps={{
                name: 'Priority',
                id: 'Priority',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="option1">Low</MenuItem>
              <MenuItem value="option2">Medium</MenuItem>
              <MenuItem value="option3">High</MenuItem>
            </Select>
          </FormControl>
        </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" className="submit-button" style={{ backgroundColor: '#ff6a00', color: "#fff", marginLeft: "700px", marginTop: "0px", borderRadius: "4px", cursor: "pointer", fontSize: "large", fontWeight: "bold"}} >
              Submit
            </Button>
            </Grid>
           
        </Grid>
        </form>
</Box>
 </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>

      <div className="retailStoresPage">
      <p>BharatMatrimony.com Offices are present in all major cities of India. Globally we are represented in the United States, UAE, Singapore, Australia and in Canada. You may call us or walk into any of our offices in your locality to make payments or for any other assistance related to your partner search.</p>

      <h2>Corporate Office</h2>
      <div className="storeSection">
        
      <p><div style={{ fontWeight: 'bold' }}>Matrimony DMCC,</div></p>
        <p>No: 903, Fortune Executive Tower,</p>
        <p>Jumeirah Lake Towers,</p>
        <p>Dubai, United Arab Emirates.</p>
        <p>Phone: +971-525060879</p>
        <p>Email: dubai@bharatmatrimony.com</p>
        
      </div>
      
    </div>
        
      </CustomTabPanel>
    </Box>
  );
}