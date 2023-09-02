import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailValidator = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: 'EMAIL', payload: email });
    navigate('/carteira');
  };

  return (
    <div
      className={ styles.card }
    >
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
      <form
        onSubmit={ handleSubmit }
        className={ styles.form }
      >
        <label htmlFor="email">
          <input
            className={ styles.input }
            placeholder="Email"
            type="text"
            data-testid="email-input"
            value={ email }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            className={ styles.input }
            placeholder="Senha"
            type="password"
            data-testid="password-input"
            value={ password }
            onChange={ (event) => setPassword(event.target.value) }
          />
        </label>
        <button
          className={ styles.button }
          type="submit"
          disabled={ !(emailValidator.test(email) && password.length >= 6) }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
