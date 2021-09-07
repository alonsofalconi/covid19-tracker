import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './HomeCountryCard.css';
import { ReactComponent as ArrowCircleRight } from './assets/icons/arrow-circle-right.svg';

const HomeCountryCard = (props) => {
  const { country, newConfirmed } = props;

  return (
    <li key={country} className="country-card-item">
      <div className="home-arrow-icon">
        <Link to={{ pathname: '/details', search: `country=${country}` }}>
          <ArrowCircleRight />
        </Link>
      </div>
      <div>
        <Link to={{ pathname: '/details', search: `country=${country}` }}>
          {country}
          {newConfirmed}
        </Link>
      </div>
    </li>
  );
};

HomeCountryCard.propTypes = {
  country: PropTypes.string.isRequired,
  newConfirmed: PropTypes.number.isRequired,
};

export default HomeCountryCard;
