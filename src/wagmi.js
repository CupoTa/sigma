import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { http, createConfig } from 'wagmi'
import { opBNB, hardhat } from 'wagmi/chains'

import {
  rabbyWallet,
  walletConnectWallet,
  trustWallet,
  safeWallet,
  bybitWallet,
  bitgetWallet,
  injectedWallet,
  binanceWallet,
  coinbaseWallet,
  okxWallet,
  metaMaskWallet
} from '@rainbow-me/rainbowkit/wallets';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [injectedWallet, metaMaskWallet, walletConnectWallet, safeWallet, rabbyWallet, trustWallet, bybitWallet, bitgetWallet, okxWallet, binanceWallet, coinbaseWallet],
    },
  ],
  {
    appName: "Sigma Room",
    projectId: import.meta.env.VITE_WC_PROJECT_ID,
  }
);

export const config = createConfig({
  chains: [opBNB, hardhat],
  connectors,
  transports: {
    [opBNB.id]: http(),
    [hardhat.id]: http()
  }
})




// export const config = getDefaultConfig({
//   appName: 'Gift BNB Squid',
//   projectId: import.meta.env.VITE_WC_PROJECT_ID,
//   chains: [mainnet, sepolia, opBNB],
// });
