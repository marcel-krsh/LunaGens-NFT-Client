import { ChainId } from '@sushiswap/sdk';

// import iconFTM from 'assets/imgs/ftm.png';
//import iconWFTM from 'assets/imgs/wftm.png';
import iconWbnb from 'assets/svgs/BNB.svg';
import iconUSDT from 'assets/imgs/usdt.png';
import iconUSDC from 'assets/imgs/usdc.png';
import iconDAI from 'assets/imgs/dai.png';

// eslint-disable-next-line no-undef
const isMainnet = process.env.REACT_APP_ENV === 'MAINNET';

const Tokens = {
  [ChainId.BSC]: [
    // {
    //   address: '',
    //   name: 'Fantom',
    //   symbol: 'FTM',
    //   decimals: 18,
    //   icon: iconFTM,
    // },
    {
      address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      name: 'Wrapped BNB',
      symbol: 'WBNB',
      decimals: 18,
      icon: iconWbnb,
    },
    {
      address: '0x55d398326f99059fF775485246999027B3197955',
      name: 'Tether USD',
      symbol: 'fUSDT',
      decimals: 6,
      icon: iconUSDT,
    },
    {
      address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      icon: iconUSDC,
    },
    {
      address: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      decimals: 18,
      icon: iconDAI,
    },
  ],
  [ChainId.BSC_TESTNET]: [
    // {
    //   address: '',
    //   name: 'Fantom',
    //   symbol: 'FTM',
    //   decimals: 18,
    //   icon: iconFTM,
    // },
    {
      address: '0x5b3e2bc1da86ff6235d9ead4504d598cae77dbcb',
      name: 'Wrapped BNB',
      symbol: 'WBNB',
      decimals: 18,
      icon: iconWbnb,
    },
  ],
};

export default function useTokens() {
  const chain = isMainnet ? ChainId.FANTOM : ChainId.FANTOM_TESTNET;

  const tokens = Tokens[chain];

  const getTokenByAddress = addr => {
    const address =
      !addr ||
      addr === '0x0000000000000000000000000000000000000000' ||
      addr === 'ftm'
        ? ''
        : addr;
    return (tokens || []).find(
      tk => tk.address.toLowerCase() === address.toLowerCase()
    );
  };

  return { getTokenByAddress, tokens };
}
