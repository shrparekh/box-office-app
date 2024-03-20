import { Link, useParams } from 'react-router-dom'; // use params are the hooks that are used for the dynamic params from the curretn url that were matched by the route path
//if you want to use navigate button then you have to put usenavigation in reactrouterdom
import { useQuery } from '@tanstack/react-query';
import { getShowById } from '../api/tvmaze';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';
import styled from 'styled-components';
import { TextCenter } from '../components/common/TextCenter';

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
  /* const navigateTo = useNavigate();
  const onGoBack = () => {
    navigateTo('/');
  };      this isthe part of the code for button navigation form show page to home page */

  if (showError) {
    return <TextCenter>We have an error: {showError.message} </TextCenter>; // this code is for the showing of the data and if the data is not there then show erroe
  }
  if (showData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          {' '}
          <Link to="/">GO BACK TO HOME</Link>
        </BackHomeWrapper>

        {/* THIS IS USED TO LINK BACK TO HOME PAGE FROM THE SHOW PAGE */}
        {/*  <button type="button" onClick={onGoBack}>
          go back to home{' '}
        </button>               this is to part of button navigation*/}
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <InfoBlock>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </InfoBlock>
        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }
  return <TextCenter>Data is loading</TextCenter>;
};
export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
