import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import { TextCenter } from '../components/common/TextCenter';

const Home = () => {
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    // ⬇️ disabled as long as the filter is undefined or empty            (THIS CODE IS ALSO SAME AS THE CODE THAT IS COMMENTED BELOW .)
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter, //it is a condition when we aplly the filter only then it will fetch the logic .(meaning of enabled)
    //refetchOnWindowFocus: false, // it wont refetch the data agian and again .
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
  };
  // (YOU ALSO CAN WRITE THIS BOTTM CODE INSTEAD OF THE UPPER CODE . THE UPPER CODE IS SHORT TO WRITE .)
  // const [apiData, setApiData] = useState(null);
  //const [apiDataError, setApiDataError] = useState(null);

  //  { try {
  //   setApiDataError(null);
  // {
  // /* this is used for after the error hs oocured you can start typing agian */
  // }

  //if (searchOption === 'shows') {
  //const result = await searchForShows(q); // this code is for  when the radio button is on shows it will result for show and if it is on actors it will show foractors

  //setApiData(result);
  //} else {
  //const result = await searchForPeople(q);
  //setApiData(result);
  //}
  //} catch (error) {
  //setApiDataError(error); //aslo for error code ans try catch i ofr the error
  // }

  const renderApiData = () => {
    if (apiDataError) {
      return <TextCenter>Error occured : {apiDataError.message}</TextCenter>; //this code is for error ahowing
    }
    if (apiData?.length === 0) {
      return <TextCenter>No results</TextCenter>; // this code is used when you pass something gibrish and it have a error so this code is for it and it will give no result found
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
