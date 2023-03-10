import '@rainbow-me/rainbowkit/styles.css';
import {RainbowKitProvider, getDefaultWallets} from '@rainbow-me/rainbowkit';
import {
    mainnet,
    goerli,
    configureChains,
    createClient,
    WagmiConfig,
} from 'wagmi';
import {alchemyProvider} from 'wagmi/providers/alchemy';
import {publicProvider} from 'wagmi/providers/public';
import {SSXProvider} from '@spruceid/ssx-react';
import {TwitterProvider} from '../providers/Twitter';
import "../styles/globals.css";
import Footer from "../components/layouts/Footer";
import { RecoilRoot } from 'recoil';

const {chains, provider} = configureChains(
    [mainnet, goerli],
    [
        alchemyProvider({
            // This is Alchemy's default API key.
            // You can get your own at https://dashboard.alchemyapi.io
            apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
        }),
        publicProvider(),
    ]
);
const {connectors} = getDefaultWallets({
    appName: 'RainbowKit App',
    chains,
});
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});

function App({Component, pageProps}) {


    return (
        <RecoilRoot>
            <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider chains={chains}>
                    <SSXProvider>
                        <TwitterProvider>
                            <Component {...pageProps}/>
                            <Footer/>
                        </TwitterProvider>
                    </SSXProvider>
                </RainbowKitProvider>
            </WagmiConfig>
        </RecoilRoot>
    );
}

export default App;
