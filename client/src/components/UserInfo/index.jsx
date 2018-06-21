import React from 'react';
import PropTypes from 'prop-types';
import Ava from "../shared/Ava";
import styles from './styles.css';

const UserInfo = ({name}) => (
  <div className={styles.user_info}>
    <div className={styles.name}>{name}</div>
    <div className={styles.ava}>
      <Ava/>
    </div>
  </div>
);

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserInfo;
