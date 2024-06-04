import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings1 from './components/Settings1/Settings1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (


    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <BrowserRouter>
          <Routes>
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings1' element={<Settings1 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;