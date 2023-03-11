import {Html, Head, Main, NextScript} from 'next/document';
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

export default function Document() {
    return (
        <Html>
            <Head>
            </Head>
            <body>
                <Main/>
                <NextScript/>
                <Footer/>
            </body>
        </Html>
    );
}
