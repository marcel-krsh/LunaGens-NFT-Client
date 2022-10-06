import { ChainId } from '@sushiswap/sdk';

export const NETWORK_LABEL = {
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.FANTOM_TESTNET]: 'Fantom Testnet',
  [ChainId.MATIC]: 'Matic',
  [ChainId.MATIC_TESTNET]: 'Matic Testnet',
  [ChainId.XDAI]: 'xDai',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
  [ChainId.MOONBASE]: 'Moonbase',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.FUJI]: 'Fuji',
  [ChainId.HECO]: 'HECO',
  [ChainId.HECO_TESTNET]: 'HECO Testnet',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.HARMONY_TESTNET]: 'Harmony Testnet',
};

export const Contracts = {
  [ChainId.BSC]: {
    auction: '0x0994828E5C63547De926F7C3b9140E8012da21e1',
    sales: '0x1860a445f8bcc91faf83DFe542519e8d1e761104',
    bundleSales: '0xeB1512724e4063DDd90a9B5ACaaD9b38C4900A75',
    factory: '0x9985C67c56981f2f64c8c91624107Df1d03677f3', //FantomNFTFactory
    privateFactory: '0x925Ebf3B198604F6A64B11E14569d7e901BCb409', //FantomNFTFactoryPrivate
    artFactory: '0x43f249b68387DB9Ce53eF2985c4b84441c837317', //FantomArtFactory
    privateArtFactory: '0x9Fc19c36B86D8E1959f1b1582f3D150668d37521', //FantomArtFactoryPrivate
  },
  [ChainId.BSC_TESTNET]: {
    auction: '0xC6B295156cC79EeD334D7D3c99618e2e58df8d9C',
    sales: '0x7612465704B433360C5fe882B6dce669e581Bd0c',
    bundleSales: '0x764D5B5E1d1a3C5753D8E1782cD112EBF3dBF026',
    factory: '0x30e11B358f7587D287477BD1F39BF8EB012d677c', //FantomNFTFactory
    privateFactory: '0xd1F784cd95138fb86dc6aBD7c0D78a3155EbFA81', //FantomNFTFactoryPrivate
    artFactory: '0x935383dCd8cdB2d4a73B89E47a8CE5D1aa63c69D', //FantomArtFactory
    privateArtFactory: '0xf7f1BcAeB3C865258f37e74d917bb183D84C7B8e', //FantomArtFactoryPrivate
  },
};
