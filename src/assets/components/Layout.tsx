import { Navbar } from "./Navbar";
import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
