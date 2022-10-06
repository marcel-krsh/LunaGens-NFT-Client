import { ChainId } from '@sushiswap/sdk';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

import { NetworkConnector } from './NetworkConnector';

import ARTION_LOGO_URL from '../assets/svgs/logo_blue.svg';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const RPC = isMainnet
  ? {
      [ChainId.BSC]: 'https://bsc-dataseed.binance.org',
    }
  : {
      [ChainId.BSC_TESTNET]: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    };

export const network = new NetworkConnector({
  defaultChainId: ChainId.BSC,
  urls: RPC,
});

export const injected = new InjectedConnector({
  supportedChainIds: isMainnet
    ? [
        56, // fantom
      ]
    : [
        97, // fantom testnet
      ],
});

export const walletlink = new WalletLinkConnector({
  url: 'https://bsc-dataseed.binance.org',
  appName: 'LunaGens NFT',
  appLogoUrl: ARTION_LOGO_URL,
});
