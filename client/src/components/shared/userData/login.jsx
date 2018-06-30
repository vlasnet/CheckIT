import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';




const Login = ({login}) => (
    <div className={styles.login}>{login}
    </div>
);


Login.propTypes = {
    login: PropTypes.string.isRequired
}

Login.defaultProps = {
    login: "Andrew85"
}

export default Login;