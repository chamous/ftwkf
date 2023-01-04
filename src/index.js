import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StateProvider } from './services/StateProvider';
import reducer, { initialState } from './services/reducer';
import App from './App';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root'),
);
