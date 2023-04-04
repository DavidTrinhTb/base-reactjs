import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { rootReducer } from './reducers';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const PERSIST_KEY_ADMIN = 'root_admin';

const persistConfig = {
  key: PERSIST_KEY_ADMIN,
  whitelist: ['auth'],
  storage: storage,
};

const initStore = (initialState = {}) => {
  const pReducer = persistReducer(persistConfig, rootReducer);
  const middleWares = [thunk];
  const enhancer = composeWithDevTools(applyMiddleware(...middleWares));
  const store = createStore(pReducer, initialState, enhancer);
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};

export default initStore;
