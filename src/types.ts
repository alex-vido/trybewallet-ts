import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type UserType = {
  email: string;
};

export type RootState = {
  user: UserType;
  wallet: WalletReducer;
};

export type CurrencyType = {
  code: string;
  name: string;
  ask: string;
};

export type CurrenciesType = {
  [key: string]: CurrencyType;
};

export type WalletFormType = {
  id: number;
  value: string;
  description: string;
  currency: string;
  method: string;
  tag: string;
  exchangeRates: CurrenciesType;
};

export type DispatchType = ThunkDispatch<WalletFormType, null, AnyAction>;

export type WalletReducer = {
  currencies: CurrencyType[];
  expenses: [];
  editor: boolean;
  idToEdit: number;
};
