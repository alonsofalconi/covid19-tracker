import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../redux/homepage/homepage';
import { filterCountries } from '../redux/filter/filter';
import './Homepage.css';
import HomeCountryCard from './HomeCountryCard';

const Homepage = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.covidData);
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getData());
    }
  }, []);

  const handleSelection = (e) => {
    dispatch(filterCountries({ value: e.target.value, data }));
  };

  const dataToUse = countries.filtered.length === 0 ? data : countries.filtered;
  const randomNum = Math.round(Math.random() * dataToUse.length);

  return (
    <main>
      <ul className="home-list">
        {
          dataToUse.length === 0
            ? null
            : (
              <li className="home-main-item">
                <div className="main-item-image" />
                <div className="main-item-name">
                  <Link to={{ pathname: '/details', search: `country=${dataToUse[randomNum][0]}` }}>{dataToUse[randomNum][0]}</Link>
                  <p className="main-item-info">{`${dataToUse[randomNum][1].today_new_confirmed} new cases`}</p>
                </div>
              </li>
            )
        }
        {
          dataToUse.length === 0
            ? null
            : (
              <div className="home-top-divider">
                <p>STATS BY COUNTRY</p>
                <label htmlFor="filter-select">
                  Filter
                  <select value={countries.value} onChange={(e) => handleSelection(e)} id="filter-select">
                    <option value="all">All</option>
                    <option value="0">0 - 100</option>
                    <option value="101">101 - 500</option>
                    <option value="501">501 - 1000</option>
                    <option value="1000">1000+</option>
                  </select>
                </label>
              </div>
            )
        }
        {dataToUse.map((d) => (
          <HomeCountryCard
            key={d[0]}
            country={d[0]}
            newConfirmed={d[1].today_new_confirmed}
          />
        ))}
      </ul>
    </main>
  );
};

export default Homepage;
