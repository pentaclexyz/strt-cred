import React from "react";

const SkillNav = ({items}) => {
    return (
        <nav>
            <ul className={"flex gap-x-8"}>
            <li><a className={"cursor-pointer border-b border-primary"}>All</a></li>
            {items.map((item, i) => (
                <li key={i}><a className={"cursor-pointer border-primary hover:border-b"}>{item}</a></li>
            ))}
            </ul>
        </nav>
    );
};
export default SkillNav;
