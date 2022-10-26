import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogoLink from './headerContent/logo/logo';
import LoginLink from './headerContent/loginLink/loginLink';
import Registerlink from './headerContent/registerLink/registerlink';
import EditAd from './headerContent/editAd/editAdBtn';
import AddNewAd from './headerContent/addNewAd/addNewAd';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroupLink from './headerContent/buttonsGroupLinks/buttonsGroupLinks';
import Login from './pages/login and register/Login'
import Register from "./pages/login and register/Register";
import { useEffect } from 'react';
import FooterCategoriesLinks from './footerContent/footerContentUp/footerCategoriesLinks';
import FooterHelpLinks from './footerContent/footerContentMiddle/footerContactsContent';
import Logout from './components/Logout';
import GeneralTerms from './pages/generalTerms/generalTerms';
import CategoryIcons from './pages/homeContent/homeTopIcons/categoryIcons';
import HomeSearchTable from './pages/homeContent/homeContentMiddle/homeSearchTable';
import AdvertisementTariffs from './pages/advertisementTariffs/advertisementTariffs';
import Help from './pages/help/help';
import DetailedSearch from './pages/detailedSearch/DetailedSearch';
import DetailsChoosing from './pages/addNewAd/detailsChoosing/detailsChoosing';
import AddPhotoNewAd from './pages/addNewAd/addPhoto/addPhotoNewAd';
import ProfilePage from './pages/profilPage/profilPageWithActiveAds/profilePageContent';
import InactiveAdsPage from './pages/profilPage/inactiveAdsPage/inactiveAdsPage';
import SettingsPage from './pages/profilPage/settignsPage/settingsPage';
import FavroriteAdsPage from './pages/profilPage/favoriteAdsPage/favoriteAdsPage';
import { useSelector, useDispatch } from "react-redux";
import { changeSelectedOption } from "./redux/options";
import ShowAllAds from './pages/allResultsPage/allResultsContent';
import Contacts from './pages/contacts/contacts';

function App() {

  const users = useSelector(state => state.users);
  const activeUser = useSelector(state => state.activeUser);
  const options = useSelector(state => state.options);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSelectedOption(options.mainCategory))
  }, [options.mainCategory, dispatch])

  useEffect(() => {
    localStorage.setItem('mobile-active-user', JSON.stringify(activeUser));
    localStorage.setItem('mobile-users', JSON.stringify(users));
  }, [users, activeUser])

  return (
    <div className="App">
      <BrowserRouter>
        <header className='headerContent'>
          <div className='headerContentUp'>
            <div>
              <LogoLink />
            </div>
            {activeUser.email ?
              <div>
                <div>{activeUser.email}</div>
                <Logout />
              </div>
              :
              <div>
                <LoginLink />  | <Registerlink />
              </div>}
            <div className='headerButtons'>
              <EditAd />
              <AddNewAd />
            </div>
          </div>
          <ButtonGroupLink />
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
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='inactive-ads' element={<InactiveAdsPage />} />
            <Route path='favorite-ads' element={<FavroriteAdsPage />} />
            <Route path='settings' element={<SettingsPage />} />
            <Route path='add-new' element={<DetailsChoosing />} />
            <Route path='add-pictures' element={<AddPhotoNewAd />} />
            <Route path='detail-searching' element={<DetailedSearch />} />
            <Route path='all-results' element={<ShowAllAds />} />
            <Route path='show-the-chosenAd' element={<div className='showTheChosenAd'>"ShowTheChosenAd"</div>} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='advertisement' element={<AdvertisementTariffs />} />
            <Route path='help' element={<Help />} />
            <Route path='general-terms' element={<GeneralTerms />} />
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
