import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import styles from './styles.css';

const AppBar = ({ toggleModal }) => (
  <header className={styles.header}>
    <nav className={styles.container}>
      <Navigation toggleModal={toggleModal} />
    </nav>
  </header>
);

AppBar.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default AppBar;
