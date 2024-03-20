import ShowCard from './ShowCard';
import { useStarredShows } from '../../lib/useStarredShows';
import { FlexGrid } from '../common/FlexGrid';

{
  /*const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persistedValue = localStorage.getItem(localStorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initial;
  });
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);
  return [state, dispatch];
  //upper code means the starred value stored in local storage  when we refresh the page the vlaue is still there?
};*/
}

{
  /*const starredShowReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.ShowId);
    case 'UNSTAR':
      return currentStarred.filter(ShowId => ShowId !== action.ShowId);
    default:
      return currentStarred;
    //this logic is responsible of adding and removing the show id form the list of starred show depending on the dispatched of action  this code is advance
  }
};*/
}

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();
  {
    /*const [starredShows, dispatchedStarred] = usePersistedReducer(
    starredShowReducer,
    [],
    'starredShows'
  );
  // here the code is the when you clikc on star me button it will handle the logic .*/
  }

  const onStarMeClick = ShowId => {
    //this code means the star button is the showid function .
    const isStarred = starredShows.includes(ShowId); // This information can be used in your application logic to determine whether a particular show is starred or not.
    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', ShowId });
    } else {
      dispatchStarred({ type: 'STAR', ShowId });
    }
  };
  //meaning ofthis this code is if the code is starred it will unstar it and if its is unstarred it star it . and give them theshow id .
  return (
    <FlexGrid>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id} // this whole code is for the apidata that has been collected form the tv maze api this is how you import data form it by this code .
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png' //if there is a image ? (meaning is it i truthy ) then show image :(meaning otherwise ) show image not found
          }
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};
export default ShowGrid;
