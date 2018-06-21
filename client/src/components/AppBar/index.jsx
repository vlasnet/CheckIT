import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import UserInfo from '../UserInfo';
import styles from './styles.css';

const AppBar = ({ toggleModal, name }) => (
  <header className={styles.header}>
    <nav className={styles.container}>
      <Navigation toggleModal={toggleModal} />
    </nav>
    <UserInfo name={name} />
  </header>
);

AppBar.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default AppBar;
