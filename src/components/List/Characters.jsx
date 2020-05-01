
import React from 'react';
import Character from '../Detail/Character';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Characters.css';

const Characters = ({ characters }) => {
  const charactersList = characters.map(character => (
    <Link key={character._id} to={`/character/${character._id}`}>
      <li>
        <Character {...character}/>
      </li>
    </Link>
  ));
  return (
    <ul className={styles.Characters}>
      {charactersList}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({

    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired

};

export default Characters;
