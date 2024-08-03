import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <>
      <h3 className={css.title}>Error! Page is not found! 🚩</h3>
      <div className={css.bgImage}></div>
    </>
  );
};

export default NotFound;