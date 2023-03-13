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
            {/*<PageHeading heading={"MY PROFILE"} />*/}

            {/*<LayoutPageContent>*/}
            <section className={"text-xs"}>

                {/*<article className={"w-full border-b border-primary"}>*/}
                {/*    <img className={"w-full"} src="./img/user-bg.png" alt="profile image"/>*/}
                {/*</article>*/}

                <article className={"flex flex-row justify-between items-center px-4 py-4 border-b border-primary"}>
                    <div className={"flex gap-x-4 items-center"}>
                        <div><img className={"w-20 h-20 rounded-2xl"} src={"./img/cdart.jpeg"}/></div>
                        <div className={"flex flex-col gap-y-2"}>
                            <div>@cdartttt</div>
                            <div>Semi-retired derivatives trader.</div>
                        </div>
                    </div>
                    <div className={"flex gap-x-4"}>
                        <div>twitter</div>
                        <div>github</div>
                        <div>website</div>
                    </div>
                </article>

                <section className={"grid grid-cols-12 border-b border-primary"}>

                    <div className={"col-span-4"}>
                        <div className={"flex flex-col"}>
                            <article className={"flex flex-col gap-y-4 px-4 py-6 border-b border-primary"}>
                                <h2 className={""}>Contributed</h2>
                                <div className={"flex gap-x-2 items-center"}>
                                    <div><img className={"rounded-2xl"} src={"./img/pfp.png"}/></div>
                                    <div>Yooler</div>
                                </div>
                                <div className={"flex gap-x-2 items-center"}>
                                    <div><img className={"rounded-2xl"} src={"./img/pfp.png"}/></div>
                                    <div>West Ham</div>
                                </div>
                            </article>
                            <article className={"flex flex-col gap-y-4 px-4 py-6 border-b border-primary"}>
                                <h2 className={""}>Worked with</h2>
                                <div className={"flex gap-x-2 items-center"}>
                                    <div><img className={"rounded-2xl"} src={"./img/pfp.png"}/></div>
                                    <div>Scups</div>
                                </div>
                            </article>
                            <article className={"flex flex-col gap-y-4 px-4 py-6"}>
                                <h2 className={""}>Similar ppl</h2>
                                <div className={"flex gap-x-2 items-center"}>
                                    <div><img className={"rounded-2xl"} src={"./img/pfp.png"}/></div>
                                    <div>Laurel</div>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className={"flex flex-col col-span-8 border-l border-primary"}>
                        <article className={"flex justify-between p-4 w-full border-b border-primary"}>
                            <nav className={"flex gap-x-8"}>
                                <div className={"border-b border-primary"}>All</div>
                                <div>Creative</div>
                                <div>Product</div>
                                <div>Development</div>
                            </nav>
                            <div className={"flex gap-x-4 items-center"}>
                                <div className={"border-b border-primary"}>All</div>
                                <div><img src={"./img/arrow2.png"}/></div>
                                <div>Verified</div>
                            </div>
                        </article>
                        <article className={"grid grid-cols-2 gap-x-4 p-4"}>
                            <div>
                                <article className={"flex justify-between items-center p-4 border border-primary"}>
                                    <div className={"flex gap-x-4 items-center"}>
                                        <div className={"py-0.5"}><img src={"./img/invaders/a.png"}/></div>
                                        <div>Campaign creative</div>
                                    </div>
                                    <div><img src={"./img/chevron-up.png"}/></div>
                                </article>
                            </div>
                            <div>
                                <article className={"flex justify-between items-center p-4 border border-primary"}>
                                    <div className={"flex gap-x-4 items-center"}>
                                        <div><img src={"./img/invaders/b.png"}/></div>
                                        <div>Brand development</div>
                                    </div>
                                    <div><img src={"./img/chevron-down.png"}/></div>
                                </article>
                            </div>
                        </article>
                    </div>

                </section>

                <section className={"flex flex-col gap-y-8 p-4 text-xs text-center"}>
                    <p className={"p-4 border border-primary"}>All profiles</p>
                    <Link href={"/profile/edit"}>edit / create new</Link>
                    <Link href={"/profile/cdart"}>slug</Link>
                </section>
            </section>
        </>
    );
};