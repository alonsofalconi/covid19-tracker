import { useLocation, useHistory } from 'react-router-dom';
import './Header.css';
import { ReactComponent as ChevronLeftIcon } from './assets/icons/chevron-left.svg';

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <header className="header">
      {location.pathname === '/details'
        ? <button type="button" aria-label="Go back" className="header-back-icon" onClick={() => history.goBack()}><ChevronLeftIcon /></button>
        : <div />}
      <div>
        <h1 className="header-title">coronavirus tracker</h1>
      </div>
      <div />
    </header>
  );
};

export default Header;
