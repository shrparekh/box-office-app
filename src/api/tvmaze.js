const BASE_URL = 'https://api.tvmaze.com';

const apiGet = async queryString => {
  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = await response.json();
  return body;
};
export const searchForShows = query => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = query => apiGet(`/search/people?q=${query}`);
export const getShowById = ShowId =>
  apiGet(`/shows/${ShowId}?embed[]=seasons&embed[]=cast`);

export const getShowsByIds = async showIds => {
  const promises = showIds.map(showId => apiGet(`/shows/${showId}`));
  return Promise.all(promises);
};
// THOS CODE IS USED WHEN ALL THE DATA IS WHICH IS IN ARRY ARE CALLED TOGTHER  AND IT HELPS TO CALL SPECIFIC FUNTION WHEN IN USE
//Promise.all(). The function returns a single promise that resolves with an array of results once all API calls are completed..
