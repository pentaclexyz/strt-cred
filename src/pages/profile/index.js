import React from "react";
import {NextSeo} from "next-seo";
import PageHeading from "../../components/elements/PageHeading";
import LayoutPageContent from "../../components/layouts/LayoutPageContent";
import Header from "../../components/layouts/Header";

export default function Profile() {

    return (
        <>
            <NextSeo
                title="Strt Cred | My profile"
                description="Something"
            />
            <Header/>

            {/*<PageHeading heading={"MY PROFILE"} />*/}

            {/*<LayoutPageContent>*/}
            <section className={"text-xs"}>

                <article className={"w-full border-b border-primary"}>
                    <img className={"w-full"} src="./img/user-bg.png" alt="profile image"/>
                </article>

                <article className={"px-4 py-4 flex flex-row justify-between items-center border-b border-primary"}>
                    <div className={"flex gap-x-4 items-center"}>
                        <div><img className={"rounded-2xl"} src={"./img/person-pfp.png"}/></div>
                        <div className={"flex flex-col gap-y-2"}>
                            <div>name</div>
                            <div>bio</div>
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
                            <article className={"border-b border-primary p-4"}>
                                <h2 className={"mb-4"}>Contributed</h2>
                                <div className={"flex gap-x-2 items-center"}>
                                    <div><img className={"rounded-2xl"} src={"./img/pfp.png"}/></div>
                                    <div>Name</div>
                                </div>
                            </article>
                            <article className={"border-b border-primary p-4"}>
                                <h2 className={"mb-4"}>Worked with</h2>
                                <div className={"flex gap-x-2 items-center"}>
                                    <div><img className={"rounded-2xl"} src={"./img/pfp.png"}/></div>
                                    <div>Name</div>
                                </div>
                            </article>
                            <article className={"p-4"}>
                                <h2 className={"mb-4"}>Similar ppl</h2>
                                <div className={"flex gap-x-2 items-center"}>
                                    <div><img className={"rounded-2xl"} src={"./img/pfp.png"}/></div>
                                    <div>Name</div>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className={"col-span-8 flex flex-col border-l border-primary"}>
                        <article className={"flex justify-between w-full border-b p-4 border-primary"}>
                            <nav className={"flex gap-x-4"}>
                                <div className={"border-b border-secondary"}>All</div>
                                <div>Skill</div>
                                <div>Skill</div>
                                <div>Skill</div>
                            </nav>
                            <div className={"flex gap-x-4 items-center"}>
                                <div className={"border-b border-secondary"}>All</div>
                                <div><img src={"./img/arrow2.png"}/></div>
                                <div>Verified</div>
                            </div>
                        </article>
                        <article className={"p-4"}>
                            <div>mapped creds</div>
                        </article>
                    </div>

                </section>

            </section>
            {/*</LayoutPageContent>*/}
        </>
    );
};