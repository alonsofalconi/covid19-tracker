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

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getData());
    }
  }, []);

  const randomNum = Math.round(Math.random() * data.length);

  const handleSelection = (e) => {
    dispatch(filterCountries(e.target.value));
  };

  const countries = useSelector((state) => state.filterCountry);

  return (
    <main>
      <ul className="home-list">
        {
          data.length === 0
            ? null
            : (
              <li className="home-main-item">
                <div className="main-item-image" />
                <div className="main-item-name">
                  <Link to={{ pathname: '/details', search: `country=${data[randomNum][0]}` }}>{data[randomNum][0]}</Link>
                  <p className="main-item-info">{`${data[randomNum][1].today_new_confirmed} new cases`}</p>
                </div>
              </li>
            )
        }
        {
          data.length === 0
            ? null
            : (
              <div className="home-top-divider">
                <p>STATS BY COUNTRY</p>
                <select value={countries} onChange={(e) => handleSelection(e)}>
                  <option value="all">All</option>
                  <option value="0">0 - 100</option>
                  <option value="101">101 - 500</option>
                  <option value="501">501 - 1000</option>
                  <option value="1000">1000+</option>
                </select>
              </div>
            )
        }
        {data.map((d) => (
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
