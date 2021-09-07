import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { filterData } from '../redux/details/details';

const Details = () => {
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(useLocation().search);
  const country = useSelector((state) => state.covidData).filter((country) => country[0] === searchParams.get('country'));

  if (country.length !== 0) {
    dispatch(filterData(country[0][1]));
  }

  const history = useHistory();

  return (
    <>
      <h1>Details</h1>
      <button type="button" onClick={() => history.goBack()}>Go Back</button>
    </>
  );
};

export default Details;
