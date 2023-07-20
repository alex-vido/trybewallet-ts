import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../types';

function ExpenseTable() {
  const { expenses } = useSelector((state: RootState) => {
    return {
      ...state.wallet,
    };
  });

  useEffect(() => {
    console.log(expenses);
  }, [expenses]);

  return (
    <table>
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
      <tr>
        {
          expenses.length > 0 && (
            expenses.map((expense, index) => {
              return (
                <tr
                  key={ index }
                >
                  <td>{ expense.description }</td>
                  <td>{ expense.tag }</td>
                  <td>{ expense.value }</td>
                  <td>{ expense.method }</td>
                  <td>{ expense.exchangeRates[expense.currency].name }</td>
                  <td>{ expense.currency }</td>
                  <td>
                    {
                  (Number(expense.value)
                  * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)
                  }
                  </td>
                  <td>Real</td>
                </tr>
              );
            })
          )
          }
      </tr>
    </table>
  );
}

export default ExpenseTable;
