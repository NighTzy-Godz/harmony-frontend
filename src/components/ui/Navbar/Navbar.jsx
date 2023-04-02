import { Link, NavLink } from "react-router-dom";
import "../../../assets/css/navbar.css";
import LinkButton from "../Button/LinkButton";

const Navbar = ({ currUser }) => {
  const getProfileLink = () => {
    if (currUser.role === "Patient") return "patient";
    return "doctor";
  };

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
                to="/all-doctors"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Doctors
              </NavLink>
            </li>

            {currUser && (
              <li>
                <NavLink
                  to="/patient/create-appointment"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Create Appointment
                </NavLink>
              </li>
            )}
          </ul>

          <div className="nav_auth">
            {!currUser ? (
              <LinkButton label="Sign In" path="/patient/login" />
            ) : (
              <LinkButton
                label="Profile"
                path={`/${getProfileLink()}/settings`}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
