import css from './BurgerMenu.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { MdOutlineClose } from 'react-icons/md';
import clsx from 'clsx';

const BurgerMenu = ({ toggle, onClick }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div className={clsx(css.menuWrapper, toggle && css.isOpen)}>
        <div className={css.menu}>
          <div className={css.buttonContainer}>
            <button className={css.button} type="button" onClick={onClick}>
              <MdOutlineClose size="24px" fill="#483723" />
            </button>
          </div>
          <div className={css.menuContainer}>
            <Navigation onClick={onClick} />
            {isLoggedIn ? <UserMenu onClick={onClick} /> : <AuthNav onClick={onClick} />}
          </div>
          <p className={css.description}>
            &#171;Save your world of contacts by opening the possibilities of Contact Kingdom&#187;
          </p>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;