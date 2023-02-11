import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">PictureParadise</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src="favicon.ico" alt="menu-icon" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Popular</NavLink>
            </li>
            <li>
              <NavLink to="/now_playing">Now Playing</NavLink>
            </li>
            <li>
              <NavLink to="/toprated">Top Rated</NavLink>
            </li>
            <li>
              <NavLink to="/upcoming">Upcoming</NavLink>
            </li>
            <li>
              <NavLink to="/search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
