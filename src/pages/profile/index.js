import React from "react";
import { NextSeo } from "next-seo";
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
            <Header />

            <PageHeading heading={"My profile"} />

            <LayoutPageContent>
                <article>header image</article>
                <article>
                    <div>profile image</div>
                    <div>bio</div>
                    <div>social links</div>
                </article>
                <section>
                    <article>
                        <div>contributed</div>
                        <div>worked with</div>
                        <div>similar ppl</div>
                    </article>
                    <div>
                        <article>
                            <div>tabs</div>
                            <div>toggle</div>
                        </article>
                        <article>
                            <div>mapped creds</div>
                        </article>
                    </div>
                </section>
            </LayoutPageContent>
        </>
    );
};