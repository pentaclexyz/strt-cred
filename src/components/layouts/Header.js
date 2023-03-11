import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useTwitter } from "../../providers/Twitter.js";
import { Popover } from "@headlessui/react";

const Header = ({ ownEnsName }) => {
  const { userInfo, logout, login } = useTwitter();
  return (
    <header className="flex flex-row px-6 h-24 bg-pink-200">
      <div className={"mr-auto"}>
        <h1 className="py-7 text-slate-800">Strt Cred</h1>
      </div>
      {ownEnsName ? (
        <div className="flex flex-row justify-items">
          <div className="flex justify-center items-center mr-3">
            <ConnectButton />
          </div>
          {!userInfo && (
            <button onClick={login} className="w-24 text-slate-800">
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
                    <span className="max-w-full truncate text-slate-800">{userInfo.name}</span>
                  </div>
                </Popover.Button>

                <Popover.Panel className="overflow-hidden absolute right-4 z-10 w-36 rounded shadow-lg">
                  <div className="grid bg-white">
                    <span
                      className="px-3 py-2 transition-colors cursor-pointer text-slate-800 hover:bg-slate-200"
                      onClick={() => logout()}
                    >
                      Logout
                    </span>
                  </div>

                  <img src="/solutions.jpg" alt="" />
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
