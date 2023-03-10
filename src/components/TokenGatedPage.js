import { useEffect, useMemo, useState } from 'react';
import Header from './Header';
import Title from './Title';
import Button from './Button';
import { Network, Alchemy } from 'alchemy-sdk';
import { useSSX } from '@spruceid/ssx-react';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useSigner } from 'wagmi';
import TwitterVerification from './TwitterVerification';
import { TwitterProvider } from '../providers/Twitter';

const ENS_CONTRACT = '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85';

const alchemyConfig = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(alchemyConfig);

const TokenGatedContent = () => {
  const [ownEnsName, setOwnEnsName] = useState(false);
  const { ssx } = useSSX();
  const { openConnectModal } = useConnectModal();
  const [loading, setLoading] = useState(false);
  const { data: provider } = useSigner();

  useEffect(() => {
    if (ssx && loading) {
      /* Sign-in with SSX whenever the button is pressed */
      ssx
        .signIn()
        .then(() => {
          alchemy.nft.getNftsForOwner(ssx?.address()).then(nfts => {
            const ownENS =
              nfts.ownedNfts.filter(
                ({ contract }) => contract.address === ENS_CONTRACT
              )?.length > 0;
            setOwnEnsName(ownENS);
            setLoading(false);
          });
        })
        .catch(err => {
          console.error(err);
          setOwnEnsName(false);
          setLoading(false);
        });
    }
  }, [ssx, loading]);

  useEffect(() => {
    if (!provider) {
      setOwnEnsName(false);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [provider]);

  const handleClick = () => {
    if (openConnectModal) {
      openConnectModal();
    }
  };

  const gatedContent = useMemo(() => {
    return (
      <>
        You own an ENS name. Please log into twitter.
      </>
    );
  }, []);

  return (
    <div className="App">
      <Header ownEnsName={ownEnsName} />
      <Title />
      <div className="Content">
        <div className="Content-container">
          {!openConnectModal && provider && !loading ? (
            ownEnsName ? (
              <TwitterProvider>
                <TwitterVerification  />
              </TwitterProvider>
            ) : (
              <> No ENS name found.</>
            )
          ) : (
            <>
              <Button onClick={handleClick}>SIGN-IN WITH ETHEREUM</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenGatedContent;
