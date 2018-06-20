import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Button = ({ type, text, primary, facebook, google, linkedin, social, onClick }) => {
  const cls = [ styles.button,
                primary && styles.primary,
                facebook && styles.facebook,
                google && styles.google,
                linkedin && styles.linkedin,
                social && styles.social
              ].join(' ');

  return (
    <button type={type} className={cls} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  social: PropTypes.bool,
  facebook: PropTypes.bool,
  google: PropTypes.bool,
  linkedin: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  primary: false,
  social: false,
  facebook: false,
  google: false,
  linkedin: false,
  onClick: () => {},
};

export default Button;
