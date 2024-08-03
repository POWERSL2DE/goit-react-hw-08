import css from './App.module.css';
import Loader from '../Loader/Loader';
import Layout from '../Layout/Layout';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute';

const Home = lazy(() => import('../../pages/Home/Home'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const Registration = lazy(() => import('../../pages/Registration/Registration'));
const Login = lazy(() => import('../../pages/Login/Login'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div className={css.container}>
      <Layout>
        <Suspense fullback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<Contacts />} redirectTo="/login" />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute component={<Registration />} redirectTo="/contacts" />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<Login />} redirectTo="/contacts" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};

export default App;