import {useEffect, useState} from 'react';
import Button from './Button';
import {Network, Alchemy} from 'alchemy-sdk';
import {useSSX} from '@spruceid/ssx-react';
import {useConnectModal} from '@rainbow-me/rainbowkit';
import {useSigner} from 'wagmi';
import TwitterVerification from './TwitterVerification';
import Header from "./layouts/Header";

const ENS_CONTRACT = '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85';

const alchemyConfig = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY, network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(alchemyConfig);

const TokenGatedContent = () => {
    const [ownEnsName, setOwnEnsName] = useState(false);
    const {ssx} = useSSX();
    const {openConnectModal} = useConnectModal();
    const [loading, setLoading] = useState(false);
    const {data: provider} = useSigner();

    useEffect(() => {
        if (ssx && loading) {
            /* Sign-in with SSX whenever the button is pressed */
            ssx
                .signIn()
                .then(() => {
                    alchemy.nft.getNftsForOwner(ssx?.address()).then(nfts => {
                        const ownENS = nfts.ownedNfts.filter(({contract}) => contract.address === ENS_CONTRACT)?.length > 0;
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

    return (<>
            <Header ownEnsName={ownEnsName}/>

            <div className="flex flex-col justify-center items-center my-auto h-24 border-b border-primary">
                <article className="text-xs">
                    {!openConnectModal && provider && !loading ? (ownEnsName ? (<TwitterVerification/>) : (<div className={"flex flex-col items-center justify-items-stretch gap-y-4"}>
                                <div>Please connect a wallet that resolves to an ENS domain</div>
                                <Button onClick={handleClick}>Connect wallet</Button></div>)) : (
                        <Button onClick={handleClick}>Connect wallet</Button>)}
                </article>
            </div>
        </>);
};

export default TokenGatedContent;
