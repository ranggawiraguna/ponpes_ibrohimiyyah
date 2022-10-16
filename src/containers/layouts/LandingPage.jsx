import React from "react";
import TopNavbar from "../../components/Nav/TopNavbar";
import Home from "../../containers/sections/Home";
import Profile from "../../containers/sections/Profile";
import Dokumentasi from "../../containers/sections/Dokumentasi";
import Footer from "../../containers/sections/Footer";

export default function LandingPage() {
  return (
    <>
      <TopNavbar />
      <Home />
      <Profile />
      <Dokumentasi />
      <Footer />
    </>
  );
}
