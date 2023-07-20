import { useSelector } from 'react-redux';
import { RootState } from '../types';

function Header() {
  const email = useSelector((state: RootState) => state.user.email);

  const { expenses } = useSelector((state: RootState) => {
    return {
      ...state.wallet,
    };
  });

  return (
    <header>
      <p
        data-testid="email-field"
      >
        { email }
      </p>
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
    </header>
  );
}

export default Header;
