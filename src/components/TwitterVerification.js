import Link from 'next/link';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import {  twitterUserInfoState, useTwitter } from '../providers/Twitter.js';
import Button from "./Button";

const categories = [
  {
    name: 'Developer',
    subCategories: [
      'Blockchain architecture',
      'Distributed systems',
      'Wallets',
      'Tooling',
      'DevOps',
      'Frontend development',
      'Backend development',
      'Security',
      'Risk management',
      'Network operations',
      'Infrastructure',
    ],
  },
  { name: 'Developer relations', subCategories: [] },
  { name: 'Product', subCategories: [] },
  { name: 'Project management', subCategories: [] },
  { name: 'Business development', subCategories: [] },
  { name: 'Operations', subCategories: [] },
  { name: 'Finance', subCategories: [] },
  {
    name: 'Data Science',
    subCategories: [
      'Data Visualization',
      'Data analysis',
      'Statistical Analysis',
      'Natural Language Processing',
      'Machine Learning',
      'Big Data',
      'Data Cleaning and Preprocessing',
      'Data Modeling',
    ],
  },
  { name: 'Creative', subCategories: [] },
  { name: 'Marketing', subCategories: [] },
  { name: 'Community engagement', subCategories: [] },
  {
    name: 'Meme maker',
    subCategories: [
      'Humor',
      'Creativity',
      'Timeliness',
      'Shareability',
      'Community engagement',
      'Brand awareness',
      'Memetic appeal',
      'Tone',
      'Visual design',
      'Memetic longevity',
    ],
  },
  { name: 'MathJournalist', subCategories: [] },
  { name: 'Founder', subCategories: [] },
  { name: 'Researcher', subCategories: [] },
];

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
    <>
      <div className='flex flex-col gap-3'>
         {userInfo && (
            <div>Hello @{userInfo.name}</div>
        )}

        

        <div className='flex flex-col gap-3'>
          <Link href="/profile"><Button>Complete your profile</Button></Link>
          <Button onClick={logout}>Disconnect twitter</Button>
        </div>
      </div>
    </>
  );
};

export default function TwitterVerification() {
  const { login, provider } = useTwitter();

  const unloggedInView = (
    <Button onClick={login} className="card">
      Log in with Twitter
    </Button>
  );

  return (
    <>
      <div>{provider ? <LoggedInView /> : unloggedInView}</div>
    </>
  );
}
