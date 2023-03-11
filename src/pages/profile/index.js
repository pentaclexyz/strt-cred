import React from "react";
import { NextSeo } from "next-seo";
import PageHeading from "../../components/elements/PageHeading";
import LayoutPageContent from "../../components/layouts/LayoutPageContent";

export default function Profile() {

    return (
        <>
            <NextSeo
                title="My profile"
                description="Something"
            />
            <PageHeading heading={"My profile"} />

            <LayoutPageContent>
                <div>hello</div>
            </LayoutPageContent>
        </>
    );
};