const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <div>
            <img
              src={person.image ? person.image.medium : '/not-found-image.png'}
              alt={person.name}
            />
          </div>

          <div>
            {person.name} | {character?.name} {voice && '| Voiceover'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
//https://gist.github.com/shelooks16/d0d533d129f1469e5ccb28fb7337959f
