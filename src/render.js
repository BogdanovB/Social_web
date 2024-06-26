import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText} from './redux/state';


export let renderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} /> {/*{addPost} это функция которую я импортировал из state, которая добавляет пост*/}
    </React.StrictMode>
  );
};
