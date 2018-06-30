import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';


const FullName = ({ fullname, title, general}) => {

    const fn = [title && styles.full_name_title, general && styles.full_name_general].join(' ');
    return(
    <div className={fn}>
        {fullname}
    </div>
    )
};


FullName.propTypes = {
    fullname: PropTypes.string.isRequired,
    title: PropTypes.bool,
    general: PropTypes.bool
}

FullName.defaultProps = {
    fullname: "Андрій Зелений",
    title: false,
    general: false
}

export default FullName;