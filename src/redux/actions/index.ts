import { WalletFormType } from '../../types';

export const actionUser = (email = '') => ({
  type: 'EMAIL',
  payload: email,
});

export const actionWallet = (currencies: string[] = []) => ({
  type: 'WALLET',
  payload: currencies,
});

export const actionExpenses = (expenses: WalletFormType) => ({
  type: 'EXPENSES',
  payload: expenses,
});

export const actionDelete = (id: number) => ({
  type: 'DELETE_EXPENSE',
  itemId: id,
});
