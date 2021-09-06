import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/covidData/covidData';
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

  return (
    <main>
      <ul className="home-list">
        <li>{data.length === 0 ? null : data[Math.round(Math.random() * data.length)][0]}</li>
        <div>{data.length === 0 ? null : <p>STATS BY COUNTRY</p>}</div>
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
