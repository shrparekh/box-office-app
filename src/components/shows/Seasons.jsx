const Seasons = ({ seasons }) => {
  return (
    <div>
      <p>Seasons in total: {seasons.length}</p> {/*because it is in the arry*/}
      <p>
        Episodes in total:
        {seasons.reduce((sum, season) => sum + season.episodeorder, 0)}{' '}
        {/* to take out only episodes form the all array*/}
      </p>
      <div>
        {seasons.map(season => (
          <div key={season.id}>
            {' '}
            {/* to use each element from seasons*/}
            <p>Seasons {season.number}</p>
            <p>Episodes : {season.episodeorder}</p>
            <div>
              Aired : {season.premiereDate} - {season.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Seasons;
