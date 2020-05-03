export const fetchCharacters = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then(res => res.json());
};

export const fetchCharacterDetail = id => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json())
    .then(json => ({
      name: json.name,
      image: json.image
    }));
};
