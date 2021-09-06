/* eslint-disable */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Homepage.css';
import { getData } from '../redux/covidData/covidData';

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
        {data.map((d) => (
          <li key={d[0]}>
            <Link to={{
              pathname: '/details',
              search: d[0],
            }}
            >
              {d[0]}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Homepage;
