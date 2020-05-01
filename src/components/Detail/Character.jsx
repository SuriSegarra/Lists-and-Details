import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ name, image }) => (
  <div className={styles.Character}>
    <h2>{name}</h2>
    <img src={image}/>
  
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
