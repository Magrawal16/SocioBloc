import { Outlet, Navigate } from "react-router-dom";

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  ConnectWallet
} from '@thirdweb-dev/react';

import { useUserContext } from "@/context/AuthContext";

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <ThirdwebProvider
            supportedWallets={[
              metamaskWallet({
                recommended: true,
              }),
              coinbaseWallet(),
              walletConnect(),
            ]}
            clientId="f573815f3da83006101281bb980c6dd2"
          >

            <section className="flex flex-1 justify-center items-center flex-col py-10">
              <Outlet />
              {/* <ConnectWallet /> */}
            </section>

            <img
              src="/assets/images/side-img.svg"
              alt="logo"
              className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
            />
          </ThirdwebProvider>
        </>
      )}
    </>
  );
}
