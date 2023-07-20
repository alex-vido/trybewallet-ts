import { AnyAction } from 'redux';
import { CurrencyType } from '../../types';

const INITIAL_STATE_WALLET: CurrencyType[] = [];

function wallet(state = INITIAL_STATE_WALLET, action: AnyAction) {
  switch (action.type) {
    case 'WALLET':
      return { ...state, currencies: action.payload };
    case 'EXPENSES':
      return { ...state, expenses: action.payload };
    default:
      return state;
  }
}

export default wallet;
