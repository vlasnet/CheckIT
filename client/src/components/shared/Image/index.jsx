import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Image = ({ width, height, src, alt, wrapperStyles }) => (
  <div className={styles.wrapper} style={{width, height, ...wrapperStyles }}>
    <img className={styles.image} src={src} alt={alt} />
  </div>
);

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  wrapperStyles: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]))
};

Image.defaultProps = {
  width: 50,
  height: 50,
  alt: '',
  wrapperStyles: {}
};

export default Image;
