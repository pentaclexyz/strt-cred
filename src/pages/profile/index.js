import React from "react";
import {NextSeo} from "next-seo";
import PageHeading from "../../components/elements/PageHeading";
import LayoutPageContent from "../../components/layouts/LayoutPageContent";
import Header from "../../components/layouts/Header";
import CredProject from "../../components/profile/CredProject";
import CredSkill from "../../components/profile/CredSkill";
import Toggle from "../../components/profile/Toggle";
import SkillNav from "../../components/profile/SkillNav";
import CredLinks from "../../components/profile/CredLinks";

export default function Profile() {

    const name = "cdartttt";

    return (
        <>
            <NextSeo
                title={`${name} . STRT CRED `}
                description="Something"
            />
            <Header/>

            <section className={"text-xs"}>

                {/*<article className={"w-full border-b border-primary"}>*/}
                {/*    <img className={"w-full"} src="./img/user-bg.png" alt="profile image"/>*/}
                {/*</article>*/}

                <article className={"px-4 py-4 flex flex-row justify-between items-center border-b border-primary"}>
                    <div className={"flex gap-x-4 items-center"}>
                        <div><img className={"rounded-full w-20 h-20"} src={"./img/cdart.jpeg"}/></div>
                        <div className={"flex flex-col gap-y-2"}>
                            <div>@{name}</div>
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
                            <CredLinks title={"Contributed"} items={[{name: "Yooler", image: "euler.jpg"},{name: "West Ham", image: "westham.jpg"}]}/>
                            <CredLinks title={"Worked with"} items={[{name: "Scups", image: "scups.jpeg"},{name: "Laurel", image: "laurel.jpg"}]}/>
                            <CredLinks title={"Similar ppl"} items={[{name: "Laurel", image: "laurel.jpg"}]}/>
                        </div>
                    </div>

                    <div className={"col-span-8 flex flex-col border-l border-primary"}>
                        <article className={"flex justify-between w-full border-b p-4 border-primary"}>
                            <SkillNav items={["Creative", "Product", "Developer"]}/>
                            <Toggle left={"All"} right={"Verified"}/>
                        </article>
                        <div className={"p-4 grid grid-cols-2 gap-x-4"}>
                            <article>
                                <CredSkill name={"Campaign creative"} image={"a.png"}/>
                            </article>
                            <article>
                                <CredSkill name={"Brand development"} image={"b.png"}/>
                                <div
                                    className={"flex flex-col border-b border-l border-r border-primary divide-y divide-primary max-h-48 overflow-scroll"}>
                                    <CredProject name={"Yearn"} tokenImage={"yearn.jpeg"}/>
                                    <CredProject name={"Yooler"} tokenImage={"euler.jpg"}/>
                                </div>
                            </article>
                        </div>
                    </div>

                </section>
            </section>
            {/*</LayoutPageContent>*/}

        </>
    );
};