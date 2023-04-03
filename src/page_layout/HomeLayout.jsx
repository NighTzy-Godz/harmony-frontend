import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar/Navbar";
import React from "react";

const HomeLayout = ({ currUser }) => {
  return (
    <React.Fragment>
      <Navbar currUser={currUser} />
      <Outlet />
    </React.Fragment>
  );
};

export default HomeLayout;
