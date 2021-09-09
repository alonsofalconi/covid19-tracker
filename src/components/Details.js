import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './Details.css';
import { filterData } from '../redux/details/details';

const Details = () => {
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(useLocation().search);
  const countryName = searchParams.get('country');
  const filteredCountry = useSelector((state) => state.covidData)
    .filter((country) => country[0] === countryName);

  if (filteredCountry.length !== 0) {
    dispatch(filterData({
      country: filteredCountry[0][1].name,
      todayCases: filteredCountry[0][1].today_confirmed,
      todayRecovered: filteredCountry[0][1].today_recovered,
      todayDeaths: filteredCountry[0][1].today_deaths,
      todayOpenCases: filteredCountry[0][1].today_open_cases,
      todayNewCases: filteredCountry[0][1].today_new_confirmed,
      todayNewRecovered: filteredCountry[0][1].today_new_recovered,
      todayNewDeaths: filteredCountry[0][1].today_new_deaths,
      todayNewOpenCases: filteredCountry[0][1].today_new_open_cases,
    }));
  }

  const country = useSelector((state) => state.filteredData);

  return (
    <main>
      <div className="details-main-item">
        <div className="main-item-image" />
        <div className="main-item-name">
          <h2>{countryName}</h2>
        </div>
      </div>
      {
        Object.keys(country).length === 0
          ? <p className="no-data">NO DATA</p>
          : (
            <>
              <div className="details-top-divider">
                <p>{`${countryName} STATS`}</p>
              </div>
              <ul className="details-list">
                <li className="details-list-item">
                  <p>{`TODAY${String.fromCharCode(39)}S NEW CONFIRMED`}</p>
                  <p>{country.todayNewCases}</p>
                </li>
                <li className="details-list-item">
                  <p>{`TODAY${String.fromCharCode(39)}S NEW RECOVERED`}</p>
                  <p>{country.todayNewRecovered}</p>
                </li>
                <li className="details-list-item">
                  <p>{`TODAY${String.fromCharCode(39)}S NEW DEATHS`}</p>
                  <p>{country.todayNewDeaths}</p>
                </li>
                <li className="details-list-item">
                  <p>{`TODAY${String.fromCharCode(39)}S NEW OPEN CASES`}</p>
                  <p>{country.todayNewOpenCases}</p>
                </li>
                <li className="details-list-item">
                  <p>TOTAL CASES</p>
                  <p>{country.todayCases}</p>
                </li>
                <li className="details-list-item">
                  <p>TOTAL RECOVERED</p>
                  <p>{country.todayRecovered}</p>
                </li>
                <li className="details-list-item">
                  <p>TOTAL DEATHS</p>
                  <p>{country.todayDeaths}</p>
                </li>
                <li className="details-list-item">
                  <p>TOTAL OPEN CASES</p>
                  <p>{country.todayOpenCases}</p>
                </li>
              </ul>
            </>
          )
      }
    </main>
  );
};

export default Details;
