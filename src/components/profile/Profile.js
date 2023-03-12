import React from "react";

const Profile = ({name, bio, image}) => {
    return (
        <article className={"px-4 py-4 flex flex-row justify-between items-center border-b border-primary"}>
            <div className={"flex gap-x-4 items-center"}>
                {/*<div><img className={"rounded-full w-20 h-20"} src={`./img/${image}`}/></div>*/}
                <div className={"flex flex-col gap-y-2"}>
                    <div>{name}</div>
                    <div>{bio}</div>
                </div>
            </div>
            {/*<div className={"flex gap-x-4"}>*/}
            {/*    <div><a>{`https://twitter.com/${twitterId}`}</a></div>*/}
            {/*    <div><a>{`https://github.com/${githubId}`}</a></div>*/}
            {/*    <div><a>{`https://${blog}`}</a></div>*/}
            {/*    <div><a>{`https://${website}`}</a></div>*/}
            {/*</div>*/}
        </article>
    );
};
export default Profile;
