import css from './Registration.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { FaHeart } from 'react-icons/fa';

const Registration = () => {
  return (
    <>
      <div className={css.wrapper}>
        <h2>Save time and simplify your life with us! </h2>
        <RegistrationForm />
        <div className={css.container}>
          <p>
            <span className={css.icon}>
              <FaHeart />
            </span>
            Registering on our phone contacts storage platform is a step towards efficient contact
            management and saving valuable time.
          </p>
          <p>
            Start now and experience the ease of managing contacts that previously took you much
            time and effort.
          </p>
        </div>
      </div>

      <div className={css.bgImage}></div>
    </>
  );
};

export default Registration;