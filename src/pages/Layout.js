import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Link></Link>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
