import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Image = ({ width, height, src, alt, wrapperExtraClasses }) => (
  <div className={`${styles.wrapper} ${wrapperExtraClasses}`} style={{ width, height }}>
    <img className={styles.image} src={src} alt={alt} />
  </div>
);

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  wrapperExtraClasses: PropTypes.string
};

Image.defaultProps = {
  width: 50,
  height: 50,
  alt: '',
  wrapperExtraClasses: ''
};

export default Image;
