import React from "react";

const TabNav = ({items}) => {
    return (
        <nav>
            <ul className={"flex gap-x-8"}>
            {items.map((item, i) => (
                <li key={i}><a className={"cursor-pointer border-primary hover:border-b"}>{item}</a></li>
            ))}
            </ul>
        </nav>
    );
};
export default TabNav;
