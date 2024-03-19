import { useReducer, useEffect } from 'react';

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persistedValue = localStorage.getItem(localStorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initial;
  });
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);
  return [state, dispatch];
  //upper code means the starred value stored in local storage  when we refresh the page the vlaue is still there?
};

const starredShowReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.ShowId);
    case 'UNSTAR':
      return currentStarred.filter(ShowId => ShowId !== action.ShowId);
    default:
      return currentStarred;
    //this logic is responsible of adding and removing the show id form the list of starred show depending on the dispatched of action  this code is advance
  }
};
export const useStarredShows = () => {
  return usePersistedReducer(starredShowReducer, [], 'starredShows');
  // here the code is the when you clikc on star me button it will handle the logic .
};
