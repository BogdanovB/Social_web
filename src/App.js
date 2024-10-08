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
import state, { addPost } from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {

  return (
    <BrowserRouter> 
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer store = {props.store} />} />

            <Route path='/profile' element={<Profile store = {props.store} /> }/>


            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings1' element={<Settings1 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
