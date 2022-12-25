import React, { useState } from 'react';
import Profile from 'components/views/LandingContent/Sections/Profile';
import Dokumentasi from 'components/views/LandingContent/Sections/Dokumentasi';
import Footer from 'components/views/LandingContent/Sections/Footer';
import Home from 'components/views/LandingContent/Sections/Home';
import TopNavbar from 'components/views/LandingContent/Nav/TopNavbar';
import { Box, Backdrop } from '@mui/material';

export default function LandingPage() {
  const [
    imageBackdrop, 
    //setImageBackdrop
  ] = useState("");
  const [isOpenImageBackdrop, setIsOpenImageBackdrop] = useState(false);

  return (
    <>
      <TopNavbar />
      <Home />
      <Profile withHeader />
      <Dokumentasi />
      <Footer />
      <Backdrop
            sx={{ color: '#fff', zIndex: 100, padding: '2vw' }}
            open={isOpenImageBackdrop}
            onClick={() => {
              document.body.style = '';
              setIsOpenImageBackdrop(false);
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${imageBackdrop})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </Backdrop>
    </>
  );
}
