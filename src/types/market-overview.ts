export interface Pair {
  amount_precision: string | number;
  base_bsc_address: string;
  base_decimal: number;
  base_name: string;
  base_symbol: string;
  base_type: number;
  base_warp_type_id: number;
  group_count: number;
  minimum_amount: string | number;
  minimum_total: string | number;
  pairs_id: number;
  price_precision: string | number;
  quote_bsc_address: string;
  quote_decimal: number;
  quote_name: string;
  quote_symbol: string;
  quote_type: number;
  quote_warp_type_id: number;
}

export interface Ticker24h {
  ask: { amount: string; price: string };
  bid: { amount: string; price: string };
  last_price_changed: string | number;
  last_trading_method: 2;
  liquidity: string | number;
  method: number;
  pair_id: number;
  price_change: string | number;
  quote_volume: string | number;
  traded_method: number;
  volume: string | number;
}

export enum TradingMethod {
  PancakePool = 8,
  BSCOrderBook = 2,
  BSCPool = 4,
}

export interface TopTicker24h extends Ticker24h, Pair {
  baseImg?: any;
  quoteImg?: any;
  priceChangePercent: number;
}
