import { createContext, useCallback, useContext } from 'react';
import { useEffect, useState } from 'react';
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from '@web3auth/base';
import { Web3AuthNoModal } from '@web3auth/no-modal';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';
import { WalletConnectV1Adapter } from '@web3auth/wallet-connect-v1-adapter';
import RPC from '../web3RPC.js'; // for using web3.js
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

export const twitterUserInfoState = atom({
  key: 'TwitterUserInfo',
  default: null
});

const TwitterContext = createContext({});

const clientId = process.env.NEXT_PUBLIC_WEB3_AUTH_KEY; // get from https://dashboard.web3auth.io
const TwitterProvider = ({ children }) => {
  const setUserInfo = useSetRecoilState(twitterUserInfoState);
  const userInfo = useRecoilValue(twitterUserInfoState);
  const [web3auth, setWeb3auth] = useState(null);
  const [provider, setProvider] = useState(null);
  
  const getUserInfo = useCallback(async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    const user = await web3auth.getUserInfo();
    return user;
  }, [web3auth]);


  useEffect(() => {
    (async () => {
      try {
        const web3auth = new Web3AuthNoModal({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
          },
          web3AuthNetwork: 'testnet',
        });

        setWeb3auth(web3auth);

        const openloginAdapter = new OpenloginAdapter();
        web3auth.configureAdapter(openloginAdapter);

        const adapter = new WalletConnectV1Adapter();
        web3auth.configureAdapter(adapter);

        await web3auth.init();
        if (web3auth.provider) {
          setProvider(web3auth.provider);

          const userInfo = await getUserInfo();
          setUserInfo(userInfo);
        }
      } catch (error) {
        // console.error(error);
      }
    })();
  }, []);

  const authenticateUser = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    const idToken = await web3auth.authenticateUser();
    console.log(idToken);
  };


  const logout = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    await web3auth.logout();
    setProvider(null);
    setUserInfo(null);
  };

  const getChainId = async () => {
    if (!provider) {
      console.log('provider not initialized yet');
      return;
    }
    const rpc = new RPC(provider);
    const chainId = await rpc.getChainId();
    console.log(chainId);
  };

  const addChain = async () => {
    if (!provider) {
      console.log('provider not initialized yet');
      return;
    }
    const newChain = {
      chainId: '0x5',
      displayName: 'Goerli',
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      tickerName: 'Goerli',
      ticker: 'ETH',
      decimals: 18,
      rpcTarget: 'https://rpc.ankr.com/eth_goerli',
      blockExplorer: 'https://goerli.etherscan.io',
    };
    await web3auth?.addChain(newChain);
    console.log('New Chain Added');
  };

  const switchChain = async () => {
    if (!provider) {
      console.log('provider not initialized yet');
      return;
    }
    await web3auth?.switchChain({ chainId: '0x5' });
    console.log('Chain Switched');
  };

  const getAccounts = async () => {
    if (!provider) {
      console.log('provider not initialized yet');
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    console.log(address);
  };

  const getBalance = async () => {
    if (!provider) {
      console.log('provider not initialized yet');
      return;
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    console.log(balance);
  };

  const sendTransaction = async () => {
    if (!provider) {
      console.log('provider not initialized yet');
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendTransaction();
    console.log(receipt);
  };

  const signMessage = async () => {
    if (!provider) {
      console.log('provider not initialized yet');
      return;
    }
    const rpc = new RPC(provider);
    const text = `Verifying `;
    const signedMessage = await rpc.signMessage({ text });
    console.log(signedMessage);
    console.log(signedMessage);
  };

  const login = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    const web3authProvider = await web3auth.connectTo(
      WALLET_ADAPTERS.OPENLOGIN,
      {
        loginProvider: 'twitter',
      }
    );
    setProvider(web3authProvider);
  };

  return (
    <TwitterContext.Provider
      value={{
        login,
        authenticateUser,
        getUserInfo,
        logout,
        getChainId,
        addChain,
        switchChain,
        getAccounts,
        getBalance,
        sendTransaction,
        signMessage,
        provider,
        userInfo,
      }}>
      {children}
    </TwitterContext.Provider>
  );
};

const useTwitter = () => useContext(TwitterContext);

export { TwitterProvider, useTwitter };
