import React, {useEffect, useState} from "react";
import {NextSeo} from "next-seo";
import Header from "../../components/layouts/Header";
import {useRecoilValue} from "recoil";
import {ensNameState} from "../../providers/Ens";
import {useRouter} from "next/router";
import Toggle from "../../components/profile/Toggle";
import TabNav from "../../components/navigation/TabNav";
import EntityLink from "../../components/elements/EntityLink";
import Fave from "../../components/elements/Fave";

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
                <article className={"flex justify-between px-4 pb-8 pt-6 border-b border-primary"}>
                    <div className={"w-16"}></div>
                    <TabNav items={["All", "Teams", "People"]}/>
                    <Toggle left={"All"} right={"Faves"}/>
                </article>
                <article className={"grid grid-cols-12 p-4 border-b border-primary items-center"}>
                    <div className={"col-span-2 text-left"}>
                        <input type="text" className={"border border-primary p-2"} placeholder={"Filter by name"}/>
                    </div>
                    {/*<div className={"col-span-2 text-left"}>Type</div>*/}
                    <div className={"col-span-3 text-left"}>
                        <input type="text" className={"border border-primary p-2"} placeholder={"Filter by skill"}/>
                    </div>
                    <div className={"col-span-3 text-left"}>Received</div>
                    <div className={"col-span-3 text-left"}>Given</div>
                    <div className={"col-span-1 ml-auto"}>

                    </div>
                </article>
                <article className={"grid grid-cols-12 p-4 border-b border-primary items-center"}>
                    <div className={"col-span-2 text-left"}>
                        <EntityLink name={"euler"} image={"../../img/tokens/euler.jpg"}/>
                    </div>
                    <div className={"col-span-3 text-left"}>
                        <ul className={"flex gap-x-2"}>
                            <li>Defi</li>
                            <li>Swaps</li>
                            <li>Yield</li>
                        </ul>
                    </div>
                    <div className={"col-span-3 text-left"}>
                        Received
                    </div>
                    <div className={"col-span-3 text-left"}>
                        Given
                    </div>
                    <div className={"col-span-1 ml-auto"}>
                        <Fave/>
                    </div>
                </article>
            </section>
        </>
    );
};