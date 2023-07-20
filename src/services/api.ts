import { actionWallet } from '../redux/actions';
import { DispatchType } from '../types';

const URL = 'https://economia.awesomeapi.com.br/json/all';

const fetchApi = async (dispatch: DispatchType) => {
  const response = await fetch(URL);
  const currencies = await response.json();
  const filteredCurrencies = Object.keys(currencies)
    .reduce((acc, currency) => {
      if (currency !== 'USDT') {
        return [...acc, currency];
      }
      return acc;
    }, [] as string[]);
  dispatch(actionWallet(filteredCurrencies));
};

export default fetchApi;

export const fetchCurrencies = async () => {
  const response = await fetch(URL);
  const currencies = await response.json();
  return currencies;
};
