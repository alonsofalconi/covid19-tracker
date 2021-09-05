import { useHistory } from 'react-router-dom';

const Details = () => {
  const history = useHistory();

  return (
    <>
      <h1>Details</h1>
      <button type="button" onClick={() => history.goBack()}>Go Back</button>
    </>
  );
};

export default Details;
