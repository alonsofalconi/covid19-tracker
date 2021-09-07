import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './Details.css';
import { filterData } from '../redux/details/details';

const Details = () => {
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(useLocation().search);
  const countryName = searchParams.get('country');
  const country = useSelector((state) => state.covidData)
    .filter((country) => country[0] === countryName);

  if (country.length !== 0) {
    dispatch(filterData(country[0][1]));
  }

  return (
    <main>
      <div className="details-main-item">
        <div className="main-item-image" />
        <div className="main-item-name">
          <h2>{countryName}</h2>
        </div>
      </div>
    </main>
  );
};

export default Details;
