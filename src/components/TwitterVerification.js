import { useEffect } from 'react';
import { useTwitter } from '../providers/Twitter.js';

const LoggedInView = () => {
  const { getUserInfo, userInfo, logout } = useTwitter();

  useEffect(() => {
    getUserInfo();
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
