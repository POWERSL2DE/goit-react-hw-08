import css from './Login.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import { FaHeart } from 'react-icons/fa';

const Login = () => {
  return (
    <>
      <div className={css.container}>
        <LoginForm />
        <p className={css.text}>
          <span className={css.icon}>
            <FaHeart />
          </span>
          We&#39;re glad to see you again! Please sign in to access your account.
        </p>
      </div>

      <div className={css.bgImage}></div>
    </>
  );
};

export default Login;