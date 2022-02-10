import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = (props) => {
  const user = localStorage.getItem("id");
  const handleClick = () => {
    localStorage.clear("id");
    window.location.reload(false);
  };

  return (
    <nav>
      <ul>
        {!user && (
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        )}
        <li className="nav-item">
          <Link to="/categories">Categories</Link>
        </li>
        {user && (
          <li className="nav-item sign" onClick={handleClick}>
            Sign out
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
