import React from "react";

const CredLinks = ({title, items }) => {
    return (
        <article className={"flex flex-col border-b last-of-type:border-0 border-primary px-4 py-6 gap-y-4"}>
            <h2 className={""}>{title}</h2>
            {items.map((item, i) => (
                <div key={i} className={"flex gap-x-2 items-center"}>
                    <div><img className={"h-6 w-6 rounded-3xl"} src={`../img/tokens/${item.image}`}/></div>
                    <div><a className={"cursor-pointer border-primary hover:border-b"}>{item.name}</a></div>
                </div>
            ))}

        </article>
    );
};
export default CredLinks;
