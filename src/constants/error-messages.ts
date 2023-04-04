export const ERROR_MESSAGE: { [key: string]: any } = {
  E1: 'It seems that you have not installed Metamask. Please install now.',
  E2: 'Your wallet has not been registered as admin, thus you cannot access the system.',
  E3: (fieldName: string) => `${fieldName} is required`,
  E4: (fieldName: string) => `${fieldName} is invalid`,
  E5: 'Please add at least 1 photo of your item',
  E6: 'File format is invalid.',
  E7: (size: any) => `File size cannot exceed ${size}MB.`,
  E8: 'Connection lost',
  E9: (fieldName: any) => `${fieldName} has existed. Please enter another value.`,
  E10: (fieldName: any, maxValue: any) => `${fieldName} cannot exceed ${maxValue}%`,
  E11: (fieldName: any) => `${fieldName} has already existed. Please use another ${fieldName}`,
  E12: 'Wallet address must be on BSC network',
  E13: 'Transaction failed',
  E14: 'Transaction failed. View on BSCscan',
  E15: 'This account does not have the BD role. Please enter the ID of a BD account',
  E22: 'Please check the registration time and participation time first',
  E23: (fieldName: string, referenceFieldName: string) => `${fieldName} can't be earlier than ${referenceFieldName}`,
  E24: (fieldName: string, minimumValue: number) => `${fieldName} cannot be smaller than ${minimumValue}`,
  E25: (fieldName: string) => `${fieldName} cannot exceed 100%`,
  E26: (fieldName: string) => `${fieldName} must be larger than 0`,
  E27: 'Save the data first to proceed',
  E30: (offeredPercent: number) =>
    `Vault unlock threshold cannot exceed percentage to be offered at IAO. Maximum value is ${offeredPercent}`,
  E31: 'Import file is invalid',
  E32: 'This address is invalid on the current network',
  E33: 'This wallet has already been in affiliate list',
  E34: (fieldName: string, lowerLimit: string) => `${fieldName} must be larger than ${lowerLimit}`,
  E35: (fieldName: string, upperLimit: number) => `${fieldName} must be smaller than ${upperLimit}`,
  timeNow: (fieldName: string) => `${fieldName} can not < now`,
  E36: (fieldName: string, referenceFieldName: string) => `${fieldName} must be later than ${referenceFieldName}`,
  E37: (fieldName: string, referenceFieldName: string) => `${fieldName} must be earlier than ${referenceFieldName}`,
  E38: (fieldName: string, referenceFieldName: string) => `${fieldName} can't be later than ${referenceFieldName}`,
  E39: (fieldName: string) => `${fieldName} can't be an admin account`,
  E40: 'Token information obtaining request was unsuccessful due to a network error on chain. Please try again',
  E41: 'The email has already existed in the list',
  E42: 'Whitelist is empty, please import Whitelist',
};
