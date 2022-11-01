import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogoLink from './components/headerContent/logo/logo';
import LoginLink from './components/headerContent/loginLink/loginLink';
import Registerlink from './components/headerContent/registerLink/registerlink';
import EditAd from './components/headerContent/editAd/editAdBtn';
import AddNewAd from './components/headerContent/addNewAd/addNewAd';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroupLink from './components/headerContent/buttonsGroupLinks/buttonsGroupLinks';
import Login from './pages/loginAndRegister/Login'
import Register from "./pages/loginAndRegister/Register";
import { useEffect } from 'react';
import FooterCategoriesLinks from './components/footerContent/footerLinksCategory/footerCategoriesLinks';
import FooterHelpLinks from './components/footerContent/footerContacts/footerContactsContent';
import Logout from './components/Logout';
import GeneralTerms from './pages/generalTerms/generalTerms';
import CategoryIcons from './pages/homeContent/homeIconsCategory/categoryIcons';
import HomeSearchTable from './pages/homeContent/homeSearchTable/homeSearchTable';
import AdvertisementTariffs from './pages/advertisementTariffs/advertisementTariffs';
import Help from './pages/help/help';
import DetailedSearch from './pages/detailedSearch/DetailedSearch';
import DetailsChoosing from './pages/addNewAd/detailsChoosing';
import ProfilePage from './pages/profilPage/profilPageWithActiveAds/profilePageContent';
import InactiveAdsPage from './pages/profilPage/inactiveAdsPage/inactiveAdsPage';
import SettingsPage from './pages/profilPage/settignsPage/settingsPage';
import FavroriteAdsPage from './pages/profilPage/favoriteAdsPage/favoriteAdsPage';
import { useSelector, useDispatch } from "react-redux";
import { changeSelectedOption } from "./store/options";
import ShowAllAds from './pages/allResultsPage/allResultsContent';
import Contacts from './pages/contacts/contacts';
import DetailedPage from './pages/detailedPage/detailedPage';
import { addFilter } from './store/filters';
import {changeMyAds} from "./store/users";

function App() {

  // const totalAds = useSelector(state => state.totalAds)
  const addedAds = useSelector(state => state.addedAds);
  const users = useSelector(state => state.users);
  const activeUser = useSelector(state => state.activeUser);
  const options = useSelector(state => state.options);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSelectedOption(options.mainCategory))
    dispatch(addFilter({
      name: "mainCategory",
      value: options.mainCategory
    }))
  }, [options.mainCategory, dispatch])
  
  // useEffect(() => {
  //   dispatch(addNewAd(newAds))
  // }, [newAds])

  useEffect(() => {

    dispatch(changeMyAds({
        index: users.findIndex(user => user.email === activeUser.email),
        active: activeUser.active,
        inactive: activeUser.inactive
    }))
}, [activeUser, dispatch, users])

  useEffect(() => {
    localStorage.setItem("mobile-added-ads", JSON.stringify(addedAds));
    localStorage.setItem('mobile-active-user', JSON.stringify(activeUser));
    localStorage.setItem('mobile-users', JSON.stringify(users));
  }, [users, activeUser, addedAds])

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
              {/* <EditAd /> */}
              <AddNewAd />
            </div>
          </div>
          <ButtonGroupLink />
        </header>
        <div className='pageContent'>

          <Routes>
            <Route path="home" element={
              <>
                <CategoryIcons />
                <HomeSearchTable />
              </>
            } />
             <Route path="home/:value" element={
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
            <Route path='detail-searching' element={<DetailedSearch />} />
            <Route path='all-results' element={<ShowAllAds />} />
            <Route path="all-results/:id" element={<DetailedPage />} />
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
