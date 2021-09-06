import { useLocation } from 'react-router-dom';
import './Header.css';
import { ReactComponent as ChevronLeftIcon } from './assets/icons/chevron-left.svg';

const Header = () => {
  const location = useLocation();

  return (
    <header className="main-header">
      <div>
        {location.pathname === '/details'
          ? <ChevronLeftIcon className="chevron-left-icon" />
          : null}
      </div>
      <div>
        <h1 className="main-header-title">COVID-19 Tracker</h1>
      </div>
      <div />
    </header>
  );
};

export default Header;
