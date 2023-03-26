import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../assets/css/profile_bar.css";

const ProfileBar = ({ currLinkId, profile_links, user, onLinkChange }) => {
  const { profile_pic, full_name, email } = user;
  console.log(currLinkId);
  const renderProfileLinks = profile_links.map((item) => {
    return (
      <li
        className={item.id === currLinkId ? "active" : ""}
        key={item.id}
        onClick={() => onLinkChange(item.id)}
      >
        <i className={item.icon}></i> {item.name}
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
          {" "}
          <Link to="/user/logout">
            <i className="fa-solid fa-right-from-bracket"></i>Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileBar;
