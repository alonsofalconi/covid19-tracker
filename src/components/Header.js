import './Header.css';

const Header = () => {
  const backButton = 0;

  return (
    <header className="main-header">
      <div>{backButton}</div>
      <div>
        <h1 className="main-header-title">COVID-19 Tracker</h1>
      </div>
      <div />
    </header>
  );
};

export default Header;
