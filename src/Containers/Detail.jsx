import React, { useState, useEffect } from 'react';
import { fetchCharacterDetail } from '../services/api';
import { useParams } from 'react-router-dom';
import Character from '../components/Detail/Character';

const Detail = () => {
  //const Detail = ({ match }) => 
  const [character, setCharacter] = useState({});
  let { id } = useParams();
  //*where I actually fetch the character*
  useEffect(() => {
    fetchCharacterDetail(id)
    //fetchCharcterDetail(match.params.id)
      .then(character => setCharacter(character));
  }, []);

  return (
    <>
      <Character 
        name={character.name}
        image={character.image}
      />
    </>
  );
};

export default Detail;
