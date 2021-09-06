import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowCircleRight } from './assets/icons/arrow-circle-right.svg';

const HomeCountryCard = (props) => {
  const { country, newConfirmed } = props;

  return (
    <li key={country} className="country-card-item">
      <div><ArrowCircleRight /></div>
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
