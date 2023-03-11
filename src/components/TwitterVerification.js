import { useEffect } from 'react';
import { useTwitter } from '../providers/Twitter.js';

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

  useEffect(() => {
    (async () => {
      const twitterUser = await getUserInfo();
    })();
  }, []);

  return (
    <>
      {userInfo && (
        <>
          <div>Logged in as {userInfo.name}</div>
        </>
      )}

      <div>
        <button onClick={logout} className="card">
          Log Out
        </button>
      </div>
    </>
  );
};

export default function TwitterVerification() {
  const { login, provider } = useTwitter();

  const unloggedInView = (
    <button onClick={login} className="card">
      Login
    </button>
  );

  return (
    <>
      <div className="grid">{provider ? <LoggedInView /> : unloggedInView}</div>
    </>
  );
}
