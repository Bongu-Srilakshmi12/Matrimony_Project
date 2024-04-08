import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import EditProfile from './pages/Profile/EditProfiles';
import Muitabs from './pages/tabs/Muitabs';
import SuccessStories from './pages/SuccessStories/SuccessStories';
import Search from './components/Search/Search';
import Mailbox from './components/Mailbox/Mailbox';
import MatchesPage from './pages/MatchesPage/MatchesPage';
import Verify from './components/Verify/Verify';
import Safematrimoney from './pages/Safematrimony/Safematrimoney';
import Userdetails from './components/Userdetails/Userdetails';
import CustomizedAccordions from './pages/faq/FAQ';
import BasicTabs from './pages/help/Help';
import EditPreferences from './pages/preferences/sidebar/Sidebar';
import VerticalTabs from './pages/profilesettings/Profile_settings';
import CardWithImageOverlay from './pages/Uploads/Uploads';
import PricingCard from './pages/Premium/Premium';
import Packages from './pages/Packages/Packages';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='matches' element={<MatchesPage/>}/>
        <Route path='matches/userdetails' element={<Userdetails/>}/>
        <Route path='mailbox' element={<Mailbox/>}></Route>
        <Route path='mailbox/userdetails' element={<Userdetails/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='editProfile' element={<EditProfile/>}>
        </Route>
        <Route path='editprofile/uploads' element={<CardWithImageOverlay/>}/>
        <Route path='editPreferences' element={<EditPreferences/>}/>
        <Route path='genHoroscope' element={<Muitabs/>}/>
        <Route path='verifyProfile' element={<Verify/>}/>
        <Route path='settings' element={<VerticalTabs/>}/>
        <Route path='successStories' element={<SuccessStories/>}/>
        <Route path='safeMatrimony' element={<Safematrimoney/>}/>
        <Route path='/userdetails' element={<Userdetails/>}/>
        <Route path='/Help' element={<BasicTabs/>}/>
        <Route path='/Faq' element={<CustomizedAccordions/>}/>
        {/* <Route path='/premium' element={<PricingCard/>}/> 
        <Route path='/premium/packages' element={<Packages/>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>  
    </div>
  );
}

export default App;
