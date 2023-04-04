import '@ant-design/flowchart/dist/index.css';
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
import './index.scss';
import initStore from './store';

BigNumber.config({
  ROUNDING_MODE: BigNumber.ROUND_DOWN,
  EXPONENTIAL_AT: [-50, 50],
});

const App: React.FC = () => {
  const { store, persistor } = initStore();

  return (
    <PersistGate persistor={persistor} loading={null}>
      <Provider store={store}>
        <ToastContainer />
        <LayoutComponent />
      </Provider>
    </PersistGate>
  );
};

export default App;
