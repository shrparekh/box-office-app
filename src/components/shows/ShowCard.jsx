const ShowCard = ({ name, image, id, summary, onStarMeClick }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'no description';
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summaryStripped}</p>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          {' '}
          {/* to show the show page on new tab */}
          Read more{' '}
        </a>
        <button type="button" onClick={() => onStarMeClick(id)}>
          Star me{' '}
        </button>
      </div>
    </div>
  );
};
export default ShowCard;
// tjis is the regular way to display data formthe api
// showcard showgrid actorcard actorgrid
