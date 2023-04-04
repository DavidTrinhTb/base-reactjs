export enum PurchaseToken {
  XCN = '0',
  USDC = '1',
  ETH = '2',
}

export const PurchaseTokenSymbol = {
  [PurchaseToken.XCN]: 'XCN',
  [PurchaseToken.USDC]: 'USDC',
  [PurchaseToken.ETH]: process.env.REACT_APP_ETH_BASE_TOKEN as string,
};
