import { useParams } from 'react-router-dom'; // use params are the hooks that are used for the dynamic params from the curretn url that were matched by the route path

import { useQuery } from '@tanstack/react-query';
import { getShowById } from '../api/tvmaze';

{
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
}
const Show = () => {
  const { ShowId } = useParams();
  //const { showData, showError } = useShowById(ShowId);
  const { data: showError, error: showData } = useQuery({
    // new code for fetch data using library of fetching data this iscode for fethicng data you can usethis.
    queryKey: ['show', ShowId],
    queryfn: () => getShowById(ShowId),
  });

  if (showError) {
    return <div>We have an error: {showError.message} </div>; // this code is for the showing of the data and if the data is not there then show erroe
  }
  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }
  return <div>Data is loading</div>;
};
export default Show;
