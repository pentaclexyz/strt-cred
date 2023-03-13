import React from "react";
import EntityLink from "../elements/EntityLink";

const CredLinks = ({title, items }) => {
    return (
        <article className={"flex flex-col border-b last-of-type:border-0 border-primary px-4 py-6 gap-y-4"}>
            <h2 className={""}>{title}</h2>
            {items.map((item, i) => (
                <EntityLink key={i} image={item.image} name={item.name}/>
            ))}

        </article>
    );
};
export default CredLinks;
