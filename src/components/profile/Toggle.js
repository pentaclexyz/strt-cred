import React from "react";

const Toggle = ({left, right}) => {
    return (
        <div className={"flex gap-x-4 items-center"}>
            <div><a className={"cursor-pointer border-primary border-b hover:border-b"}>{left}</a></div>
            <div><img src={"./img/arrow2.png"}/></div>
            <div><a className={"cursor-pointer border-primary hover:border-b"}>{right}</a></div>
        </div>
    );
};
export default Toggle;
