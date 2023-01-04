import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import RootReducer from '../reducers';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['long', 'user'],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
let store = createStore(persistedReducer, {}, compose(applyMiddleware(thunk)));

let persistor = persistStore(store);
export {store, persistor};