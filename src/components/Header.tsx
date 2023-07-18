import { useSelector } from 'react-redux';
import { RootState } from '../types';

function Header() {
  const email = useSelector((state: RootState) => state.user.email);

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
        0
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
