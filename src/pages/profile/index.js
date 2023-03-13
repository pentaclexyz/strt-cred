import React, {useEffect, useState} from "react";
import {NextSeo} from "next-seo";
import PageHeading from "../../components/elements/PageHeading";
import LayoutPageContent from "../../components/layouts/LayoutPageContent";
import Header from "../../components/layouts/Header";
import {useRecoilValue} from "recoil";
import {ensNameState} from "../../providers/Ens";
import {useRouter} from "next/router";
import CredProject from "../../components/profile/CredProject";
import CredSkill from "../../components/profile/CredSkill";
import Toggle from "../../components/profile/Toggle";
import TabNav from "../../components/navigation/TabNav";
import CredLinks from "../../components/profile/CredLinks";
import Link from "next/link";

export default function Profile() {
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


    const name = "Profiles";

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
                <article className={"flex justify-center pb-8 pt-6 border-b border-primary"}>
                    <TabNav items={["All", "Teams", "People"]}/>
                </article>
                <article className={"grid grid-cols-12 p-4 border-b border-primary"}>
                    <div className={"col-span-3 text-left"}>Filter by name</div>
                    {/*<div className={"col-span-2 text-left"}>Type</div>*/}
                    <div className={"col-span-2 text-left"}>Filter by skill</div>
                    <div className={"col-span-3 text-left"}>Received</div>
                    <div className={"col-span-3 text-left"}>Given</div>
                    <div className={"col-span-1 ml-auto"}>
                    <Toggle left={"All"} right={"Faves"}/>
                    </div>
                </article>
            </section>
        </>
    );
};