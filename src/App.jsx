import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from './routes';
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
      
    </Provider>
  );
}

export default App;
