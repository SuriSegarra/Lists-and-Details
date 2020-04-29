import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <div>
    <h2>{name}</h2>
    <img src={image}/>
  
  </div>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
