import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className='header'>

      </header>
      <div className='pageContent'>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<div className='home'>"HomePage"</div>} />
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
