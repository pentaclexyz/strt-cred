import React from "react";

const CredProject = ({name, tokenImage}) => {
    return (
        <article className={"flex justify-between items-center p-2"}>
            <div className={"flex gap-x-4 items-center"}>
                <div><img className={"h-6 w-6 rounded-3xl"} src={`../img/tokens/${tokenImage}`}/></div>
                <div className={"whitespace-pre-wrap"}>{name}</div>
            </div>
            <div className={"mr-2"}>
                <div><img src={"../img/invaders/speech.png"}/></div>
            </div>
        </article>
    );
};
export default CredProject;
