import React, { useState, useEffect } from 'react';
import Characters from '../components/List/Characters';
import { fetchCharacters } from '../services/api';

const CharactersViewer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(characters => setCharacters(characters));
  }, []);
console.log(characters);
  return (
    <>
      <Characters characters={characters}/>
    </>
  );
};

export default CharactersViewer;
