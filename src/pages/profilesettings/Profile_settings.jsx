  import React, { useState } from 'react';
  import PropTypes from 'prop-types';
  import { Box, Tab, Tabs, Typography, TextField, Button, IconButton,  Accordion, AccordionSummary, AccordionDetails, rgbToHex} from '@mui/material';
  import ChevronRightIcon from '@mui/icons-material/ChevronRight';
  import List from '@mui/material/List';
  import ListItem from '@mui/material/ListItem';
  import ListItemText from '@mui/material/ListItemText';
  import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
  import Divider from '@mui/material/Divider';
  import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';
  import Select from '@mui/material/Select';
  import MenuItem from '@mui/material/MenuItem';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
  import './Profile_settings.css';
  // import { red } from '@mui/material/colors';



  function toTitleCase(str) {
  return str.replace(
  /\w\S*/g,
  (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );
  }

  function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
  <div
  role="tabpanel"
  hidden={value !== index}
  id={`vertical-tabpanel-${index}`}
  aria-labelledby={`vertical-tab-${index}`}
  {...other}
  >
  {value === index && (
  <Box className="tabpanel"> 
  <Typography>{children}</Typography>
  </Box>
  )}
  </div>
  );
  }

  TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  };

  function allyProps(index) {
  return {
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`,
  };
  }



  export default function VerticalTabs() {

  const [value, setValue] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [whomToContact, setWhomToContact] = useState('');
  const [contactPersonsName, setContactPersonsName] = useState('');
  const [convenientTimeToCall, setConvenientTimeToCall] = useState('');
  const [comments, setComments] = useState('');
  const [callPreference, setCallPreference] = useState('important-updates');
  const handleChange = (event, newValue) => {
  setValue(newValue);
  };
  const handleCallPreferenceChange = (event) => {
  setCallPreference(event.target.value);
  };

  const [profilePrivacy, setProfilePrivacy] = useState('all');

  const handleProfilePrivacyChange = (event) => {
  setProfilePrivacy(event.target.value);
  };

  const [deactivationPeriod, setDeactivationPeriod] = useState('');


  const handleDeactivationPeriodChange = (event) => {
  setDeactivationPeriod(event.target.value);
  };

  const [primaryNumber, setPrimaryNumber] = useState(''); 


  const handlePrimaryNumberChange = (event) => {
  setPrimaryNumber(event.target.value); }

  const [alternateNumber, setAlternateNumber] = useState(''); 


  const handleAlternateNumberChange = (event) => {
  setAlternateNumber(event.target.value); 
  };

  const handleWhomToContactChange = (event) => {
  setWhomToContact(event.target.value);
  };

  const handleContactPersonsNameChange = (event) => {
  setContactPersonsName(event.target.value);
  };

  const handleConvenientTimeToCallChange = (event) => {
  setConvenientTimeToCall(event.target.value);
  };

  const handleCommentsChange = (event) => {
  setComments(event.target.value);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
  setExpanded(isExpanded ? panel : false);
  };

  const [selectedOption, setSelectedOption] = useState('show-all');

  const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
  };


  return (
  <Box className="settings-container"> 
  <Box className="sidebar"> 
  <Typography variant="h6" className="title" sx={{
  fontSize: '18px', borderBottom:'none' }} > 
  Profile Settings
  </Typography>
  <Tabs
  orientation="vertical"
  value={value}
  onChange={handleChange}
  aria-label="Profile settings options"
  className="tabs"
  TabIndicatorProps={{
  style: {
  display: 'none',
  },
  }}
  sx={{
  paddingLeft:'0px',marginLeft:'0px', border: '1px solid #e0e0e0', '& .MuiTab-root': { color: '#61AADF','&.Mui-selected': {backgroundColor: '#D7EDFC', color: 'black'}, fontSize: '12px'},}}
  >
  <Tab label={toTitleCase("edit e-mail address")} {...allyProps(0)} sx={{justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%', '.MuiTab-wrapper': {justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%'}}} />
  <Tab label="Change Password" {...allyProps(1)} sx={{justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%', '.MuiTab-wrapper': {justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%' }}}/>
  <Tab label="Alerts & Updates" {...allyProps(2)} sx={{justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%', '.MuiTab-wrapper': {justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%' }}}/>
  <Tab label="Call Preferences" {...allyProps(3)} sx={{justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%', '.MuiTab-wrapper': {justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%' }}}/>
  <Tab label="Privacy" {...allyProps(4)} sx={{justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%', '.MuiTab-wrapper': {justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%' }}}/>
  <Tab label="Profile Settings" {...allyProps(5)} sx={{justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%', '.MuiTab-wrapper': {justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%' }}}/>
  <Tab label="Deactivate Profile" {...allyProps(6)} sx={{justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%', '.MuiTab-wrapper': {justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%' }}}/>
  <Tab label="Delete Profile" {...allyProps(7)} sx={{justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%', '.MuiTab-wrapper': {justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%' }}}/>
  <Tab label="Logout " {...allyProps(10)} sx={{justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%', '.MuiTab-wrapper': {justifyContent: 'flex-start',textAlign: 'left',alignItems: 'flex-start',width: '100%' }}}/>
  </Tabs>


  </Box>
  <Box sx={{ flexGrow: 1, p: 3, borderLeft: 'none',   marginTop:'70px', paddingTop:'0px', marginLeft:'5px'  }}>

  <TabPanel value={value} index={0}>
  <Typography variant="h6" component="div" sx={{
  paddingBottom: '16px',
  marginBottom: '16px',
  borderBottom: '2px dashed #DDDDDD', 
  }}>
  Edit e-mail Address
  </Typography>
  <Typography sx={{ mt: 2, mb: 2 }}>
  A valid e-mail will be used to send you partner search mailers, member to member communication mailers and special offers.
  </Typography>

  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>

  <TextField
  id="email"
  defaultValue="sushrutha739@gmail.com"
  variant="outlined"
  margin="normal"

  />

  <Button
  variant="contained"
  sx={{
  backgroundColor: '#FFA500', 
  color: 'white', 
  fontWeight: 'bold',
  '&:hover': {
  backgroundColor: '#cc8400', 

  },
  mr: 1, 
  }}
  >
  Save
  </Button>
  <Button
  variant="contained"
  sx={{
  backgroundColor: '#808080',
  color: 'white', 
  fontWeight: 'bold',
  '&:hover': {
  backgroundColor: '#666666', 

  },
  }}
  >
  Reset
  </Button>
  </Box>
  </TabPanel>
  <TabPanel value={value} index={1}>
  <Typography variant="h6" className="heading">
  Change Password
  </Typography>
  <Typography className="subheading">
  Your password must have a minimum of 6 characters. We recommend you choose an alphanumeric password. E.g.: Matri123
  </Typography>
  <div className="password-field-group">
  <Box className="password-field">
  <Typography className="password-label">Enter Current Password</Typography>
  <TextField
  id="current-password"
  type="password"
  autoComplete="current-password"
  variant="outlined"
  fullWidth
  />
  </Box>
  <Box className="password-field">
  <Typography className="password-label">Enter New Password</Typography>
  <TextField
  id="new-password"
  type="password"
  autoComplete="new-password"
  variant="outlined"
  fullWidth
  />
  </Box>
  <Box className="password-field">
  <Typography className="password-label">Confirm Password</Typography>
  <TextField
  id="confirm-password"
  type="password"
  autoComplete="new-password"
  variant="outlined"
  fullWidth
  />
  </Box>
  </div>
  <Box className="change-password-button-container">
  <Button variant="contained" className="change-password-button">
  Change Password
  </Button>
  </Box>
  </TabPanel>
  <TabPanel value={value} index={2}>
  <Typography variant="h6" className="heading">
  Alerts & Updates
  </Typography>
  <List>
  <ListItem>
  <ListItemText primary="E-Mail" secondary="Choose what updates you receive on your e-mail" />
  <ListItemSecondaryAction>
  <IconButton edge="end">
  <ChevronRightIcon />
  </IconButton>
  </ListItemSecondaryAction>
  </ListItem>
  <Divider />
  <ListItem>
  <ListItemText primary="SMS" secondary="Choose what updates you get via SMS" />
  <ListItemSecondaryAction>
  <IconButton edge="end">
  <ChevronRightIcon />
  </IconButton>
  </ListItemSecondaryAction>
  </ListItem>
  </List>
  </TabPanel>
  <TabPanel value={value} index={3}>

  <Typography variant="h6" component="div" sx={{
  paddingBottom: '16px',
  marginBottom: '16px',
  borderBottom: '2px dashed #DDDDDD',
  }}>
  Call Preferences
  </Typography>
  <FormControl component="fieldset">
  <FormLabel component="legend">Let us know when we can call you:</FormLabel>
  <RadioGroup
  aria-label="call-preferences"
  name="call-preferences"
  value={callPreference}
  onChange={handleCallPreferenceChange}
  >

  <FormControlLabel value="important-updates" control={<Radio />} label="Call when there are important updates/offers" />
  <FormControlLabel value="1-month" control={<Radio />} label="Call after 1 month" />
  <FormControlLabel value="3-months" control={<Radio />} label="Call after 3 months" />
  <FormControlLabel value="6-months" control={<Radio />} label="Call after 6 months" />
  <FormControlLabel value="never" control={<Radio />} label="Never" />
  </RadioGroup>
  </FormControl>
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
  <Button variant="contained" color="primary" sx={{backgroundColor: '#FFA500', 
  color: 'white',
  '&:hover': {
  backgroundColor: '#cc8400', 
  },
  textTransform: 'none'
  }}>
  Submit
  </Button> 
  </Box>
  </TabPanel>

  <TabPanel value={value} index={4}>
  <div style={{border: '1px solid #e0e0e0'}}> 
  <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">

  <p style={{color:'black'}}>Verified Contact <p style={{color:'gray'}}>Change / Edit your mobile number and verify it.</p> </p>

  </AccordionSummary>
  <AccordionDetails>
  <div className='Verified_contact'>
  <p>Given below are your contact details. In case, your mobile number has changed, please verify your mobile number to continue using our services. Profiles without verified mobile numbers cannot be part of our site anymore.</p>
  <p>BharatMatrimony is the world's only matrimony site to have 100% mobile verified profiles.</p>
  <div className="contact-details" >
  <div className="section">
  <h3 style={{backgroundColor: "rgb(238, 238, 238)",padding: "10px"}}>Contact Details</h3>
  <div className='contact-Number'> <h3>Contact Number</h3>
  <div className="input-field">
  <label htmlFor="country">Country*</label>
  <select id="country">
  {/* <option value="+1">+1</option> */}
  </select>
  </div>
  <div className="input-field">
  <label htmlFor="primary-number">Primary Mobile Number*</label>
  <input 
  type="text" 
  id="primary-number" 
  value={"551-339-2719"} 
  onChange={handlePrimaryNumberChange}/>
  </div>
  <div className="input-field">
  <label htmlFor="alternate-number">Alternate Number</label>
  <button type="button" style={{ color: 'blue', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>Edit</button>

  </div>
  <div className="button-group" style={{
  display: 'flex',
  justifyContent: 'center',
  gap: '10px', 
  }}>
  <button type="button" style={{ backgroundColor: '#FFA500', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px',  cursor: 'pointer', fontWeight: 'bold'}}>Save</button>
  <button type="button" style={{ backgroundColor: '#C0C0C0',  color: 'white', border: 'none',padding: '10px 20px', borderRadius: '5px', cursor: 'pointer',fontWeight: 'bold'}}>Cancel</button>
  </div>


  <div className='contact-preferences' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
  <h3>Contact Preferences</h3>
  <button type="button" style={{ color: 'blue', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}>Edit</button>
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
  <div style={{ display: 'flex', marginBottom: '5px' }}>
  <span style={{ width: '300px' }}>Whom to contact </span> <span>: Not Specified</span>
  </div>
  <div style={{ display: 'flex', marginBottom: '5px' }}>
  <span style={{ width: '300px' }}>Contact person's name</span> <span>: Not Specified</span>
  </div>
  <div style={{ display: 'flex', marginBottom: '5px' }}>
  <span style={{ width: '300px' }}>Convenient time to call </span> <span>: Not Specified</span>
  </div>
  <div style={{ display: 'flex', marginBottom: '5px' }}>
  <span style={{ width: '300px' }}>Comments </span> <span>: Not Specified</span>
  </div>
  </div>

  <p>By verifying your mobile number, members can contact you through mobile.</p>
  </div>

  </div>
  </div>
  </div>



  </AccordionDetails>
  </Accordion>


  <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
  <p style={{color:'black'}}>Mobile Privacy<p style={{color:'gray'}}>Control who can view your mobile number.</p> </p>
  </AccordionSummary>
  <AccordionDetails>
  <div className="privacy-settings">
  <div className="option">
  <input
  type="radio"
  id="show-to-all"
  name="privacy"
  value="show-all"
  checked={selectedOption === 'show-all'}
  onChange={handleOptionChange}
  />
  <label htmlFor="show-to-all">Show mobile number to paid members</label>
  <span className="recommended">Recommended for better response</span>
  <div className="description"><FontAwesomeIcon icon={faChevronRight} style={{color:'black'}}/>   Paid members can reach you directly or through SMS</div>
  </div>

  <div className="option">
  <input
  type="radio"
  id="hide-number"
  name="privacy"
  value="hide-number"
  checked={selectedOption === 'hide-number'}
  onChange={handleOptionChange}
  />
  <label htmlFor="hide-number">Show mobile number only to paid members from my community</label>
  <div className="description"><FontAwesomeIcon icon={faChevronRight} style={{color:'black'}}/>   Paid members from your community can reach you directly or through SMS</div>
  </div>

  <div className="option">
  <input
  type="radio"
  id="show-to-all"
  name="privacy"
  value="show-all"
  checked={selectedOption === 'hide-number'}
  onChange={handleOptionChange}
  />
  <label htmlFor="show-to-all">Show mobile number only to paid members whom I had contacted / responded </label>
  <div className="description"> <FontAwesomeIcon icon={faChevronRight} style={{color:'black'}}/>   Paid members whom you have contacted / responded can reach you directly or through SMS</div>
  </div>

  <div className="option">
  <input
  type="radio"
  id="hide-number"
  name="privacy"
  value="hide-number"
  checked={selectedOption === 'hide-number'}
  onChange={handleOptionChange}
  />
  <label htmlFor="hide-number">Hide my mobile number</label>
  <div className="description"><FontAwesomeIcon icon={faChevronRight} style={{color:'black'}}/>   Your mobile number will be hidden, however you can receive SMS from other paid members</div>
  </div>
  </div>

  </AccordionDetails>
  </Accordion>

  <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
  <p style={{color:'black'}}>Mobile Alerts<p style={{color:'gray'}}>Choose if you want to receive Notifications through SMS.</p> </p>
  </AccordionSummary>
  <AccordionDetails>
  <div className="sms-notifications">
  <p>You will get SMS notifications to 5513392719, when:</p>
  <ul>
  <li>You receive a new message</li>
  <li>You get an interest</li>
  <li>You get a reply for your message</li>
  <li>Your interest gets accepted</li>
  <li>Member requests you to add Photo</li>
  <li>Member sends you a reminder for Interest</li>

  </ul>
  <p className="note">
  * Members using our app will be notified through instant push notifications instead of SMS.
  </p>
  <p>
  As a member, you have the benefit of receiving mobile alerts. We recommend you to keep your mobile alerts on all the time for instant notifications. You may choose to turn off the alerts
  </p>
  <p className="small">
  * Sent only to members registered with Indian Mobile number<br />
  * To turn off App notifications go to BharatMatrimony App settings
  </p>
  </div>
  </AccordionDetails>
  </Accordion>
  </div>
  </TabPanel>



  <TabPanel value={value} index={5}>
  <Typography variant="h6" sx={{ paddingBottom: '16px', marginBottom: '16px', borderBottom: '2px dashed #DDDDDD' }}>
  Your Profile Privacy has been set as "Show my Profile to all including visitors"
  </Typography>
  <FormControl component="fieldset">
  <RadioGroup
  aria-label="profile-privacy"
  name="profile-privacy"
  value={profilePrivacy}
  onChange={handleProfilePrivacyChange}
  >
  <FormControlLabel 
  value="all"
  control={<Radio />} 
  label={
  <span>
  Show my Profile to all including visitors. 
  <span className="recommended">Recommended</span>
  </span>
  }
  />
  <FormControlLabel 
  value="membersOnly"
  control={<Radio />} 
  label="Show my Profile to registered members only."
  />

  <Divider className="custom-divider" />
  <FormControlLabel 
  value="shortlistedOnly"
  control={<Radio />} 
  label="Let others know that I shortlisted their profile."
  />

  </RadioGroup>
  </FormControl>
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
  <Button
  variant="contained"
  sx={{
  backgroundColor: '#FFA500', 
  '&:hover': {
  backgroundColor: '#cc8400' 
  },
  color: 'white',
  textTransform: 'none'
  }}
  >
  Submit
  </Button>
  </Box>
  </TabPanel>



  <TabPanel value={value} index={6}>
  <div style={{marginLeft: "50px", marginTop:"0px", paddingTop: "0px"}}>
  <Box sx={{ borderBottom: '1px dashed #DDDDDD', paddingBottom: '15px', marginBottom:'15px' }}>
  <Typography variant="h6">
  Deactivate Profile
  </Typography>
  </Box>
  <Typography >
  You can temporarily deactivate your profile if you do not want to delete it. On deactivation, your profile will be hidden from our members and you will not be able to contact any member until you activate.
  </Typography>
  <Typography sx={{ mb: 2, fontWeight: 'bold' }}>
  Your profile status is currently active. If you would like to change your status, please select Deactivate Now.
  </Typography>
  <Typography sx={{ mb: 2 }}>
  Select the number of days/months you would like to keep your profile deactivated.
  </Typography>

  <Select
  displayEmpty
  value={deactivationPeriod}
  onChange={handleDeactivationPeriodChange}
  inputProps={{ 'aria-label': 'Without label' }}
  sx={{ mb: 2 }}
  >
  <MenuItem value="" disabled>
  --Select Days--
  </MenuItem>
  
  <MenuItem value="15days">15 days</MenuItem>
  <MenuItem value="1month">1 month</MenuItem>
  <MenuItem value="2months">2 months</MenuItem>
  <MenuItem value="3months">3 months</MenuItem>

  </Select>
  <Typography color="textSecondary" sx={{ mb: 2 }}>
  NOTE: Your profile will be activated after the selected time period elapses. E.G. If you select 15 days as the time period, your profile will be deactivated for 15 days and will be automatically activated on the 16th day. You will receive a mailer in this regard.
  </Typography>
  <Button
  variant="contained"
  color="primary"
  sx={{ backgroundColor: '#FFA500', '&:hover': { backgroundColor: '#cc8400' } }}
  >
  Deactivate Now
  </Button>
  <Typography color="textSecondary" sx={{ mt: 2 }}>
  Note: Once you deactivate your profile you will not be able to contact any member either through Express Interest, Personalised Messages or Chat and your profile details will also not be visible to members.
  </Typography>
  </div>
</TabPanel>



  <TabPanel value={value} index={7}>
  <Box sx={{ borderBottom: '1px dashed #DDDDDD', pb: 2, mb: 3 }}>
  <Typography variant="h6">
  Delete Profile
  </Typography>
  </Box>
  <Typography sx={{ mb: 2 }}>
  Please choose a reason for profile deletion.
  </Typography>
  <Typography color="textSecondary" sx={{ mb: 2 }}>
  NOTE: If you delete your profile, it cannot be restored.
  </Typography>
  <FormControl component="fieldset">
  <RadioGroup
  row 
  aria-label="delete-profile-reason"
  name="delete-profile-reason"
  >
  <FormControlLabel value="marriage-fixed" control={<Radio />} label="MARRIAGE FIXED" />
  <FormControlLabel value="married" control={<Radio />} label="MARRIED" />
  <FormControlLabel value="other-reasons" control={<Radio />} label="OTHER REASONS" />
  </RadioGroup>
  </FormControl>
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
  <Button
  variant="contained"
  color="primary"
  sx={{ backgroundColor: '#FFA500', '&:hover': { backgroundColor: '#cc8400' } }}
  >
  Delete Profile
  </Button>
  </Box>
  </TabPanel>
  </Box>
  </Box>


  );
  }
