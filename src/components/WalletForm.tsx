import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import thunkActionCreator from '../redux/actions/thunkActionCreator';
import { DispatchType, RootState, WalletFormType } from '../types';
import { actionExpenses } from '../redux/actions';
import { fetchCurrencies } from '../services/api';

function WalletForm() {
  const INITIAL_STATE_DATAWALLET = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  };

  const dispatch: DispatchType = useDispatch();
  const [dataWallet, setDataWallet] = useState<WalletFormType>(INITIAL_STATE_DATAWALLET);

  const { value, description, currency, method, tag } = dataWallet;

  const { currencies } = useSelector((state: RootState) => {
    return {
      ...state.wallet,
    };
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setDataWallet((prevData) => ({
      ...prevData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      ...dataWallet,
      exchangeRates: await fetchCurrencies(),
    };
    dispatch((actionExpenses(data)));
    setDataWallet((prevData) => ({
      ...INITIAL_STATE_DATAWALLET,
      id: prevData.id + 1,
    }));
  };
  useEffect(() => {
    dispatch(thunkActionCreator());
  }, []);

  return (
    <div className="App">
      <form
        onSubmit={ handleSubmit }
      >
        <label htmlFor="value">
          Valor
          {' '}
          <input
            data-testid="value-input"
            type="text"
            id="value"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição da despesa
          {' '}
          <input
            data-testid="description-input"
            type="text"
            id="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          {' '}
          <select
            data-testid="currency-input"
            name="currency"
            id="currency"
            value={ currency }
            onChange={ handleChange }
          >
            {currencies && (
              currencies
                .map((currencyOption, index) => (
                  <option
                    key={ index }
                    value={ currencyOption }
                  >
                    { currencyOption }
                  </option>
                )))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          {' '}
          <select
            data-testid="method-input"
            name="method"
            id="method"
            value={ method }
            onChange={ handleChange }
          >
            <option
              value="Dinheiro"
            >
              Dinheiro
            </option>
            <option
              value="Cartão de crédito"
            >
              Cartão de crédito
            </option>
            <option
              value="Cartão de débito"
            >
              Cartão de débito
            </option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria da despesa
          {' '}
          <select
            name="tag"
            id="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ handleChange }
          >
            <option
              value="Alimentação"
            >
              Alimentação
            </option>
            <option
              value="Lazer"
            >
              Lazer
            </option>
            <option
              value="Trabalho"
            >
              Trabalho
            </option>
            <option
              value="Transporte"
            >
              Transporte
            </option>
            <option
              value="Saúde"
            >
              Saúde
            </option>
          </select>
        </label>
        <button
          type="submit"
        >
          Adicionar despesa
        </button>
      </form>
    </div>
  );
}

export default WalletForm;
