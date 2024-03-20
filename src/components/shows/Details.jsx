import styled from 'styled-components';
const Details = props => {
  const { status, premiered, network } = props;
  return (
    <DetailsWrapper>
      <p>status : {status}</p>
      <p>
        premiered: {premiered} {!!network && `on ${network.name}`}
      </p>
    </DetailsWrapper>
  );
};
export default Details;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;
