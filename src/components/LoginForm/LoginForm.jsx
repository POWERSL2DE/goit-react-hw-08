import css from './LoginForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import toast, { Toaster } from 'react-hot-toast';

const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .catch(() => toast.error('Incorrect email or password'));
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div className={css.field}>
            <label className={css.label} htmlFor={emailId}>
              Email
            </label>
            <Field type="email" name="email" id={emailId} />
            <ErrorMessage className={css.error} name="email" component="p" />
          </div>

          <div className={css.field}>
            <label className={css.label} htmlFor={passwordId}>
              Password
            </label>
            <Field type="password" name="password" id={passwordId} />
            <ErrorMessage className={css.error} name="password" component="p" />
          </div>

          <button className={css.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
      <Toaster />
    </>
  );
};

export default LoginForm;