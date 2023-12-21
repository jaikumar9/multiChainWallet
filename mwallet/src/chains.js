const Ethereum = {
    hex: '0x1',
    name: 'Ethereum',
    rpcUrl: '',
    ticker: "ETH"
};

const MumbaiTestnet = {
    hex: '0x13881',
    name: 'Mumbai Testnet',
    rpcUrl: 'https://polygon-mumbai.g.alchemy.com/v2/hgrjW6lHTkXWssSmHJcv3AQpVEzRxlfk',
    ticker: "MATIC"
};

export const CHAINS_CONFIG = {
    "0x1": Ethereum,
    "0x13881": MumbaiTestnet,


};