import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../types';
import { actionDelete } from '../../redux/actions';
import styles from './Table.module.css';
import delIcon from '../../static/images/trash.svg';

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
    <table
      className={ styles.table }
    >
      <thead
        className={ styles.thead }
      >
        <tr
          className={ styles.tr }
        >
          <th className={ styles.th }>Descrição</th>
          <th className={ styles.th }>Tag</th>
          <th className={ styles.th }>Método de pagamento</th>
          <th className={ styles.th }>Valor</th>
          <th className={ styles.th }>Moeda</th>
          <th className={ styles.th }>Câmbio utilizado</th>
          <th className={ styles.th }>Valor convertido</th>
          <th className={ styles.th }>Moeda de conversão</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody
        className={ styles.tbody }
      >
        {
          expenses.length > 0 && (
            expenses.map((expense) => {
              return (
                <tr
                  className={ styles.tr }
                  key={ expense.id }
                >
                  <td><p className={ styles.tdp }>{ expense.description }</p></td>
                  <td><p className={ styles.tdp }>{ expense.tag }</p></td>
                  <td><p className={ styles.tdp }>{ expense.method }</p></td>
                  <td>
                    <p
                      className={ styles.tdp }
                    >
                      { Number(expense.value).toFixed(2) }
                    </p>

                  </td>
                  <td>
                    <p
                      className={ styles.tdp }
                    >
                      { expense.exchangeRates[expense.currency].name }
                    </p>

                  </td>
                  <td>
                    <p
                      className={ styles.tdp }
                    >
                      {
                    Number(expense.exchangeRates[expense.currency].ask)
                      .toFixed(2)
                    }
                    </p>
                  </td>
                  <td>
                    <p
                      className={ styles.tdp }
                    >
                      {
                  (Number(expense.value)
                  * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)
                  }
                    </p>
                  </td>
                  <td><p className={ styles.tdp }>Real</p></td>
                  <td>
                    <button
                      className={ styles.btn }
                      data-testid="delete-btn"
                      onClick={ () => handleDelete(expense.id) }
                    >
                      <img
                        className={ styles.delIcon }
                        src={ delIcon }
                        alt="del button"
                      />
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
