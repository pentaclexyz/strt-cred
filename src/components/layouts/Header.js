import { ConnectButton } from "@rainbow-me/rainbowkit";
import { twitterUserInfoState, useTwitter } from "../../providers/Twitter.js";
import { Popover } from "@headlessui/react";
import { useRecoilValue } from "recoil";
import { ensNameState } from "../../providers/Ens.js";
import Link from "next/link.js";

const Header = () => {
  const { logout, login } = useTwitter();
  const ownEnsName = useRecoilValue(ensNameState);
  const userInfo = useRecoilValue(twitterUserInfoState);

  return (
    <header className="flex flex-row justify-between items-center px-4 py-2 h-24 border-t border-b border-primary text-txt-inverted bg-tertiary">
      <Link href="/"><h1 className="text-xs">STRT CRED</h1></Link>
      {ownEnsName ? (
        <div className="flex flex-row justify-items">
          <div className="flex justify-center items-center mr-3">
            <ConnectButton />
          </div>
          {!userInfo && (
            <button onClick={login} className="w-24 text-xs">
              Log in with Twitter
            </button>
          )}
          {userInfo && (
            <>
              <Popover className="relative">
                <Popover.Button className={"w-24 h-full"}>
                  {" "}
                  <div className={"flex flex-col justify-center items-center"}>
                    <img
                      className={"w-12 h-12 rounded-3xl border"}
                      src={userInfo.profileImage.replace("_normal", "_bigger")}
                      alt={userInfo.name}
                    />
                    <div className="mt-2 max-w-full text-xs truncate">{userInfo.name}</div>
                  </div>
                </Popover.Button>

                <Popover.Panel className="overflow-hidden absolute z-10 rounded shadow-lg">
                  <div className="grid bg-white">
                    <span className="px-4 py-2 text-xs cursor-pointer hover:bg-slate-200 text-slate-900" onClick={() => logout()}>
                      Disconnect twitter
                    </span>
                  </div>
                </Popover.Panel>
              </Popover>
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
