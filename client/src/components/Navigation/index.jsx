import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routing';
import styles from './styles.css';

const navLinks = [
  { path: routes.logout, text: 'Выйти' }
];

const Navigation = ({ toggleModal }) => (
  <ul className={styles.nav}>
    <li>
      <button className={styles.link} onClick={toggleModal}>Профиль</button>
    </li>
    {navLinks.map(({ path, text }) => (
      <li key={path}>
        <NavLink
          className={styles.link}
          activeClassName={styles.active}
          to={path}>
          {text}
        </NavLink>
      </li>
    ))}
  </ul>
);

Navigation.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default Navigation;
