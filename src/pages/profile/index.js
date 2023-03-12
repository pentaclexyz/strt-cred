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

                {/*<article className={"w-full border-b border-primary"}>*/}
                {/*    <img className={"w-full"} src="./img/user-bg.png" alt="profile image"/>*/}
                {/*</article>*/}

                <article className={"px-4 py-4 flex flex-row justify-between items-center border-b border-primary"}>
                    <div className={"flex gap-x-4 items-center"}>
                        <div><img className={"rounded-2xl w-20 h-20"} src={"./img/cdart.jpeg"}/></div>
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
                            <article className={"flex flex-col border-b border-primary px-4 py-6 gap-y-4"}>
                                <h2 className={""}>Contributed</h2>
                                <div className={"flex gap-x-2 items-center"}>
                                    <div><img className={"h-6 w-6 rounded-3xl"} src={"./img/tokens/euler.jpg"}/></div>
                                    <div>Yooler</div>
                                </div>
                                <div className={"flex gap-x-2 items-center"}>
                                    <div><img className={"h-6 w-6 rounded-3xl"} src={"./img/tokens/westham.jpg"}/></div>
                                    <div>West Ham</div>
                                </div>
                            </article>
                            <article className={"flex flex-col border-b border-primary px-4 py-6 gap-y-4"}>
                                <h2 className={""}>Worked with</h2>
                                <div className={"flex gap-x-2 items-center"}>
                                    <div><img className={"h-6 w-6 rounded-3xl"} src={"./img/tokens/scups.jpeg"}/></div>
                                    <div>Scups</div>
                                </div>
                            </article>
                            <article className={"flex flex-col px-4 py-6 gap-y-4"}>
                                <h2 className={""}>Similar ppl</h2>
                                <div className={"flex gap-x-2 items-center"}>
                                    <div><img className={"h-6 w-6 rounded-3xl"} src={"./img/tokens/laurel.jpg"}/></div>
                                    <div>Laurel</div>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className={"col-span-8 flex flex-col border-l border-primary"}>
                        <article className={"flex justify-between w-full border-b p-4 border-primary"}>
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
                        <article className={"p-4 grid grid-cols-2 gap-x-4"}>
                            <div>
                                <article className={"border border-primary p-4 flex justify-between items-center"}>
                                    <div className={"flex gap-x-4 items-center"}>
                                        <div className={"py-0.5"}><img src={"./img/invaders/a.png"}/></div>
                                        <div>Campaign creative</div>
                                    </div>
                                    <div><img src={"./img/chevron-down.png"}/></div>
                                </article>
                            </div>
                            <div>
                                <article className={"border border-primary p-4 flex justify-between items-center"}>
                                    <div className={"flex gap-x-4 items-center"}>
                                        <div><img src={"./img/invaders/b.png"}/></div>
                                        <div>Brand development</div>
                                    </div>
                                    <div><img src={"./img/chevron-up.png"}/></div>
                                </article>
                                <div className={"flex flex-col border-b border-l border-r border-primary divide-y divide-primary max-h-48 overflow-scroll"}>
                                    <article className={"flex justify-between items-center p-2"}>
                                        <div className={"flex gap-x-4 items-center"}>
                                            <div><img className={"h-6 w-6 rounded-3xl"} src={"./img/tokens/yearn.jpeg"}/></div>
                                            <div>Yearn</div>
                                        </div>
                                        <div className={"mr-2"}>
                                            <div><img src={"./img/invaders/speech.png"}/></div>
                                        </div>
                                    </article>
                                    <article className={"flex justify-between items-center p-2"}>
                                        <div className={"flex gap-x-4 items-center"}>
                                            <div><img className={"h-6 w-6 rounded-3xl"} src={"./img/tokens/euler.jpg"}/></div>
                                            <div>Yooler</div>
                                        </div>
                                        <div className={"mr-2"}>
                                            <div><img src={"./img/invaders/speech.png"}/></div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </article>
                    </div>

                </section>

            </section>
            {/*</LayoutPageContent>*/}

        </>
    );
};