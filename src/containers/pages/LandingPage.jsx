import React from "react";
import Profile from "components/views/LandingContent/Section/Profile";
import Dokumentasi from "components/views/LandingContent/Section/Dokumentasi";
import Footer from "components/views/LandingContent/Section/Footer";
import Home from "components/views/LandingContent/Section/Home";
import TopNavbar from "components/views/LandingContent/Nav/TopNavbar";

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
