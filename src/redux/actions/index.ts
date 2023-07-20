import { CurrencyType, WalletFormType } from '../../types';

export const actionUser = (email = '') => ({
  type: 'EMAIL',
  payload: email,
});

export const actionWallet = (currencies: CurrencyType[] = []) => ({
  type: 'WALLET',
  payload: currencies,
});

export const actionExpenses = (expenses: WalletFormType) => ({
  type: 'EXPENSES',
  payload: expenses,
});
