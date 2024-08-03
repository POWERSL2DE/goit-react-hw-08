import css from './Contacts.module.css';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import toast, { Toaster } from 'react-hot-toast';

const Contacts = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(() => toast.error('Something went wrong! Reload the page'));
  }, [dispatch]);

  return (
    <>
      <div className={css.bgImage}></div>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage>Something went wrong! Please reload the page 🚩</ErrorMessage>}
      <ContactList />

      <Toaster />
    </>
  );
};

export default Contacts;