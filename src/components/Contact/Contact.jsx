import css from './Contact.module.css';
import DeleteModal from '../DeleteModal/DeleteModal';
import { ImUser, ImPhone, ImUserMinus } from 'react-icons/im';
import { useState } from 'react';

const Contact = ({ data: { id, name, number } }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={css.container}>
      <div>
        <p className={css.name}>
          <ImUser className={css.icon} />
          {name}
        </p>
        <p>
          <ImPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={openModal}>
        <ImUserMinus />
      </button>

      <DeleteModal value={id} modalIsOpen={modalIsOpen} onCloseModal={closeModal} />
    </div>
  );
};

export default Contact;