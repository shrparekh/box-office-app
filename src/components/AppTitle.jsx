export default function AppTitle(props) {
  const {
    title = 'BOX OFFICE',
    subtitle = 'ARE YOU LOOKING FOR A MOVIE OR AN ACTOR  ',
  } = props;

  /* default value for the arguments */

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
