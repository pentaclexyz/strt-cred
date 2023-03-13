import Link from 'next/link.js';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import {  twitterUserInfoState, useTwitter } from '../providers/Twitter.js';
import Button from "./Button";


const LoggedInView = () => {
  const { getUserInfo, userInfo, logout } = useTwitter();
  const setUserInfo = useSetRecoilState(twitterUserInfoState);

  useEffect(() => {
    (async () => {
      const twitterUser = await getUserInfo();
      setUserInfo(twitterUser)
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={"flex flex-col gap-y-2 text-center"}>
        {userInfo && (
            <div>@{userInfo.name}</div>
        )}
        <Button onClick={logout}>Disconnect twitter</Button>
        <article className={"flex flex-col gap-y-8 mt-8"}>
            <h2 className={"p-4 border border-primary"}>Temporary navigation:</h2>
            <Link href={"/profile"}>Profile</Link>
        </article>
    </section>
  );
};

export default function TwitterVerification() {
    const {login, provider} = useTwitter();

  const unloggedInView = (
    <button onClick={login} className="card">
      Log in with Twitter
    </button>
  );

    return (
        <>
            <div>{provider ? <LoggedInView/> : unloggedInView}</div>
        </>
    );
}
