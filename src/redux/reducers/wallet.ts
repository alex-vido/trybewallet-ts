import { AnyAction } from 'redux';
import { WalletReducer } from '../../types';

const INITIAL_STATE_WALLET: WalletReducer = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0,
};

function wallet(state = INITIAL_STATE_WALLET, action: AnyAction) {
  switch (action.type) {
    case 'WALLET':
      return { ...state, currencies: action.payload };
    case 'EXPENSES':
      return { ...state, expenses: [...state.expenses, action.payload] };
    default:
      return state;
  }
}

export default wallet;
