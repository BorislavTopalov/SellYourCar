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
import DetailedSearch from './detailedSearch/DetailedSearch';
import CategoryOptions from './data/categoryOptions';
import RegionAndTownOptions from './data/regionAndTownOptions';
import DetailsChoosing from './addNewAd/detailsChoosing/detailsChoosing';
import AddPhotoNewAd from './addNewAd/addPhoto/addPhotoNewAd';


function App() {

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [activeUser, setActiveUser] = useState(JSON.parse(localStorage.getItem('activeUser')) || null);
  const [selectedOption, setSelectedOption] = useState(CategoryOptions().categorieOptions[0]);
  const [make, setMake] = useState(CategoryOptions().categorieOptions[0].make);
  const [model, setModel] = useState(CategoryOptions().categorieOptions[0].make[0].model);
  const [town, setTown] = useState(RegionAndTownOptions().regionAndTownOptions[0].town);
  const [mainCategory, setMainCategory] = useState(CategoryOptions().categorieOptions[0].value);

  function handleMainCategory(e) {
    setMake(CategoryOptions().categorieOptions.find((el) => el.value === e.target.value).make);
    setMainCategory(e.target.value);
    console.log(e.target.name);
  }
  function handleIconCategory(e) {
    setMake(CategoryOptions().categorieOptions.find((el) => el.value === e.target.name).make);
    setMainCategory(e.target.name);
    console.log(e.target.name);
  }
  useEffect(() => {
    setSelectedOption(mainCategory);
  }, [mainCategory])

  useEffect(() => {
    setModel(make[0].model);
  }, [make])

  function handleMakeCategory(e) {
    setModel(make.find((el) => el.value === e.target.value).model);
  }

  function handleChangeRegion(e) {
    setTown(RegionAndTownOptions().regionAndTownOptions.find((el) => el.value === e.target.value).town);
  }

  function handleInputPrice(e) {
    Number(e.target.value);
  }

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
                <CategoryIcons onClick={handleIconCategory} />
                <HomeSearchTable
                  handleMain={handleMainCategory}
                  handleMake={handleMakeCategory}
                  handleRegion={handleChangeRegion}
                  handlePrice={handleInputPrice}
                  make={make}
                  model={model}
                  town={town}
                  mainCategory={mainCategory}
                  selectedOption={selectedOption}
                />
              </>
            } />
            <Route path='/' element={<>
              <CategoryIcons onClick={handleIconCategory} />
              <HomeSearchTable
                handleMain={handleMainCategory}
                handleMake={handleMakeCategory}
                handleRegion={handleChangeRegion}
                handlePrice={handleInputPrice}
                make={make}
                model={model}
                town={town}
                mainCategory={mainCategory}
                selectedOption={selectedOption}
              />
            </>} />
            <Route path='login' element={<Login users={users} activeUser={activeUser} setActiveUser={setActiveUser} />} />
            <Route path='register' element={<Register users={users} setUsers={setUsers} />} />
            <Route path='profile' element={<div className='profile'>"ProfilePage"</div>} />
            <Route path='addNew' element={
              <DetailsChoosing
                handleMain={handleMainCategory}
                handleMake={handleMakeCategory}
                handleRegion={handleChangeRegion}
                handlePrice={handleInputPrice}
                make={make}
                model={model}
                town={town}
                mainCategory={mainCategory}
                selectedOption={selectedOption}
              />} />
            <Route path='addPictures' element={<AddPhotoNewAd/>} />
            <Route path='publication' element={<div className='publication'>"Publication"</div>} />
            <Route path='showingNewAd' element={<div className='showingTheNew'>"ShowingTheNewAd"</div>} />
            <Route path='detailSearching' element={
              <DetailedSearch
                handleMain={handleMainCategory}
                handleMake={handleMakeCategory}
                handleRegion={handleChangeRegion}
                handlePrice={handleInputPrice}
                make={make}
                model={model}
                town={town}
                mainCategory={mainCategory}
                selectedOption={selectedOption}
              />} />
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
          <FooterCategoriesLinks onClick={handleMainCategory} />
          <FooterHelpLinks />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
