import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const HomeCountryCard = (props) => {
  const { country, newConfirmed } = props;

  return (
    <li key={country} className="country-card-item">
      <Link to={{ pathname: '/details', search: `country=${country}` }}>
        {country}
        {newConfirmed}
      </Link>
    </li>
  );
};

HomeCountryCard.propTypes = {
  country: PropTypes.string.isRequired,
  newConfirmed: PropTypes.number.isRequired,
};

export default HomeCountryCard;
