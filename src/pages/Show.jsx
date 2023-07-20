import { useParams } from 'react-router-dom';
const Show = () => {
  const { ShowId } = useParams();
  return <div>Show page for show {ShowId}</div>;
};
export default Show;
