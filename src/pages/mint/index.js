import React, {useEffect, useState} from "react";
import {NextSeo} from "next-seo";
import Header from "../../components/layouts/Header";
import {useRecoilValue} from "recoil";
import {ensNameState} from "../../providers/Ens";
import {useRouter} from "next/router";

export default function Mint() {
    const ensName = useRecoilValue(ensNameState);
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        (async () => {
            if (!ensName) {
                await router.push('/');
            }
            setMounted(true);
        })()
    }, []);

    if (!mounted) {
        return <></>
    }

    return (
        <>
            <NextSeo
                title={`${name} . STRT CRED `}
                description={`${name} on STRT CRED `}
            />
            <Header/>
            <section className={"flex flex-col py-4 text-xs text-center"}>
                hello
            </section>
        </>
    );
};