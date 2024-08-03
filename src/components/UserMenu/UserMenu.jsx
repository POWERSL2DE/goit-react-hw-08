import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

const UserMenu = ({onClick}) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <p>Hello, {user}!</p>
      <button
        className={css.button}
        onClick={() => {
          dispatch(logout());
          onClick();
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;