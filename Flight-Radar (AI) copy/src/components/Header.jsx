import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  return (
    <header>
      <Link to="/" className="logo">
        <img src="/logo.webp" alt="logo" width={40} />
        <h2>Flight Radar India</h2>
      </Link>

      <div className="buttons">
        <NavLink to="/">
          <button>Map</button>
        </NavLink>
        <NavLink to="/list">
          <button>List</button>
        </NavLink>
      </div>

      <h3>
        {isLoading ? (
          "Searching for Flights..."
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          `${flights.length} Flights Found`
        )}
      </h3>
    </header>
  );
};

export default Header;
