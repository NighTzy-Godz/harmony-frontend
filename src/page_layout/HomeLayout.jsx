import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="">
      Navbarhere
      <Outlet />
    </div>
  );
};

export default HomeLayout;
