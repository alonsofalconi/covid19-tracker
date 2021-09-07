import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { filterData } from '../redux/details/details';

const Details = () => {
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(useLocation().search);
  dispatch(filterData(searchParams.get('country')));

  const history = useHistory();

  return (
    <>
      <h1>Details</h1>
      <button type="button" onClick={() => history.goBack()}>Go Back</button>
    </>
  );
};

export default Details;
