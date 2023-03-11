import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useTwitter } from '../../providers/Twitter.js';

const Header = ({ ownEnsName }) => {
    const { userInfo } = useTwitter();
    return (
        <header>
            <div className={"bg-pink-200"}>Strt Cred</div>
            {ownEnsName ? (
                <div className="flex flex-row justify-items"><div>
                        <ConnectButton />
                    </div>
                    {userInfo && (
                        <>
                            <div className={" "}>
                                <img className={"w-20 h-20 border rounded-3xl"} src={userInfo.profileImage.replace('_normal', '_bigger')} alt={userInfo.name}/>
                                {userInfo.name}
                            </div>
                        </>
                    )}
                </div>
            ) : (
                <></>
            )}
        </header>
    );
};

export default Header;
