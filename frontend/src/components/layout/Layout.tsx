import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Layout;
