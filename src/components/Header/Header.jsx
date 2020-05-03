import React from 'react';
import image from './image/arnold.png';
import styles from './Header.css';

const Header = () => (
  <div className={styles.Header}>
    <img src={image} alt=''/>
  </div>
);

export default Header;

