import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store_Reducer } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store_Reducer}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);