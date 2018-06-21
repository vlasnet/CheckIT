import React from 'react';
import styles from './styles.css';

const Ava = () => (
  <a href="/profile" className={styles.user_ava}>
    <div className={styles.circle}/>
    <div className={styles.semicircle}/>
  </a>
);

export default Ava;
