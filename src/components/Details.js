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
    dispatch(filterData({
      country: country[0][1].name,
      todayCases: country[0][1].today_confirmed,
      todayRecovered: country[0][1].today_recovered,
      todayDeaths: country[0][1].today_deaths,
      todayNewCases: country[0][1].today_new_confirmed,
      todayNewRecovered: country[0][1].today_new_recovered,
      todayNewDeaths: country[0][1].today_new_deaths,
    }));
  }

  return (
    <main>
      <div className="details-main-item">
        <div className="main-item-image" />
        <div className="main-item-name">
          <h2>{countryName}</h2>
        </div>
      </div>
      {
        country.length === 0
          ? <p className="no-data">NO DATA</p>
          : <div className="details-top-divider"><p>{`${countryName} STATS`}</p></div>
      }
    </main>
  );
};

export default Details;
