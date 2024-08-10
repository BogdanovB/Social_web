import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import './index.css';


let renderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} /> {/*{dispatch} это функция которую я импортировал из state, которая добавляет пост. делаю bind потому что addPost не вызывается сейяас а прокидывается дальше */}
    </React.StrictMode>
  );
};


renderEntireTree(store.getState());


//как ждый раз когда subscribe срабатывает, когда ма узнаем что state изменился, нам нужно у store заново запросить этот state
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
