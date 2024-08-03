import css from './Home.module.css';
import homeImage from '../../img/img-home.jpg';
import { FaHeart } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <div className={css.containerTitle}>
        <h1 className={css.title}>Welcome to Contact Kingdom!</h1>
        <h2 className={css.subtitle}>
          Simplify your life and stay organized with our user-friendly online tool designed to
          streamline your contact management experience.
        </h2>
      </div>

      <div className={css.container}>
        <div className={css.containerList}>
          <h3>Advantages of Contact Kingdom:</h3>
          <ul className={css.list}>
            <li>
              <h4>
                <span className={css.icon}>
                  <FaHeart />
                </span>
                Centralized Contact Storage
              </h4>
              <p>
                Access all your contacts from one convenient location on the page
                &#39;Contacts&#39;. Say goodbye to the hassle of losing contact information due to
                misplaced notebooks or outdated files.
              </p>
            </li>
            <li>
              <h4>
                <span className={css.icon}>
                  <FaHeart />
                </span>
                Easy Accessibility
              </h4>
              <p>
                Access your contacts anytime, anywhere, as long as you have an internet connection.
              </p>
            </li>
            <li>
              <h4>
                <span className={css.icon}>
                  <FaHeart />
                </span>
                Effortless Find
              </h4>
              <p>Quickly find the contacts you need, when you need them.</p>
            </li>
            <li>
              <h4>
                <span className={css.icon}>
                  <FaHeart />
                </span>
                Sync Across Devices
              </h4>
              <p>
                Seamlessly sync your contacts across multiple devices, ensuring you always have the
                most up-to-date information at your fingertips, whether you&#39;re using your
                computer, tablet, or smartphone.
              </p>
            </li>
          </ul>
        </div>

        <div className={css.containerDesc}>
          <img className={css.image} src={homeImage} alt="home image" />
          <h3 className={css.description}>
            Sign up now and start enjoying the benefits of efficient contact management. Say hello
            to simplicity, organization, and peace of mind.
          </h3>
        </div>
      </div>

      <div className={css.bgImage}></div>
    </div>
  );
};

export default Home;