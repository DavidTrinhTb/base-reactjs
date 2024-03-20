import React, { useEffect, useState } from 'react';

interface WindowWithEthereum extends Window {
  ethereum?: any;
}

const ConnectWalletButton: React.FC = () => {
  const [networkError, setNetworkError] = useState<boolean>(false);
  const { ethereum }: WindowWithEthereum = window;

  useEffect(() => {
    const checkNetwork = () => {
      if (ethereum.networkVersion !== '56') {
        // "56" là mã mạng của BSC
        setNetworkError(true);
      } else {
        setNetworkError(false);
      }
    };

    // Kiểm tra mạng khi component được tải
    checkNetwork();

    // Đăng ký sự kiện để kiểm tra mạng khi người dùng chuyển mạng
    ethereum.on('chainChanged', checkNetwork);

    // Hủy đăng ký sự kiện khi component bị hủy
    return () => {
      ethereum.off('chainChanged', checkNetwork);
    };
  }, []);

  const switchToBSC = async () => {
    try {
      await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x38', // Mã mạng BSC
            chainName: 'Binance Smart Chain',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'bnb',
              decimals: 18,
            },
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
            blockExplorerUrls: ['https://bscscan.com/'],
          },
        ],
      });
      setNetworkError(false);
    } catch (error) {
      console.error('Failed to switch network:', error);
      alert('Failed to switch network. Please check if MetaMask is installed and unlocked.');
    }
  };

  const connectWallet = async () => {
    if (ethereum) {
      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        console.error('Failed to connect wallet:', error);
        alert('Failed to connect wallet. Please check if MetaMask is installed and unlocked.');
      }
    } else {
      alert('MetaMask extension not detected. Please install MetaMask to use this feature.');
    }
  };

  return (
    <div>
      {networkError ? (
        <div>
          <p style={{ color: 'red' }}>Please switch to Binance Smart Chain network.</p>
          <button onClick={switchToBSC}>Switch to BSC</button>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default ConnectWalletButton;
