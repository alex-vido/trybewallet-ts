import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../types';
import { actionDelete } from '../redux/actions';

function Table() {
  const dispatch: DispatchType = useDispatch();
  const { expenses } = useSelector((state: RootState) => {
    return {
      ...state.wallet,
    };
  });

  useEffect(() => {

  }, [expenses]);

  const handleDelete = (
    id: number,
  ) => {
    dispatch(actionDelete(id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {
          expenses.length > 0 && (
            expenses.map((expense) => {
              return (
                <tr
                  key={ expense.id }
                >
                  <td><p>{ expense.description }</p></td>
                  <td><p>{ expense.tag }</p></td>
                  <td><p>{ expense.method }</p></td>
                  <td><p>{ Number(expense.value).toFixed(2) }</p></td>
                  <td><p>{ expense.exchangeRates[expense.currency].name }</p></td>
                  <td>
                    <p>
                      {
                    Number(expense.exchangeRates[expense.currency].ask)
                      .toFixed(2)
                    }
                    </p>
                  </td>
                  <td>
                    <p>
                      {
                  (Number(expense.value)
                  * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)
                  }
                    </p>
                  </td>
                  <td><p>Real</p></td>
                  <td>
                    <button
                      data-testid="delete-btn"
                      onClick={ () => handleDelete(expense.id) }
                    >
                      excluir
                    </button>
                  </td>
                </tr>
              );
            })
          )
          }
      </tbody>
    </table>
  );
}

export default Table;
