import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../redux/homepage/homepage';
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
        {data.length === 0 ? null : <div className="home-top-divider"><p>STATS BY COUNTRY</p></div>}
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
