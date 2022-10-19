import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LogoLink from './headerContent/logo/logo';
import LoginLink from './headerContent/loginLink/loginLink';
import Registerlink from './headerContent/registerLink/registerlink';
import EditAd from './headerContent/editAd/editAdBtn';
import AddNewAd from './headerContent/addNewAd/addNewAd';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroupLink from './headerContent/buttonsGroupLinks/buttonsGroupLinks';
import Login from './login and register/Login';
import Register from "./login and register/Register";
import { useState, useEffect } from 'react';
import FooterCategoriesLinks from './footerContent/footerContentUp/footerCategoriesLinks';
import FooterHelpLinks from './footerContent/footerContentMiddle/footerContactsContent';
import Logout from './logout/Logout';
import GeneralTerms from './generalTerms/generalTerms';
import CategoryIcons from './homeContent/homeTopIcons/categoryIcons';
import HomeSearchTable from './homeContent/homeContentMiddle/homeSearchTable';
import AdvertisementTariffs from './advertisementTariffs/advertisementTariffs';
import Help from './help/help';


function App() {

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [activeUser, setActiveUser] = useState(JSON.parse(localStorage.getItem('activeUser')) || null);

  useEffect(() => {
    localStorage.setItem('activeUser', JSON.stringify(activeUser));
    localStorage.setItem('users', JSON.stringify(users));
  }, [users, activeUser])

  return (
    <div className="App">
      <BrowserRouter>
        <header className='headerContent'>
          <div className='headerContentUp'>
            <div>
              <LogoLink />
            </div>
            {activeUser ?
              <div>
                <div>{activeUser.email}</div>
                <Logout setActiveUser={setActiveUser} />
              </div>
              :
              <div>
                <LoginLink />  | <Registerlink />
              </div>}
            <div className='headerButtons'>
              <EditAd activeUser={activeUser} />
              <AddNewAd activeUser={activeUser} />
            </div>
          </div>
          <ButtonGroupLink activeUser={activeUser} />
        </header>
        <div className='pageContent'>

          <Routes>
            <Route path='home' element={
              <>
                <CategoryIcons />
                <HomeSearchTable />
              </>
            } />
            <Route path='/' element={<>
              <CategoryIcons />
              <HomeSearchTable />
            </>} />
            <Route path='login' element={<Login users={users} activeUser={activeUser} setActiveUser={setActiveUser} />} />
            <Route path='register' element={<Register users={users} setUsers={setUsers} />} />
            <Route path='profile' element={<div className='profile'>"ProfilePage"</div>} />
            <Route path='addNew' element={<div className='addNew'>"AddNewPage"</div>} />
            <Route path='addPictures' element={<div className='addPictures'>"AddPictures"</div>} />
            <Route path='publication' element={<div className='publication'>"Publication"</div>} />
            <Route path='showingNewAd' element={<div className='showingTheNew'>"ShowingTheNewAd"</div>} />
            <Route path='detailSearching' element={<div className='detailSearch'>"DetailSearching"</div>} />
            <Route path='allResults' element={<div className='allResults'>"AllResults"</div>} />
            <Route path='showTheChosenAd' element={<div className='showTheChosenAd'>"ShowTheChosenAd"</div>} />
            <Route path='contacts' element={<div className='contacts'>"Contacts"</div>} />
            <Route path='advertisement' element={<AdvertisementTariffs />} />
            <Route path='help' element={<Help />} />
            <Route path='generalTerms' element={<GeneralTerms />} />
            <Route path='*' element={<div>404</div>} />
          </Routes>

        </div>

        <footer className='footer'>
          <FooterCategoriesLinks />
          <FooterHelpLinks />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
