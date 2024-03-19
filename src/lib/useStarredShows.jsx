import { useReducer, useEffect } from 'react';

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  //meaning of usepersistedrducer means :It's often used in React applications where you want to preserve certain parts of the application's state even if the page is refreshed or the user navigates away from the page and returns later.
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
    // summary, this reducer handles actions related to starring and unstarring shows. When a 'STAR' action is dispatched, it adds the show ID to the list of starred shows. When an 'UNSTAR' action is dispatched, it removes the show ID from the list of starred shows. If the action type is unknown, it returns the current state without any changes)
  }
};
export const useStarredShows = () => {
  return usePersistedReducer(starredShowReducer, [], 'starredShows');
  // here the code is the when you clikc on star me button it will handle the logic .
};
