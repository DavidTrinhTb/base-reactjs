import 'antd/dist/antd.css';
import BigNumber from 'bignumber.js';
import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import 'src/assets/scss/variable.scss';
import 'src/assets/scss/_themes.scss';
import './App.scss';
import LayoutComponent from './components/01.layout';
import { AuthProvider } from './contexts/auth';
import initStore from './store';
import './index.scss';

BigNumber.config({
  ROUNDING_MODE: BigNumber.ROUND_DOWN,
  EXPONENTIAL_AT: [-50, 50],
});

const App: React.FC = () => {
  const { store, persistor } = initStore();

  return (
    <PersistGate persistor={persistor} loading={null}>
      <AuthProvider>
        <Provider store={store}>
          <ToastContainer />
          <LayoutComponent />
        </Provider>
      </AuthProvider>
    </PersistGate>
  );
};

export default App;
