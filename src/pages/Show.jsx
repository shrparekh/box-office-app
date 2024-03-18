import { useParams } from 'react-router-dom'; // use params are the hooks that are used for the dynamic params from the curretn url that were matched by the route path

import { useQuery } from '@tanstack/react-query';
import { getShowById } from '../api/tvmaze';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';

/*const useShowById = ShowId => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(ShowId); // thius is try andcatch logic to fetchthe data and find error .   // this is the oldcode for fethcing 
        setShowData(data);
      } catch (err) {
        setShowError(err);
      }
    }
    fetchData();
  }, [ShowId]);
  return { showData, showError };
};*/

const Show = () => {
  const { ShowId } = useParams();
  //const { showData, showError } = useShowById(ShowId);
  const { data: showData, error: showError } = useQuery({
    // new code for fetch data using library of fetching data this iscode for fethicng data you can usethis.
    queryKey: ['show', ShowId],
    queryFn: () => getShowById(ShowId),
  });

  if (showError) {
    return <div>We have an error: {showError.message} </div>; // this code is for the showing of the data and if the data is not there then show erroe
  }
  if (showData) {
    return (
      <div>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>

        <div>
          <div>
            <h2>Cast</h2>
            <Cast cast={showData._embedded.cast} />
          </div>
        </div>
      </div>
    );
  }
  return <div>Data is loading</div>;
};
export default Show;
