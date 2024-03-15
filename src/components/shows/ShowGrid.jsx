import ShowCard from './ShowCard';

const ShowGrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id} // this whole code is for the apidata that has been collected form the tv maze api this is how you import data form it by this code .
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png' //if there is a image ? (meaning is it i truthy ) then show image :(meaning otherwise ) show image not found
          }
          summary={data.show.summary}
        />
      ))}
    </div>
  );
};
export default ShowGrid;
