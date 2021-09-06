import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../redux/covidData/covidData';

const Homepage = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.covidData);

  useEffect(() => {
    if (Object.keys(data).length === 0) {
      dispatch(getData());
    }
  }, []);

  return (
    <>
      <h1>Homepage</h1>
      <Link to="/details">Details</Link>
    </>
  );
};

export default Homepage;
