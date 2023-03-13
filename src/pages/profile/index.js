import React, { useEffect, useState } from "react";
import {NextSeo} from "next-seo";
import PageHeading from "../../components/elements/PageHeading";
import LayoutPageContent from "../../components/layouts/LayoutPageContent";
import Header from "../../components/layouts/Header";
import { useRecoilValue } from "recoil";
import { ensNameState } from "../../providers/Ens";
import { useRouter } from "next/router";
import CredProject from "../../components/profile/CredProject";
import CredSkill from "../../components/profile/CredSkill";
import Toggle from "../../components/profile/Toggle";
import SkillNav from "../../components/profile/SkillNav";
import CredLinks from "../../components/profile/CredLinks";
import Link from "next/link";

export default function Profile() {
    const ensName = useRecoilValue(ensNameState);
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        (async () => {
            if (!ensName) {
              await  router.push('/');
            }
            setMounted(true);
        })()
    }, []);


    const name = "cdartttt";
    const bio="Semi-retired derivatives trader.";
    const githubId="cdartttt";
    const twitterId="cdartttt";
    const blog="cdartttt.substack.com";
    const website="cdartttt.com";
    const image="cdart.jpeg";

    if (!mounted) {
        return <></>
    }

    return (
        <>
            <NextSeo
                title={`${name} . STRT CRED `}
                description={`${name} is on STRT CRED `}
            />
            <Header/>
            <section className={"flex flex-col gap-y-8 p-4 text-xs text-center"}>
                    <p className={"p-4 border border-primary"}>All profiles</p>
                    <Link href={"/profile/edit"}>edit / create new</Link>
                    <Link href={"/profile/cdart"}>slug</Link>
                </section>
        </>
    );
};