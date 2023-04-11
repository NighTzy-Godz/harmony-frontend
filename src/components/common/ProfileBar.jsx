import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../assets/css/profile_bar.css";

const ProfileBar = ({ profile_links, user }) => {
  const { profile_pic, full_name, email } = user;
  const renderProfileLinks = profile_links.map((item) => {
    if (!item.link)
      return (
        <li key={item.id} id="profile_no_link">
          {item.name}
        </li>
      );

    return (
      <li key={item.id}>
        <NavLink to={item.link}>
          <i className={item.icon}></i> {item.name}
        </NavLink>
      </li>
    );
  });

  return (
    <div className="profile_bar">
      <div className="profile_bar_img">
        <img src={profile_pic} alt="" />
      </div>
      <div className="profile_bar_user_details">
        <h1>{full_name}</h1>
        <p>{email}</p>
      </div>

      <ul>
        {renderProfileLinks}
        <li>
          <Link to="/logout">
            <i className="fa-solid fa-right-from-bracket"></i>Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileBar;
