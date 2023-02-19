import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Container = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
