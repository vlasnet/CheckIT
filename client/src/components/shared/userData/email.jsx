import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';



const Email = ({email}) => (
    <div className={styles.email}>
        {email}
    </div>
);


Email.propTypes = {
    email: PropTypes.string.isRequired
}

Email.defaultProps = {
    email: "andriizelenni@gmail.com"
}

export default Email;