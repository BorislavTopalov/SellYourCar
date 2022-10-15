import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< Updated upstream
import LogoLink from './headerContent/logo/logo';
import LoginLink from './headerContent/loginLink/loginLink';
import Registerlink from './headerContent/registerLink/registerlink';
import EditAd from './headerContent/editAd/editAdBtn';
import AddNewAd from './headerContent/addNewAd/addNewAd';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroupLink from './headerContent/buttonsGroupLinks/buttonsGroupLinks';
=======
import Login from './Login';
import Register from "./Register";
import { useState, useEffect } from 'react';
>>>>>>> Stashed changes

function App() {

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

  useEffect(() => {
    // console.log(users);
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])

  return (
    <div className="App">
      <header className='headerContent'>
        <div className='headerContentUp'>
          <div>
            <LogoLink />
          </div>
          <div>
            <LoginLink />  | <Registerlink />
          </div>
          <div className='headerButtons'>
            <EditAd />
            <AddNewAd />
          </div>
        </div>


        <ButtonGroupLink />


      </header>
      <div className='pageContent'>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<div className='home'>"HomePage"</div>} />
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Register users={users} setUsers={setUsers}/>} />
            <Route path='profile' element={<div className='profile'>"ProfilePage"</div>} />
            <Route path='addNew' element={<div className='addNew'>"AddNewPage"</div>} />
            <Route path='addPictures' element={<div className='addPictures'>"AddPictures"</div>} />
            <Route path='publication' element={<div className='publication'>"Publication"</div>} />
            <Route path='showingNewAd' element={<div className='showingTheNew'>"ShowingTheNewAd"</div>} />
            <Route path='detailSearching' element={<div className='detailSearch'>"DetailSearching"</div>} />
            <Route path='allResults' element={<div className='allResults'>"AllResults"</div>} />
            <Route path='showTheChosenAd' element={<div className='showTheChosenAd'>"ShowTheChosenAd"</div>} />
          </Routes>
        </BrowserRouter>
      </div>

      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;
