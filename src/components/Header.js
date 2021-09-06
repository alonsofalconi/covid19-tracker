import { useLocation, useHistory } from 'react-router-dom';
import './Header.css';
import { ReactComponent as ChevronLeftIcon } from './assets/icons/chevron-left.svg';

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <header className="main-header">
      {location.pathname === '/details'
        ? <button type="button" aria-label="back" className="main-header-back-icon" onClick={() => history.goBack()}><ChevronLeftIcon className="chevron-left-icon" /></button>
        : <div />}
      <div>
        <h1 className="main-header-title">COVID-19 Tracker</h1>
      </div>
      <div />
    </header>
  );
};

export default Header;
