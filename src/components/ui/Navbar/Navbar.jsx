import { Link, NavLink } from "react-router-dom";
import "../../../assets/css/navbar.css";
import LinkButton from "../Button/LinkButton";

const Navbar = () => {
  return (
    <nav className="mainNav">
      <div className="container">
        <div className="mainNav_container">
          <div className="logo">
            <Link to="/">Harmony</Link>
          </div>

          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alldoctors"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appoit"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Create Appointment
              </NavLink>
            </li>
          </ul>

          <div className="nav_auth">
            <LinkButton label="Sign In" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
