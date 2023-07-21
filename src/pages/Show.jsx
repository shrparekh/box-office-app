import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getShowById } from '../api/tvmaze';
const Show = () => {
  const { ShowId } = useParams();
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(ShowId);
        setShowData(data);
      } catch (err) {
        setShowError(err);
      }
    }
    fetchData();
  }, [ShowId]);
  if (showError) {
    return <div>We have an error: {showError.message} </div>;
  }
  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }
  return <div>Data is loading</div>;
};
export default Show;
