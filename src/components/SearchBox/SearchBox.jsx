import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useId } from 'react';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const elementId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <label className={css.text} htmlFor={elementId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        id={elementId}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;