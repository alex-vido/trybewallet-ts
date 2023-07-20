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
    case 'DELETE_EXPENSE':
      if (state.expenses.length === 1) {
        return { ...state, expenses: [] };
      }
      return {
        ...state,
        expenses: [...state.expenses.filter((item) => item.id !== action.itemId)],
      };

    default:
      return state;
  }
}

export default wallet;
