import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useTwitter } from '../providers/Twitter.js';

const Header = ({ ownEnsName }) => {
  const { userInfo } = useTwitter();
  return (
    <div className="Header">
      <span className="Header-span">StrtCrd</span>
      {ownEnsName ? (
        <div
          className="Header-account"
          style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <ConnectButton />
          </div>
          {userInfo && (
            <>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}>
                <img src={userInfo.profileImage.replace('_normal', '_bigger')} alt="user" style={{borderRadius: 999999}}/>
                {userInfo.name}
              </div>
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
