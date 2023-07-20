import { actionWallet } from '../redux/actions';
import { CurrencyType, DispatchType } from '../types';

const URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchApi = async (dispatch: DispatchType) => {
  const response = await fetch(URL);
  const currencies = await response.json();
  const filteredCurrencies = Object.keys(currencies)
    .reduce((acc, currency) => {
      if (currency !== 'USDT') {
        acc = [...acc, currencies[currency]];
      }
      return acc;
    }, [] as CurrencyType[]);
  dispatch(actionWallet(filteredCurrencies));
};

export default fetchApi;
