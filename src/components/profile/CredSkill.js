import React from "react";

const CredSkill = ({name, image}) => {
    return (
        <div>
            <article className={"border border-primary px-4 py-3 flex justify-between items-center"}>
                <div className={"flex gap-x-4 items-center"}>
                    <div className={"h-6 flex items-center"}><img src={`../img/invaders/${image}`}/></div>
                    <div className={"whitespace-wrap"}>{name}</div>
                </div>
                <div><img src={"../img/chevron-up.png"}/></div>
            </article>
        </div>
    );
};
export default CredSkill;
