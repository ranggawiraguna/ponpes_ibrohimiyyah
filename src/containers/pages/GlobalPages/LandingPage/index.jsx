import React from 'react';
import Profile from 'components/views/LandingContent/Sections/Profile';
import Dokumentasi from 'components/views/LandingContent/Sections/Dokumentasi';
import Footer from 'components/views/LandingContent/Sections/Footer';
import Home from 'components/views/LandingContent/Sections/Home';
import TopNavbar from 'components/views/LandingContent/Nav/TopNavbar';

export default function LandingPage() {
  return (
    <>
      <TopNavbar />
      <Home />
      <Profile withHeader />
      <Dokumentasi />
      <Footer />
    </>
  );
}
