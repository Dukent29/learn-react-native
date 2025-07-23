export interface Crypto {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  icon: any; // For require() images
}

export const cryptos: Crypto[] = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 43250.50,
    change24h: 2.45,
    icon: require('../assets/bitcoin.png'),
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 2650.75,
    change24h: -1.23,
    icon: require('../assets/ethereum.png'),
  },
  {
    id: '3',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.52,
    change24h: 5.67,
    icon: require('../assets/cardano.png'),
  },
  {
    id: '4',
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.08,
    change24h: -3.21,
    icon: require('../assets/dogecoin.png'),
  },
  {
    id: '5',
    name: 'Solana',
    symbol: 'SOL',
    price: 95.40,
    change24h: 4.12,
    icon: require('../assets/solana.png'),
  },
  {
    id: '6',
    name: 'XRP',
    symbol: 'XRP',
    price: 0.61,
    change24h: 1.85,
    icon: require('../assets/xrp.png'),
  },
  {
    id: '7',
    name: 'BNB',
    symbol: 'BNB',
    price: 315.20,
    change24h: 2.90,
    icon: require('../assets/bnb.png'),
  },
  {
    id: '8',
    name: 'Tether',
    symbol: 'USDT',
    price: 1.00,
    change24h: 0.01,
    icon: require('../assets/tether.png'),
  },
];