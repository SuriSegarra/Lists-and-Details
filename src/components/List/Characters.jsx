
import React from 'react';
import Character from '../Detail/Character';
import PropTypes from 'prop-types';

const Characters = ({ characters }) => {
  const charactersList = characters.map(character => (
    <li key={character.id}>
      <Character {...characters}/>
    </li>
  ));
  return (
    <ul>
      {charactersList}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({

    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired

};

export default Characters;
