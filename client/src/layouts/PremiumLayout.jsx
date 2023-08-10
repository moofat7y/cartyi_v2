import React from "react";
import NavBar from "../components/premium/navbar/NavBar";
import { Outlet } from "react-router-dom";

const PremiumLayout = () => {
  return (
    <>
      <NavBar />
      <main className="pt-5">
        <Outlet />
      </main>
    </>
  );
};

export default PremiumLayout;
