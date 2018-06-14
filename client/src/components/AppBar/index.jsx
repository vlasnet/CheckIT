import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import styles from './styles.css';

const AppBar = ({ toggleProfileModal }) => (
  <header className={styles.header}>
    <nav className={styles.container}>
      <Navigation toggleProfileModal={toggleProfileModal} />
    </nav>
  </header>
);

AppBar.propTypes = {
  toggleProfileModal: PropTypes.func.isRequired
};

export default AppBar;
