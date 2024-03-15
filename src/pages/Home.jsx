import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiDataError(null);
      {
        /* this is used for after the error hs oocured you can start typing agian */
      }

      if (searchOption === 'shows') {
        const result = await searchForShows(q); // this code is for  when the radio button is on shows it will result for show and if it is on actors it will show foractors

        setApiData(result);
      } else {
        const result = await searchForPeople(q);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error); //aslo for error code ans try catch i ofr the error
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured : {apiDataError.message}</div>; //this code is for error ahowing
    }
    if (apiData?.length === 0) {
      return <div>No results</div>; // this code is used when you pass something gibrish and it have a error so this code is for it and it will give no result found
    }
    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} /> // this code is ha been cut to shoirt form because thier corresponding grid .     //const response = await fetch( `https://api.tvmaze.com/search/shows?=$(searchstr)`);const body =await response,json() (this is tofetch data from api)
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
