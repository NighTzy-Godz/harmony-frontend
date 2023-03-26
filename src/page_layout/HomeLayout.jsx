import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar/Navbar";

const HomeLayout = ({ currUser }) => {
  return (
    <div className="">
      <Navbar currUser={currUser} />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
