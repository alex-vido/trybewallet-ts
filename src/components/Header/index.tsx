import { useSelector } from 'react-redux';
import { RootState } from '../../types';
import styles from './Header.module.css';
import moneyIcon from '../../static/images/money.svg';
import vector from '../../static/images/vector.svg';
import logo from '../../static/images/logo.svg';

function Header() {
  const email = useSelector((state: RootState) => state.user.email);

  const { expenses } = useSelector((state: RootState) => {
    return {
      ...state.wallet,
    };
  });

  return (
    <header
      className={ styles.header }
    >
      <div
        className={ styles.titleCard }
      >
        <img
          src={ logo }
          alt="logo"
          className={ styles.logo }
        />
        <h1
          className={ styles.title }
        >
          <span
            className={ styles.trybe }
          >
            Trybe
          </span>
          Wallet
        </h1>
      </div>
      <div
        className={ styles.totalCard }
      >
        <img src={ moneyIcon } alt="money icon" />
        <p>Total de despesas:</p>
        <p
          data-testid="total-field"
        >
          {
        expenses.reduce((acc, curr) => (
          acc + (Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask))
        ), 0).toFixed(2)
        }
        </p>
        <p
          data-testid="header-currency-field"
        >
          BRL
        </p>
      </div>
      <div
        className={ styles.emailCard }
      >
        <img src={ vector } alt="vector" />
        <p
          data-testid="email-field"
        >
          { email }
        </p>
      </div>
    </header>
  );
}

export default Header;
