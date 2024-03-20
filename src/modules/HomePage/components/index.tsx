import React, { useEffect, useState } from 'react';

import ConnectWalletButton from 'components/Button/ConnectWalletButton';

interface WindowWithEthereum extends Window {
  ethereum?: any;
}

const HomePageContainer: React.FC = () => {
  const [connectedAccount, setConnectedAccount] = useState<string>('');
  const [networkId, setNetworkId] = useState<string>('');
  const { ethereum }: WindowWithEthereum = window;

  const getWalletInfo = async () => {
    if (ethereum) {
      try {
        // Lấy địa chỉ tài khoản đang được kết nối
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setConnectedAccount(accounts[0]);
        }

        // Lấy mã mạng đang được kết nối
        const network = await ethereum.request({ method: 'net_version' });
        setNetworkId(network);
      } catch (error) {
        console.error('Failed to get wallet info:', error);
      }
    }
  };

  useEffect(() => {
    getWalletInfo();
  }, []);

  const disconnectWallet = async () => {
    if (ethereum && ethereum.close) {
      try {
        console.log('here');
        await ethereum.close();
        setConnectedAccount('');
      } catch (error) {
        console.error('Failed to disconnect wallet:', error);
        alert('Failed to disconnect wallet.');
      }
    } else {
      console.warn('MetaMask extension close method not available.');
    }
  };

  return (
    <React.Fragment>
      {connectedAccount ? (
        <div>
          <h2>Wallet Information</h2>
          <p>Connected Account: {connectedAccount}</p>
          <p>Network ID: {networkId}</p>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </div>
      ) : (
        <ConnectWalletButton />
      )}
    </React.Fragment>
  );
};

export default HomePageContainer;
