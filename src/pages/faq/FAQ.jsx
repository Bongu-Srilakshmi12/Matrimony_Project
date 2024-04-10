import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './faq.css'; 

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
  <div>
      <div className="faq-container">
    <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
      <p className="faq-description">
      <p className="line1">Need help in your partner search?<br /></p>
        Please go through our frequently asked questions. If you still can't find your answers,
        please feel free to contact us 24 x 7 or call us. You can also write to us at 
        <a href=" mailto:helpdesk@Matchmate.com" className="faq-email"> helpdesk@Matchmate.com</a>
      </p>
      <div>
      <div className="column_container">
      <div className="faq-container1">
      
      <h3 className="heading">REGISTRATION</h3>
     
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{ color: "#0EA2E1" }}> How to register?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>Login to <a href="www.Matchmate.com" className="faq-email">www.Matchmate.com</a> <br/>
          You can choose to register either as a free member or as a paid member.</p><br/>
          <div className='registration'>Free registration<br/></div>
          <p>Provide name, age, gender, e-mail ID.<br/>
          Click on Register link and you will have to enter on a couple of pages the details of the person intending to get married.<br/>
          After you submit your information, your profile will be automatically created and you shall be given a 'Matrimony ID' generated for future references and login purposes.</p><br/>
          <div className='registration'>Paid registration<br/></div>
          <p>Provide name, age, gender, e-mail ID.<br/>
          Click on Register link and you will have to enter details of the person intending to get married.<br/>
          Choose package for the required period.<br/>
          Click on Join Now link and you will find a page on which you could enter the details of the person intending to get married.<br/>
          You shall have a 'Matrimony ID' generated for further references and login purposes.</p><br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is profile validation?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          All the profiles are validated before inclusion in the database. Express Validation of profile will take just 1 Hour Turn Around Time. Our support team meticulously validates each and every profile carefully on specific criterion before it is added to our database. E-mail will be sent to you once the profile is validated and added.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography style={{ color: "#0EA2E1" }}>On what criteria is a profile validated?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Almost every word counts. We categorically ignore profiles that are submitted by underage persons, and profiles that contain abusive content. We reject profiles that contain invalid data such as added for fun/looking for friendship/not related to marriage. We try and maintain the highest quality in the database we serve to ensure only members who are serious about marriage make use of the service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
        <Typography style={{ color: "#0EA2E1" }}>Single registration - multiple domains</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='Question'>Can I fill a single form and get registered in all the regional sites?</div>
            <div className='Answer'>Just fill in a single registration form and you will appear across all Matchmate domains. You can also search and contact prospects from other domains.</div>
            <div className='Question'>Can I register on behalf of someone else?</div>
            <div className='Answer'>Yes, you can register on behalf of someone else.</div>
            <div className='Question'>Can I register for my sister/brother and myself with the same Matrimony ID?</div>
            <div className='Answer'>A Matrimony ID identifies each person uniquely. Please register separate profiles for you and your sibling for individual partner searches.</div>
            <div className='Question'>Can I register for my friend, relative or sibling?</div>
            <div className='Answer'>Yes! In fact we have a large number of profiles being registered by parents, siblings, relatives, etc.</div>
            <div className='Question'>Can I register profiles for my sibling and myself with the same e-mail ID?</div>
            <div className='Answer'>Yes, you can! In a single language domain, a maximum of two profiles (one male and one female) can have the same e-mail ID.</div>
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
        <Typography style={{ color: "#0EA2E1" }}>Profile description - what to enter?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='Question'>What should I enter in the profile description field?</div>
            <div className='Answer'>Your profile description is where you reveal yourself - your personality, your likes and dislikes, your educational and family background, career and personal interests, and expectations about your partner. Try to give a clear self-description and a complete picture of what you expect. A good description will always fetch instant responses. Look at the sample profiles below, which are clear, brief and have all the important details in a well-organised manner.</div>
            <div className='Question'>Can I view sample profiles?</div>
            <div className='Answer'>I am a friendly, fun-loving person. I have a pleasing personality. I hold a bachelors degree in Dental Surgery. I am working as an associate doctor in a private clinic for the past 3 years in Chennai. My hobbies are listening to music (any kind of music, whichever is soothing) and travelling.<p>We have an open-minded, religious family. Father is a retired Asst. Engineer from U.P state government and mother is a simple, loving and caring housewife. I have two brothers, both elder and married. The first is an Engineer in Indian Air Force and the second is employed in a reputed glass factory.</p>
            My ideal partner will be someone who is intelligent, caring, broad-minded and has a good sense of humour. I believe that love, trust, understanding and commitment are the four pillars of any relation and this is what I am looking for in my partner.</div>
                  </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
        <Typography style={{ color: "#0EA2E1" }}>What all information from my profile will be displayed to other members?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Free members can view only some of your details. They cannot view your mobile number, horoscope, etc. Paid members can view all your details.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
        <Typography style={{ color: "#0EA2E1" }}>Can I use the same e-mail ID for multiple registrations?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes. You can create a maximum of two profiles using the same e-mail ID.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
        <Typography style={{ color: "#0EA2E1" }}>What is Mobile Number Verification?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Matchmate is the world's only site to display 100% verified mobile numbers. So, unless you verify your mobile number, you cannot use our service. The verification process is done free of cost. Only paid members can view your mobile number and you will also get to know the members who have viewed your mobile number.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography style={{ color: "#0EA2E1" }}>How to verify your mobile number?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Login to your account. In the My Home page, click on Edit link in the top navigation bar. In the Edit page, under Contact Details, click on Verify link to verify your mobile number.
          <p><strong>Steps to verify your mobile number:</strong><br/>
          Call 0-814-499-8877 from the number you have provided on our site</p>
          Press 2 for phone verification
          <p>You will be asked to enter your 6 digit IVR PIN</p>
          Enter your PIN and the mobile verification process is complete.
</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
        <Typography style={{ color: "#0EA2E1" }}>How to hide mobile number?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Login to your account. In the My Home page, click on Edit Profile section. Under Edit Contact Details, click on edit mobile number link. In the mobile verification page, click on Hide Mobile Number link to hide your mobile number.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
        <Typography style={{ color: "#0EA2E1" }}>Who viewed my mobile number?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Login to your account. In the My Home page, under Views, click on the link "members who viewed my mobile number."</Typography>
        </AccordionDetails>
      </Accordion>

      <h3 className="heading">SEARCH PROFILES</h3>
     
      <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
        <AccordionSummary aria-controls="panel20d-content" id="panel20d-header">
          <Typography style={{ color: "#0EA2E1" }}> What is Quick Search?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Quick search enables search of profiles through gender, domain, caste, age, and profiles with photo.       </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
        <AccordionSummary aria-controls="panel21d-content" id="panel21d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is Regular Search?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This is a general search based on age, height, marital status, regional sites, religion, caste/division, subcaste, citizenship, country living in, education and 'show results posted on'. Login using your Matrimony/e-mail ID and Password. Select based on options provided.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
        <AccordionSummary aria-controls="panel22d-content" id="panel22d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is Advanced Search?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This is a detailed search and will give you better results. Options on mother tongue, physical status, location, horoscope and lifestyle besides age, height, marital status, regional sites, religion, caste/division, subcaste, citizenship, country living in, education and 'show results posted on' will be displayed. You can save up to three saved searches that will be displayed on the right hand corner. Login using your Matrimony/e-mail ID and Password. Click on Advanced Search link.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel23'} onChange={handleChange('panel23')}>
        <AccordionSummary aria-controls="panel23d-content" id="panel23d-header">
          <Typography style={{ color: "#0EA2E1" }}>Search by Member ID</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Enter the Matrimony ID of the member whose profile you would like to see. Click on View Profile link.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel24'} onChange={handleChange('panel24')}>
        <AccordionSummary aria-controls="panel24d-content" id="panel24d-header">
          <Typography style={{ color: "#0EA2E1" }}>Search by Members Online</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Search for members based on your preference and those who are currently online.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel25'} onChange={handleChange('panel25')}>
        <AccordionSummary aria-controls="panel25d-content" id="panel25d-header">
          <Typography style={{ color: "#0EA2E1" }}>Search by Members Online</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Search for members based on your preference and those who are currently online.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel26'} onChange={handleChange('panel26')}>
        <AccordionSummary aria-controls="panel26d-content" id="panel26d-header">
          <Typography style={{ color: "#0EA2E1" }}>Keywords Search</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This search will get results based on keywords found in the profile description of members.Example: Software Engineer, Brahmin Iyer, Loves pets, Cricket...</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel27'} onChange={handleChange('panel27')}>
        <AccordionSummary aria-controls="panel27d-content" id="panel27d-header">
          <Typography style={{ color: "#0EA2E1" }}>Can I save my Search criteria so that I don't have to set it every time?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes! You can save up to 3 search criteria that can be used later. You can edit the search criteria and the saved search criteria can be deleted.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel27'} onChange={handleChange('panel27')}>
        <AccordionSummary aria-controls="panel27d-content" id="panel27d-header">
          <Typography style={{ color: "#0EA2E1" }}>Search results</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          When your search options are not broad enough then your search results will say so. To get better search results reset the criteria in your profile by: Click on Search link. Reset the basic search criteria. Click on Save Search link.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel28'} onChange={handleChange('panel28')}>
        <AccordionSummary aria-controls="panel28d-content" id="panel28d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is partner preference?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Partner Preference is a feature that helps you define your ideal spouse and set your suitability criteria. You will be intimated by e-mail everyday about new profiles matching your criteria. With this feature you would receive information about members suiting your expectations regularly.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel29'} onChange={handleChange('panel29')}>
        <AccordionSummary aria-controls="panel29d-content" id="panel29d-header">
          <Typography style={{ color: "#0EA2E1" }}>How do I view a particular profile?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can search and view a particular profile by entering the Member ID in the 'Search by ID' option.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel29'} onChange={handleChange('panel29')}>
        <AccordionSummary aria-controls="panel29d-content" id="panel29d-header">
          <Typography style={{ color: "#0EA2E1" }}>I get the error "No matching records found" while searching for the profiles.Why is that so?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Please check your search criteria when you receive this message. If you are searching for a particular subcaste, try rephrasing your spellings. We suggest you to use partial names or try all the possible spellings in the subcaste field, for example: Brahmin, Bramin, Iyer, etc. to get profiles of a particular subcaste.<br/>If you have used date options in the search, please check the dates entered. For Example, in the "When Posted" option ensure that you have not entered a future date by mistake.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel30'} onChange={handleChange('panel30')}>
        <AccordionSummary aria-controls="panel30d-content" id="panel30d-header">
          <Typography style={{ color: "#0EA2E1" }}>Short-list profiles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='Question'>How do I short-list profiles?</div>
            <div className='Answer'>Login using your 'Matrimony/e-mail ID' and 'Password'.<br/>Select "Search" option, enter the ID of the member in 'By Member Matrimony ID' option.<br/>Select the "Short-list" option, add comments and click the "Submit" button.<br/>The profile will be added to your list of short-listed profiles.<br/>You can add a comment while short-listing the profiles.<br/>The profiles will be displayed with an image along with your comments during the search and view operations</div>
            <div className='Question'>How do I view/delete short-listed profiles?</div>
            <div className='Answer'>Login using your Matrimony ID/E-mail ID and Password. In the My Home page, under Lists, click on the members I have short-listed link to view the profiles you have short-listed.<br/>To delete profiles from your shortlist, select the profile or profiles you'd like to delete and click on the Delete link.</div>
            <div className='Question'>How do I ignore/forward/print profiles?</div>
            <div className='Answer'>Login using your 'Matrimony/e-mail ID' and 'Password.'<br/>Go to My Matches or do a search.<br/>Opt for viewing full profile.<br/>You will find options to ignore/forward/print profile.</div>
            </Typography>
        </AccordionDetails>
      </Accordion>
      <h3 className="heading">MEMBERSHIPS</h3>
     <Accordion expanded={expanded === 'panel58'} onChange={handleChange('panel58')}>
        <AccordionSummary aria-controls="panel58d-content" id="panel58d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is Matchmate Personalised Matchmaking services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You are provided with a Personal Matchmaker, who will do an expert search, identify, short-list and contact prospective life partners on your behalf to help you find your life partner. Your Personal Matchmaker also tracks responses, monitors matching profiles and keeps you informed on developments related to matchmaking on a regular basis. Your Personal Matchmaker will understand all your needs in your life partner search. There are Personal Matchmakers based in India and their services are also extended to members across the globe.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel59'} onChange={handleChange('panel59')}>
        <AccordionSummary aria-controls="panel59d-content" id="panel59d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is the difference between free membership & paid (Gold/Diamond/Platinum/Assisted) membership?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Benefits of free member<br/>Send an automated message to another member with 'Express Interest'.<br/>
          Respond to personalised messages and chat from paid members.<br/><br/>Benefits of paid member<br/>You can send personalised e-mails to members you like instead of sending Express Interest.<br/>Matchmate has an instant messenger where you can initiate chat with prospects you are interested in and have a conversation instantly.<br/>You can protect your photo, video and horoscope with a password.<br/>You can view the contact details of the referees.<br/>You can view the contact number of members you like.<br/>You can contact any one from millions of members across the 15 regional portals.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel60'} onChange={handleChange('panel60')}>
        <AccordionSummary aria-controls="panel60d-content" id="panel60d-header">
          <Typography style={{ color: "#0EA2E1" }}>What are the packages available for your paid services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="memberships">
              <h4>MEMBERSHIPS</h4>
              <span>Please find rates below the packages available for our paid services:</span>
              <p>All rates inclusive of 18% service tax.</p>
                <table class="gold-package-table">
                <tr>
                  <th colspan="6">For Gold Package</th>
                </tr>
                <tr>
                  <td>3 Months</td>
                  <td>Rs. 4200 or US$ 97or AED 320 or UK £ 63 or Euro € 90or MYR 300</td>
                </tr>
                <tr>
                  <td>6 Months</td>
                  <td>Rs. 7400 or US$ 170 or AED 560 or UK £ 110 or Euro € 158 or MYR 525</td>
                </tr>
              </table>

              <table class="gold-package-table">
                <tr>
                  <th colspan="6">For Diamond</th>
                </tr>
                <tr>
                  <td>3 Months</td>
                  <td>Rs. 5000 or US$ 118 or AED 390 or UK £ 77 or Euro € 110 or MYR 365</td>
                </tr>
                <tr>
                  <td>6 Months</td>
                  <td>Rs. 8400 or US$ 207 or AED 685 or UK £ 135 or Euro € 193 or MYR 640</td>
                </tr>
              </table>

              <table class="gold-package-table">
                <tr>
                  <th colspan="6">For Platinum Package</th>
                </tr>
                <tr>
                  <td>3 Months</td>
                  <td>Rs. 6200 or US$ 148 or AED 490 or UK £ 96 or Euro € 138 or MYR 460</td>
                </tr>
                <tr>
                  <td>6 Months</td>
                  <td>Rs. 9900 or US$ 259 or AED 860 or UK £ 168 or Euro € 241 or MYR 805</td>
                </tr>
              </table>

              <table class="gold-package-table">
                <tr>
                  <th colspan="6">For Till-U-MarrySM Package</th>
                </tr>
                <tr>
                  <td>Regular</td>
                  <td>Rs. 9900 or US$ 370 or AED 1165 or UK £ 220 or Euro € 330 or MYR 1050</td>
                </tr>
                <tr>
                  <td>Advantage</td>
                  <td>Rs. 12900. (Not available for NRI customers)</td>
                </tr>
              </table>

              <table class="gold-package-table">
                <tr>
                  <th colspan="6">For Assisted Service Package</th>
                </tr>
                <tr>
                  <td>3 Months</td>
                  <td>Rs. 19000 or US$ 500 or AED 1950 or UK £ 610 or Euro € 605 or MYR 1500</td>
                </tr>
                <tr>
                  <td>6 Months</td>
                  <td>Rs. 36000 or US$ 900 or AED 3700 or UK £ 1150 or Euro € 1150 or MYR 2850</td>
                </tr>
              </table>
              </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel61'} onChange={handleChange('panel61')}>
        <AccordionSummary aria-controls="panel61d-content" id="panel61d-header">
          <Typography style={{ color: "#0EA2E1" }}>What are the different modes of payment?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can make online payments through credit card/debit card/net banking, pay at banks, Matchmate offices, Payment Associates and Easy Payment facilities.<br/>Online payment is the easiest, fastest and secured mode of payment. Our payment gateway provider adopts the SSL (Secure Socket Layer) technology, an internationally proven widely accepted technology that ensures highest level of security while transacting on the net, preventing unauthorised access.<br/>You can also send in the payment to any of our offices, located nearest to your place, through cash, cheque or DD/MO. Payments should be sent in the local currency only. We also have a payment collection at doorstep facility in select cities, at no extra charge.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel62'} onChange={handleChange('panel62')}>
        <AccordionSummary aria-controls="panel62d-content" id="panel62d-header">
          <Typography style={{ color: "#0EA2E1" }}>I'm not able to make the online payment with my card even though it's a valid one. Why?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Make sure you are entering the correct credit/debit/net-banking card number and expiry date. If you continue having problems, please call your credit/debit/net-banking issuing bank and make sure your card has sufficient funds.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel63'} onChange={handleChange('panel63')}>
        <AccordionSummary aria-controls="panel63d-content" id="panel63d-header">
          <Typography style={{ color: "#0EA2E1" }}>Is online payment secure?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes! It is secure to make online payments. Our payment gateway provider adopts the SSL (Secured Socket Layer) technology, an internationally proven widely accepted technology. Our payment gateway service providers ensure that your credit card details are kept secure while transacting on the net, preventing unauthorised access.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel64'} onChange={handleChange('panel64')}>
        <AccordionSummary aria-controls="panel64d-content" id="panel64d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is easy payment or doorstep payment?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We now provide quality service right at your doorstep, saving your time, money and energy. Whether you want to add a profile into our Gold/Diamond/Platinum/Assisted Membership category or upgrade your existing 'free' profile to Gold/Diamond/Platinum/Assisted Membership category, we will visit you at your home or office and collect the payment. This service is currently available in selected 112 locations across India. There is no extra charge for using this service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel65'} onChange={handleChange('panel65')}>
        <AccordionSummary aria-controls="panel65d-content" id="panel65d-header">
          <Typography style={{ color: "#0EA2E1" }}>I have made an easy payment request. How long will it take for my request to be processed?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Most easy payment requests are cleared within 48 hours of the requests. Please contact our branch offices if your request is not cleared within 48 hours or contact <a href=" mailto:helpdesk@Matchmate.com" className="faq-email">helpdesk@Matchmate.com</a> with your easy payment request number for us to process your request immediately.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel66'} onChange={handleChange('panel66')}>
        <AccordionSummary aria-controls="panel66d-content" id="panel66d-header">
          <Typography style={{ color: "#0EA2E1" }}>How do I make the payment through post/courier?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can send a cheque/DD/MO along with your Matrimony ID to any of our addresses. Please send cheques in the local currency of the office to which it is sent. <a href=" mailto:helpdesk@Matchmate.com" className="faq-email">Click here for addresses.</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel67'} onChange={handleChange('panel67')}>
        <AccordionSummary aria-controls="panel67d-content" id="panel67d-header">
          <Typography style={{ color: "#0EA2E1" }}>Payments sent to India</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Cheque or DD to be taken in favour of 'Consim Info Pvt Ltd.'<br/>Indian Offices
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel68'} onChange={handleChange('panel68')}>
        <AccordionSummary aria-controls="panel68d-content" id="panel68d-header">
          <Typography style={{ color: "#0EA2E1" }}>How long will it take to upgrade my profile if I have made the payment by Cheque/DD through post or courier?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We will upgrade your profile once we receive your payment. If you have made the payment and your profile is still not upgraded, kindly contact our <a href=" mailto:helpdesk@Matchmate.com" className="faq-email">branch office</a> or send an e-mail to <a href=" mailto:helpdesk@Matchmate.com" className="faq-email">helpdesk@Matchmate.com</a>along with your payment details.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel69'} onChange={handleChange('panel69')}>
        <AccordionSummary aria-controls="panel69d-content" id="panel69d-header">
          <Typography style={{ color: "#0EA2E1" }}>Pay at banks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <strong>Pay at banks - State Bank of India, HDFC Bank & ICICI Bank</strong><br/>Visit any of the State Bank of India or HDFC Bank or ICICI Bank branches across India to make Cash, Cheque / DD payments. After depositing the Cheque / DD, call 0-814-499-8877 with your Cheque / DD details.<br/>Electronic Fund Transfer facility is available through SBI Bank using RTGS/NEFT IFSC Code SBIN0009999, through ICICI BANK using RTGS/NEFT IFSC Code ICIC0000212 and through HDFC BANK using RTGS/NEFT IFSC Code HDFC0000386.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel70'} onChange={handleChange('panel70')}>
        <AccordionSummary aria-controls="panel70d-content" id="panel70d-header">
          <Typography style={{ color: "#0EA2E1" }}>Payment Associates</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We have hundreds of Associates across the country. You can upgrade / renew your membership by making the payment directly to the associates.<br/>The Cheque / DD should be drawn in favour of the Associate. Choose this option and click the "Continue" button to find an Associate nearest to you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>

      <div className="faq-container2">
      
      <h3 className="heading">PROFILE CREATION / MODIFICATION</h3>
     <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary aria-controls="panel12d-content" id="panel12d-header">
          <Typography style={{ color: "#0EA2E1" }}> How do I create a complete profile?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>A quick careful glance of the following topics will help you to include photos, horoscope, voice profile, references, etc. to make your profile complete.</p><br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
        <AccordionSummary aria-controls="panel13d-content" id="panel13d-header">
        <Typography style={{ color: "#0EA2E1" }}>Photos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='Question'>How many photos can I add?</div>
            <div className='Answer'>You can add up to ten photos to your profile.<br/>
            Photo must be a .gif, .jpg format, no larger than 10MB.</div>
            <div className='Question'>How to upload photos?</div>
            <div className='Answer'>Login using your Matrimony ID/E-mail ID and Password.<br/>
            Click on the Edit Profile section.<br/>
            Click on the Add Photo link under Edit My Profile heading.<br/>
            In the Add Photo page, click on the Browse button.<br/>
            Select your photo in jpg/gif format and click Upload Photo.<br/>
            Upload photo by importing them from your Facebook account.<br/>
            Crop your photo as required to show the image appropriately.</div>
            <div className='Question'>How to crop the picture?</div>
            <div className='Answer'>Move the cursor and select the image of your face within the square as much as you wish.<br/>
            Add a caption to the photo. It can have a maximum of 100 characters with spaces.</div>
            <div className='Question'>What are the other ways to add photos?</div>
            <div className='Answer'>E-mail your photo to photo@Matchmate.com indicating your Matrimony ID and Password.<br/>
            Post your photo to any of our offices across the world with your Matrimony ID and Password.<br/>
            We will upload your photo to your profile free of cost.</div>
            <div className='Question'>What is photo validation process?</div>
            <div className='Answer'>Every photo posted on our website involves a manual screening. The turnaround time for validation is 1 hour.<br/>
            Only after the photo is validated it will be available for all members to see.</div>
            <div className='Question'>How do I protect my photo?</div>
            <div className='Answer'>This is an exclusive feature available only to paid members.<br/>
            You can protect your photo with a Password and only those members with whom you share your Password can view your photo.<br/><br/>
            Note: If you forget your Password, you can set a new Password but you cannot retrieve the old one.</div>
            <div className='Question'>How do I unprotect my photo?</div>
            <div className='Answer'>This is an exclusive feature available only to paid members.Click on the Edit Profile section.<br/>
            Click on the Edit Photo link under Enhance My Profile heading.<br/>
            In the Edit Photo page, click on the Unprotect Photo section.<br/>
            Click on the Unprotect Photo button to display your photo to all.</div>
            <div className='Question'>How to delete photos?</div>
            <div className='Answer'>Login using your Matrimony ID/E-mail ID and Password.<br/>
            Click on the Edit Profile section.<br/>
            Click on the Edit Photo link under Enhance My Profile heading.<br/>
            In the Edit Photo page, below the photo you want to delete is a delete link. Click on the delete link to delete the photo.</div>
            <div className='Question'>What is photo security?</div>
            <div className='Answer'>This is a feature by which each photo will have a Matchmate watermark image.<br/>
            This helps to protect the photo and hence the photo cannot be copied or tampered with.</div>
            <div className='Question'>What is request photo?</div>
            <div className='Answer'>This feature helps you to send a request to a member to add his/her photo if he/she has not added one.</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
        <AccordionSummary aria-controls="panel14d-content" id="panel14d-header">
        <Typography style={{ color: "#0EA2E1" }}>Horoscopes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='Question'>How to add a horoscope?</div>
            <div className='Answer'>Login using your Matrimony ID/E-mail ID and Password.<br/>Click on the Edit Profile section.<br/>Click on the Add Horoscope link under Enhance My Profile heading.<br/>Fill up the form to generate your horoscope online or upload your horoscope if you already have a horoscope.<br/>If you're uploading a horoscope make sure the horoscope is in JPG/GIF format. Your horoscope will be validated before it is added to your profile.<br/>If you're generating a horoscope online, please wait for a few minutes as your horoscope will be generated and displayed in a new window. Please make sure you're popup blocker is turned off.</div>
            <div className='Question'>Generate a horoscope</div>
            <div className='Answer'>Login using your Matrimony/e-mail ID and Password.<br/>Click on Add Horoscope link in My Tools section.<br/>Click on Generate Horoscope link.<br/>It will take one minute to generate your horoscope online by completing the form that is provided to you.<br/>You can generate your horoscope online for free in nine different languages (English, Tamil, Telugu, Kannada, Malayalam, Gujarati, Marathi, Hindi, and Bengali) and four formats.</div>
            <div className='Question'>What are the other ways to add horoscopes?</div>
            <div className='Answer'>E-mail your horoscope to <a href=" mailto:helpdesk@Matchmate.com" className="faq-email"> horoscope@Matchmate.com </a> with your Matrimony ID and Password.<br/>Post your horoscope to any of our offices across the world with your Matrimony ID and Password.<br/>We will upload your horoscope to your profile free of cost.</div>
            <div className='Question'>What is horoscope validation?</div>
            <div className='Answer'>Every horoscope posted on our website will go through 24 hours of validation that involves a manual screening.Only after the horoscope is validated will it be available for all members to see</div>
            <div className='Question'>How do I protect my horoscope?</div>
            <div className='Answer'>This is an exclusive feature available only to paid members.<br/>
            You can protect only an uploaded horoscope with a Password and only those members with whom you share your Password can view your horoscope.<br/><br/>
            Note: If you forget your Password, you can set a new Password but you cannot retrieve the old one.</div>
            <div className='Question'>How do I unprotect my horoscope?</div>
            <div className='Answer'>This is an exclusive feature available only to paid members.<br/>
            Click on the Edit Profile section.<br/>
            Click on the Edit Horoscope link under Enhance My Profile heading.<br/>
            In the Edit Horoscope page, click on the Unprotect Horoscope section.<br/>
            Click on the Unprotect Horoscope button to display your horoscope to all.</div>
            <div className='Question'>How to delete horoscope?</div>
            <div className='Answer'>Login using your Matrimony ID/E-mail ID and Password.<br/>
            Click on the Edit Profile section.<br/>
            Click on the Edit Photo link under Enhance My Profile heading.<br/>
            In the Edit horoscope page, click on delete button.</div>
            <div className='Question'>What is request horoscope?</div>
            <div className='Answer'>This feature helps you to send a request to a member to add his/her horoscope if he/she has not added one.</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
        <AccordionSummary aria-controls="panel15d-content" id="panel15d-header">
        <Typography style={{ color: "#0EA2E1" }}>Trust Badge</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='Question'>What is a Trust Badge?</div>
            <div className='Answer'>Trust Badge adds credibility to your profile. Matchmate cross-verifies the documents you upload with the details provided in your profile. This authenticates your profile and activates your Trust Badge. This gives your profile the value it deserves.<br/><br/>
            <a href=" mailto:helpdesk@Matchmate.com" className="faq-email">Get the Trust Badge! Give your profile credibility! Get more responses!</a></div>
            <div className='Question'>What are the types of Trust Badges and how do I get them?</div>
            <div className='Answer'>Get your Trust Badge in few easy clicks. Just upload a copy of the required document and your trust badge is activated.<br/><br/>
            <strong>There are four types of Trust Badges :</strong>
            <ul className="badgeList">
            <li>
              <strong>Identity Badge -</strong> Upload a copy of any of the following documents: Driving License / Passport / PAN Card to activate this badge.
            </li>
            <li>
              <strong>Social Badge -</strong> To activate this badge, please connect your Facebook profile.<br/>
              <em> (NOTE: We will not post anything on your Facebook account)</em>
            </li>
            <li>
              <strong>Professional Badge -</strong> Please upload a copy of your latest education certificate and salary slip or if you are running your own business, the latest electricity or telephone bill issued in your company's name to activate this badge.
            </li>
            <li>
              <strong>Profile Badge -</strong> Please upload a selfie copying the gesture shown to activate this badge. For NRI's, upload a selfie with your location turned on.
            </li>
          </ul>
          <a href=" mailto:helpdesk@Matchmate.com" className="faq-email">Go ahead, get them all! More Badges = More responses from prospects!</a>
            </div>
            <div className='Question'>How is your document validated?</div>
            <div className='Answer'>When you upload a document to activate your Trust Badge, Matchmate will cross verify the details with those provided in your profile. Please be assured that your uploaded document will not be displayed to your prospects. They will only know that you have uploaded a copy of your document.</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
        <AccordionSummary aria-controls="panel16d-content" id="panel16d-header">
        <Typography style={{ color: "#0EA2E1" }}>AstroMatch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='Question'>What is AstroMatch?</div>
            <div className='Answer'>AstroMatch is Real Time Horoscope Matching online with a prospective life partner. You can match your horoscope with anyone you choose to find out if you're compatible as a couple. We are offering this service currently in 6 languages (English, Tamil, Malayalam, Hindi, Kannada and Telugu) and 4 formats (North, South, East Indian and Kerala). AstroMatch has been developed in association with the No. 1 provider of Astrology related software provider (Astro-Vision Futuretech Pvt. Ltd), having 20 years experience in this field. CHITRAPAKSHA AYANAMSA has been used for all the calculations, as it is the most popular and widely used ayanamsa system in India. The astrological calculations may differ in case a different ayanamsa is used.</div>
            <div className='Question'>How do I do an AstroMatch?</div>
            <div className='Answer'>To do an AstroMatch we need to have your place, date and time of birth and that of the person you wish to match. If you and your prospective partner have added your horoscope then you can do an instant match.</div>
            <div className='Question'>I do not have a horoscope. Can I do an AstroMatch?</div>
            <div className='Answer'>No. You must first add your horoscope to do an AstroMatch. You can generate your horoscope for free on our site in 9 different languages.</div>
            <div className='Question'>How can I avail AstroMatch service?</div>
            <div className='Answer'>AstroMatch is a separate paid package. You would need to pay to use this service even if you are a paid member.</div>
            <div className='Question'>What is the maximum number of AstroMatches I can avail?</div>
            <div className='Answer'>The number of AstroMatches you can avail depends on the package you select.</div>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
        <AccordionSummary aria-controls="panel17d-content" id="panel17d-header">
        <Typography style={{ color: "#0EA2E1" }}>Activation/deactivation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='Question'>What is full profile?</div>
            <div className='Answer'>It is the view of your profile as others see it. To take a look at your full profile: Login using your Matrimony/e-mail ID and Password. Click My Profile link.</div>
            <div className='Question'>What is view my profile?</div>
            <div className='Answer'>It is the view of your profile as others see it. To take a look at your full profile: Login using your Matrimony ID/E-mail ID and Password. Click Edit Profile link. In that page, click on View my profile link.</div>
            <div className='Question'>What is edit profile?</div>
            <div className='Answer'>Edit profile is the section of the site where you can make changes and additions to your profile.<br/>To go to Edit Profile, login with your Matrimony ID/E-mail ID. Click on the Edit profile link in the top navigation bar in the My Home section.</div>
            <div className='Question'>What are profile settings?</div>
            <div className='Answer'>Profile settings are that section of the site where you can change password, deactivate profile, delete profile, manage mail alerts and contact filters.<br/>To access profile settings, login with your Matrimony ID/E-mail ID & password<br/>Click on the Edit Profile link in the top navigation of the My Home page.<br/>In the Edit Profile page there is a section head called Profile Settings.</div>
            <div className='Question'>How will I get alerts?</div>
            <div className='Answer'>You will receive alerts from us through e-mail and SMS. If you wish to unsubscribe to any of the alerts, please deselect the alert.</div>
            <div className='Question'>What is mail alert?</div>
            <div className='Answer'>The alerts from us through e-mail are mail alerts. You will get two types of mail alerts - Daily MatchWatch and weekly Photo MatchWatch. Besides those you will also get products and feature promotions. In addition to the above mailers, you will receive e-mail notifications whenever a member sends you an Express Interest or a Personalised Message and also when a member accepts or declines your Express Interest or Personalised Message. The moment you delete your profile from Matchmate you will stop receiving all alerts.</div>
            <div className='Question'>How to Manage Mail alerts?</div>
            <div className='Answer'>Login using your Matrimony ID/E-mail ID and Password.<br/>Click on the Edit Profile link in the top navigation of the My Home section.<br/>In the Edit Profile page Click Manage Mail alerts link. You can select the mail alerts you wish to receive.</div>
            <div className='Question'>What is MatchWatch?</div>
            <div className='Answer'>MatchWatch is a list of the latest members who match your preference, mailed to your inbox of the e-mail ID that you provide in your profile. You can also view an archive of the MatchWatch e-mails in case you have missed or deleted them accidentally.</div>
            <div className='Question'>I am not receiving matches of my choice/preference in my MatchWatch mailers. Can I change the results to my liking?</div>
            <div className='Answer'>MatchWatch is prepared based on your partner preference. You can change your partner preference such that you receive profiles according to your choice.</div>
            <div className='Question'>How can I view the MatchWatch e-mails that I have missed?</div>
            <div className='Answer'>All your MatchWatch e-mails will be stored in the DailyMatchWatch Archive in the My Home section. You can select the date of the MatchWatch e-mail you would like to view.</div>
            <div className='Question'>I am not receiving MatchWatch e-mails in my inbox. How can I subscribe/unsubscribe to my MatchWatch e-mails?</div>
            <div className='Answer'>You can choose to receive Match Watch e-mails in your inbox by clicking on the Edit Profile section in the top navigation bar of the My Home.<br/>In the Edit Profile page, click on the Manage Mail Alerts links under Profile Settings.<br/>Choose the type of mail alerts you would like to receive.</div>
            <div className='Question'>What is Photo MatchWatch?</div>
            <div className='Answer'>These are MatchWatch mailers with only the latest profiles having photos that match your preferences. If you do not add your photo in your profile you will not be listed in Photo MatchWatch mailers sent to other members.</div>
            <div className='Question'>What is MatchWatch Archive?</div>
            <div className='Answer'>MatchWatch Archive contains your MatchWatch e-mails, which you have received in the last 15 days. So just in case you need a recap of your e-mails or you missed out on matching prospects, this feature will help you identify them.</div>
            <div className='Question'>What are privacy settings?</div>
            <div className='Answer'>Privacy settings help you decide who can contact you, or who can view your referees contact details if you've added Matrimony Reference.<br/><br/>To decide who can contact you, use Manage Contact Filters available in the Edit Profile page under Profile Settings.
            Contacts from members who do not match your privacy settings will be stored in the "Filtered Messages or Filtered Interests" folder in My Home page under Match Summary.<br/><br/>To access Reference Privacy Settings, go to Edit Profile in the top navigation of My Home and click on the Edit Reference link.</div>
            <div className='Question'>What is a filter?</div>
            <div className='Answer'>Login using your Matrimony/e-mail ID and Password. Click My Profile link. Click Profile Settings link. With a filter you can choose by whom you want to be contacted. Set a broad preference so that you get good responses while eliminating non-relevant members from contacting you.</div>
            <div className='Question'>What is change Password?</div>
            <div className='Answer'>If you would like to change your login password, you can use this option. To change your password, login using your Matrimony ID/E-mail ID and existing Password.<br/>Click on the Edit Profile link in the top navigation bar of My Home. Under Profile Settings in the Edit Profile page, click on Change Password link.<br/>Enter existing password, new password and confirm password. Your Password must have a minimum of 4 characters and maximum 8 characters. It is better to choose an alphanumeric Password. E.g.: Matri123</div>
            <div className='Question'>What is profile stats?</div>
            <div className='Answer'>Profile stats displays all the references added to your profile.</div>
            <div className='Question'>How to delete profile?</div>
            <div className='Answer'>Log in to your account. On the top right corner of the page, click the Setting icon. From the drop down list click Settings. In Profile Settings, click Delete Profile and enter your profile password to delete your account. Please note that you cannot restore or re-activate your profile once you delete it.</div>
            <div className='Question'>How to deactivate profile?</div>
            <div className='Answer'>Login to your account. In the My Home page, click on the Edit Profile link.<br/>
In the Edit Profile section, under Profile Settings, click on the Deactivate Profile link to deactivate your profile.
This link is provided in case you wish to temporarily put your partner search on hold. On deactivation, your profile will be hidden from our members and you will not be able to contact any member until you activate your profile.</div>
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
        <AccordionSummary aria-controls="panel18d-content" id="panel18d-header">
        <Typography style={{ color: "#0EA2E1" }}>Modify Profile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='Question'>How do I modify my profile?</div>
            <div className='Answer'>Once you are logged in to your account, click on the Settings icon on the top-right of the screen. Select Edit Profile from the menu and make changes to your profile.</div>
            <div className='Question'>How long will it take for the modifications to reflect on my profile?</div>
            <div className='Answer'>The modifications you make go through a validation process before being added to your profile. It will take 24 hours for the changes to be effected in your profile.</div>
            <div className='Question'>Are there any restrictions on modifications?</div>
            <div className='Answer'>Most of the contents of your profile can be modified as often as you wish to do so. However, the member's Age can be edited only once. Certain fields such as Marital Status, Mother Tongue, Religion, Caste and Sub Caste cannot be edited.</div>
            <div className='Question'>What is 'Change Profile Status'?</div>
            <div className='Answer'>Your profile status can either be set as 'Active' or 'Deactivate'. By default, the profile status is 'Active'. Setting the profile status to 'Deactivate' makes your profile invisible to others. But you will be able to login and contact other profiles. Any member can change the status of profile.</div>
            <div className='Question'>Is it possible to restore the deleted profile?</div>
            <div className='Answer'>You cannot restore or reactivate your profile once it is deleted from our database.</div>
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
        <AccordionSummary aria-controls="panel19d-content" id="panel19d-header">
        <Typography style={{ color: "#0EA2E1" }}>What are the DO's and DON'Ts while creating a matrimonial profile?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Here are the Do's and Don'ts while creating your profile to give members the best portrayal of yourself.<br/><br/><strong>Do's</strong><br/>While creating a matrimonial profile, give brief information about yourself in the profile description part. Try your best to touch upon various aspects of your life like:<br/>Your personality (what kind of a person you are, your likes and dislikes).<br/>Your educational and professional background including your achievements.<br/>Your family (how many members, family values - conservative or modern).<br/>Your career plans.<br/>Your expectations from your soul mate.<br/>Add a recent photograph to improve chances of getting responses.<br/>Our repeated suggestion: Profiles with photos have 10 times better chances of getting proposals.<br/><br/><strong>Don'ts</strong><br/>Please do not give a lengthy description. Try to keep your description short and complete and do not get into the minutest details.<br/>Please do not try to display your contact details in your matrimonial profile, except in the space provided for contact details.<br/>Do not include content that is vulgar or racist.<br/>Also see our terms of use/service agreement for more details of what type of content is prohibited on https://www.Matchmate.com<br/>Not conforming to any of the above can lead to your profile being rejected.            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h3 className="heading">LOGIN DETAILS</h3>
     <Accordion expanded={expanded === 'panel31'} onChange={handleChange('panel31')}>
        <AccordionSummary aria-controls="panel31d-content" id="panel31d-header">
          <Typography style={{ color: "#0EA2E1" }}>How do I log in?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Log in from the Home page and enter your Matrimony ID or e-mail ID and password into the respective boxes at the top band and click Login button.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel32'} onChange={handleChange('panel32')}>
        <AccordionSummary aria-controls="panel32d-content" id="panel32d-header">
          <Typography style={{ color: "#0EA2E1" }}>I'm already logged in, but I get a message 'You must login prior to using the matrimonial services'. What should I do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We use cookies to store login information. So, please check whether cookies are enabled in your browser.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel33'} onChange={handleChange('panel33')}>
        <AccordionSummary aria-controls="panel33d-content" id="panel33d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is Matrimony ID?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A Matrimony ID is a unique combination of an alphabet and a six-or seven-digit number (e.g. A123456). To identify you uniquely, a Matrimony ID is assigned to you when you register with us. This Matrimony ID is to be referred in all correspondences with Matchmate.com.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel34'} onChange={handleChange('panel34')}>
        <AccordionSummary aria-controls="panel34d-content" id="panel34d-header">
          <Typography style={{ color: "#0EA2E1" }}>I forgot my Matrimony ID/Password. What should I do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can retrieve your Matrimony ID/Password by clicking on Forgot Password link in home page and enter your E-mail ID. We will send you an e-mail with your 'Matrimony ID' and 'Password' immediately. Your E-mail ID should be the one given in your profile.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel35'} onChange={handleChange('panel35')}>
        <AccordionSummary aria-controls="panel35d-content" id="panel35d-header">
          <Typography style={{ color: "#0EA2E1" }}>How do I change my Password?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can change your Password. Go to <strong>Profile Settings {"<Change Password>"}.</strong><br/>Enter <strong>Current Password,</strong> then <strong>New password</strong> and <strong>Confirm</strong> the New Password.<br/>Then Click on <strong>Change password</strong> button.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel36'} onChange={handleChange('panel36')}>
        <AccordionSummary aria-controls="panel36d-content" id="panel36d-header">
          <Typography style={{ color: "#0EA2E1" }}>Why is the message Invalid Matrimony ID/E-mail ID or Incorrect Password being displayed when I try to login?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You could have received these messages due to any of the below reasons. Please ensure you enter the correct login details.<br/>The Password you have entered might be wrong or you might be having the CAPS LOCK "On". Please check whether the Password is entered in the correct case (Upper or Lower).<br/>Please ensure that there are no spaces in the Matrimony ID typed. For e.g., it should be A123456 not A 1234 56.<br/>The E-mail ID you are using to login must be the same one with which you had registered on the website.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel37'} onChange={handleChange('panel37')}>
        <AccordionSummary aria-controls="panel37d-content" id="panel37d-header">
          <Typography style={{ color: "#0EA2E1" }}>Can I choose my own Matrimony ID?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Every Matrimony ID is unique and is allocated by the system. You cannot choose your own Matrimony ID since it is system generated and cannot be changed under any circumstance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel38'} onChange={handleChange('panel38')}>
        <AccordionSummary aria-controls="panel38d-content" id="panel38d-header">
          <Typography style={{ color: "#0EA2E1" }}>My Home</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='Question'>What are Suitable Matches?</div>
            <div className='Answer'>This is the list of matches that we have found for you. You may like these profiles as they seem suitable as per your profile details.<br/><br/>Yet to be viewed - These are the suitable profiles for you that you have not yet viewed.<br/><br/>Viewed & not contacted - These are the suitable profiles that you have viewed but have not sent the member any communication.</div>
            <div className='Question'>What are Matching Profiles?</div>
            <div className='Answer'>These are the profiles of members shortlisted as potential alliances based on your partner preference criteria.<br/><br/>Members looking for me - These are members whose partner preference criteria match your profile.<br/><br/>Mutual matches - These are members whose partner preference criteria match your profile and your partner preference criteria match their profile. This could well lead to finding the perfect match as you seem to be looking for each other.</div>
            <div className='Question'>What are Personalised Messages?</div>
            <div className='Answer'>These are the e-mail messages that Paid Members can send to prospects expressing their interest for talks of an alliance.<br/><br/>Received<br/>New Messages - These are the Personalised Messages that you have received from members but haven't read.<br/><br/>Awaiting my reply - These are the Personalised Messages from members that you have read but haven't replied to.<br/><br/>Replied messages - These are the Personalised Messages from members that you have replied to.<br/><br/>Messages I've declined - These are the Personalised Messages from members that you have declined.<br/><br/>Filtered messages - These are Personalised Messages from members who do not match your partner preference criteria. These members may not be the ideal partner you are looking for, hence these messages are automatically moved to a filtered inbox as you would like to know of all proposals made by members.<br/><br/>Sent<br/>Replies received - These are Personalised Messages you received from members in reply to the messages you sent them.<br/><br/>Read by members - These are Personalised Messages that you have sent to members that have been read by them but haven't replied to yet.<br/><br/>Unread messages - These are Personalised Messages that you have sent to members that haven't been read by them yet.<br/><br/>Declined messages - These are Personalised Messages that you have sent to members that have been declined by them.</div>
            <div className='Question'>What is Express Interest?</div>
            <div className='Answer'>Express Interest is the template messages that you can send to members whose profiles you like.<br/><br/>Received<br/>New Interests - These are the Express Interest messages that you have received from members but haven't read or replied to.<br/><br/>Interests accepted - These are the Express Interest messages from members that you have accepted.<br/><br/>Interests declined - These are the Express Interest messages from members that you have declined.<br/><br/>Filtered messages - These are Express Interests messages from members who do not match your partner preference criteria. These members may not be the ideal partner you are looking for; hence these messages are automatically moved to a filtered inbox as you would like to know of all proposals made by members.<br/><br/>Sent<br/>Accepted by members - These are Express Interests sent by you that members have accepted.<br/><br/>Reply pending from members - These are Express Interests you have sent to members that haven't been replied to yet.<br/><br/>Declined by members - These are Express Interests you have sent to members that have been declined.</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <h3 className="heading">WAYS TO CONTACT</h3>
     <Accordion expanded={expanded === 'panel39'} onChange={handleChange('panel39')}>
        <AccordionSummary aria-controls="panel39d-content" id="panel39d-header">
          <Typography style={{ color: "#0EA2E1" }}>Express Interest</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='Question'>What is Express Interest?</div>
            <div className='Answer'>'Express Interest' is an exclusive feature that enables you to send automated messages to members absolutely FREE and let them know that you are interested in them.</div>
            <div className='Question'>Is there a limit on the number of Express Interest messages I can send in a day?</div>
            <div className='Answer'>You can send unlimited interests.<br/>*Note: In a span of 12 hours you can send up to 250 interests and up to 500 interests within 24 hours.</div>
            <div className='Question'>How will I know if a member has accepted/declined my interest?</div>
            <div className='Answer'>You will be notified via e-mail when a member accepts/declines your interest. You can also login to your account and select the 'Interests Sent' option under Express Interest to know how many members have accepted/declined your interest.</div>
            <div className='Question'>Will my contact information be revealed to the member I have expressed my interest in?</div>
            <div className='Answer'>No. Only an automated message expressing your interest will be sent to the member without revealing your contact information.</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel40'} onChange={handleChange('panel40')}>
        <AccordionSummary aria-controls="panel40d-content" id="panel40d-header">
          <Typography style={{ color: "#0EA2E1" }}>Personalised Messages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='Question'>How do I send personalised messages to a member who has accepted my interest?</div>
            <div className='Answer'>You can send personalised messages to a member who has accepted your interest by upgrading your membership to a Gold/Diamond/Platinum/Assisted membership.<a href=" mailto:helpdesk@Matchmate.com" className="faq-email">Click here to upgrade your profile to Gold/Diamond/Platinum/Assisted membership now.</a></div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel41'} onChange={handleChange('panel41')}>
        <AccordionSummary aria-controls="panel41d-content" id="panel41d-header">
          <Typography style={{ color: "#0EA2E1" }}>Chat</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='Question'>How do I chat?</div>
            <div className='Answer'>You can chat with other members online only if you are a paid member. Then after login, you can use the "Who's Online" search form to get the members online matching your search criteria. You can go to the member's profile and click on "Chat" link to start chatting.</div>
            <div className='Question'>Can a free member initiate chat?</div>
            <div className='Answer'>No. Only a paid membership enables a member to initiate chat online.</div>
            <div className='Question'>How do I know who is online?</div>
            <div className='Answer'>Click on the Search link in the top navigation bar. Choose Members Online. You can search from the list of members online and chat with them if you are a paid member.<br/>Also while using other search tools, in the search results page, there will be an indication to CHAT with the member if the member is online. You can initiate chat if you are a paid member.</div>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel41'} onChange={handleChange('panel41')}>
        <AccordionSummary aria-controls="panel41d-content" id="panel41d-header">
          <Typography style={{ color: "#0EA2E1" }}>Call / Send SMS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Only paid members can view the verified mobile number of other members and call them. Alternatively, they can also send an SMS. Only one SMS can be sent per member.
            </Typography>
        </AccordionDetails>
      </Accordion>
      <h3 className="heading">MISCELLANEOUS</h3>
     <Accordion expanded={expanded === 'panel42'} onChange={handleChange('panel42')}>
        <AccordionSummary aria-controls="panel42d-content" id="panel42d-header">
          <Typography style={{ color: "#0EA2E1" }}>Can I contact the Referee?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes you can contact the Referee if you are a Paid member, since Referee details are visible only to them. E-mail ID will not be displayed but members can send e-mail to the referee through our system.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel43'} onChange={handleChange('panel43')}>
        <AccordionSummary aria-controls="panel43d-content" id="panel43d-header">
          <Typography style={{ color: "#0EA2E1" }}>How do I contact customer support?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <a href=" mailto:helpdesk@Matchmate.com" className="faq-email">Log into www.Matchmate.com</a><br/>Click 24 x 7 Help link at the top right hand corner.<br/>You can get your queries answered instantly through a chat session with our live helpdesk executives.<br/>You can also call our hotlines : 0-814-499-8877, 24 hrs a day-7 days a week.<br/>Click Contact us link to find out about our worldwide offices and other contact details.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel44'} onChange={handleChange('panel44')}>
        <AccordionSummary aria-controls="panel44d-content" id="panel44d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is 24 x 7 customer care?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Matchmate is eager to help you find your partner at the earliest. Our customer care team will be pleased to assist you anytime you have a query. You can contact our customer care team in one of the following ways:<br/>Helpline numbers - 0-814-499-8877<br/>Chat live - Matchmate.com works round the clock to ensure you get the help needed whenever you need it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel45'} onChange={handleChange('panel45')}>
        <AccordionSummary aria-controls="panel45d-content" id="panel45d-header">
          <Typography style={{ color: "#0EA2E1" }}>Do you provide any dating/friendship services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you are looking for dating/friendship other than matrimony, you are probably looking into the wrong site! Matchmate.com provides only matrimony-related services. Our site only invites people who are looking forward to a serious commitment of getting married.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel46'} onChange={handleChange('panel46')}>
        <AccordionSummary aria-controls="panel46d-content" id="panel46d-header">
          <Typography style={{ color: "#0EA2E1" }}>How do I add my success story?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If your marriage has been arranged through our service and you want to share your success story with us, then <a href=" mailto:helpdesk@Matchmate.com" className="faq-email">Click here </a> to add it onto our site. Your success story is a motivation to us as well as our members. So please do add your story and marriage photograph to our list of success stories.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel47'} onChange={handleChange('panel47')}>
        <AccordionSummary aria-controls="panel47d-content" id="panel47d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is sample description?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It is a personalised description of the prospect in one's own words. A person describes himself or herself in more than 50 characters.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel48'} onChange={handleChange('panel48')}>
        <AccordionSummary aria-controls="panel48d-content" id="panel48d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is "profiles I'm looking for"?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Members whose partner preference matches your profile.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel49'} onChange={handleChange('panel49')}>
        <AccordionSummary aria-controls="panel49d-content" id="panel49d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is "profiles looking for me"?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Members whose profiles match your partner preference.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel50'} onChange={handleChange('panel50')}>
        <AccordionSummary aria-controls="panel50d-content" id="panel50d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is Mutual Match?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Mutual Match gives you a list of members whose partner preference matches your profile and whose profile matches your partner preference.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel51'} onChange={handleChange('panel51')}>
        <AccordionSummary aria-controls="panel51d-content" id="panel51d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is Daily MatchWatch Archive?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Daily MatchWatch Archive contains your MatchWatch e-mails, which you have received in the last 15 days. So just in case you need a recap of your mails or you missed out on matching prospects, this feature will help you identify them.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel52'} onChange={handleChange('panel52')}>
        <AccordionSummary aria-controls="panel52d-content" id="panel52d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is Safety Tips link?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It is a link that is added in the footer of all pages. It is a feature that educates you about your privacy in Matchmate.com. Four options of the Safety Tips link are Privacy Features, Verification Services, General safety Rules and Report Violation. The feature makes you understand how you can have a safe and secure partner search.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel52'} onChange={handleChange('panel52')}>
        <AccordionSummary aria-controls="panel52d-content" id="panel52d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is Auto Renewal?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Auto renewal is a process where your paid account gets automatically renewed on the date of expiry of your account. In Matchmate, auto renewal process is being followed for all the international customers and this auto renewal is done with your consent only.<br/>You will be intimated about this charging, a week before and a link in the intimation mailer will be sent to switch off the auto renewal option.<br/>If you wish to cancel the payment and get a refund you have to use the link available in the payment upgrade confirmation mailer, which will prompt you to log into your account. On providing the login details, the payment will be automatically refunded and your upgrade option will be cancelled.<br/><br/><strong>Note:</strong>To cancel the payment you should not use/should not have used our services.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel53'} onChange={handleChange('panel53')}>
        <AccordionSummary aria-controls="panel53d-content" id="panel53d-header">
          <Typography style={{ color: "#0EA2E1" }}>How to turn off the auto renewal?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Login to your account. In the My Home page, in the top navigation bar, where your payment details are displayed will be a link that says "Details."<br/><br/>Click on the link to view details of your membership. Along with your membership details will be a link to turn OFF your Auto renewal status.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel54'} onChange={handleChange('panel54')}>
        <AccordionSummary aria-controls="panel54d-content" id="panel54d-header">
          <Typography style={{ color: "#0EA2E1" }}>What is Money back guarantee?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You are offered a 100% refund if you do not get any response within 30 days.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel55'} onChange={handleChange('panel55')}>
        <AccordionSummary aria-controls="panel55d-content" id="panel55d-header">
          <Typography style={{ color: "#0EA2E1" }}>When is it possible to give you a 100% refund?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You should have uploaded at least one photo.<br/>You should have got your phone number verified.<br/>You should have contacted a minimum of 10 members.<br/>You have not got a reply to your personalised messages.<br/>Your personalised messages have not been read.<br/>You have not been contacted by other members.<br/>You have not viewed/taken any verified contact numbers.<br/>Others have not viewed/taken your contact number.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel56'} onChange={handleChange('panel56')}>
        <AccordionSummary aria-controls="panel56d-content" id="panel56d-header">
          <Typography style={{ color: "#0EA2E1" }}>Profile Highlighter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='Question'>What is Profile Highlighter?</div>
            <div className='Answer'>Profile Highlighter is a feature you can use to give your profile better visibility.</div>
            <div className='Question'>How does Profile Highlighter improve the visibility of my profile?</div>
            <div className='Answer'>Profile Highlighter features your profile on the 'My Home' page of prospects matching you and also features your profile at the top of search results of members looking for someone like you.</div></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel57'} onChange={handleChange('panel57')}>
        <AccordionSummary aria-controls="panel57d-content" id="panel57d-header">
          <Typography style={{ color: "#0EA2E1" }}>AstroMatch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='Question'>What is AstroMatch?</div>
            <div className='Answer'>AstroMatch is a feature that gives you real time horoscope matching results instantly.</div>
            <div className='Question'>What is the use of AstroMatch?</div>
            <div className='Answer'>As it is a tradition in India to match horoscopes, this feature enables you to check your compatibility with members you like.</div>
            <div className='Question'>How many AstroMatches can I do at a time?</div>
            <div className='Answer'>You can do as many AstroMatches at a time depending on the number of matches available to your profile at that time.</div>
            <div className='Question'>How is the compatibility checked with AstroMatch?</div>
            <div className='Answer'>Partner compatibility is checked based on Birth Stars, Papasamya, Kujadosha and Dasasandhi.</div>
            </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      </div>

      </div>
    </div>
    </div>
    
  );
}

