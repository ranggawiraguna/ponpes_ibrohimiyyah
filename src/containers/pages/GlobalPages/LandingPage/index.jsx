import Profile from 'components/views/LandingContent/Sections/Profile';
import Dokumentasi from 'components/views/LandingContent/Sections/Dokumentasi';
import Footer from 'components/views/LandingContent/Sections/Footer';
import Home from 'components/views/LandingContent/Sections/Home';
import TopNavbar from 'components/views/LandingContent/Nav/TopNavbar';
import { useEffect, useState } from 'react';
import { Box, Backdrop } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_IMAGE_BACKDROP } from 'utils/redux/action';
import Carousel from 'react-material-ui-carousel';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from 'config/firebase';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router';
import CloseIcon from '@mui/icons-material/Close';

export default function LandingPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const landingReducer = useSelector((state) => state.landingReducer);

  const [documentations, setDocumentations] = useState([]);

  useEffect(() => {
    if (location.pathname === '/article') {
      navigate('/');
    }
    const listenerDocumentations = onSnapshot(collection(db, 'dokumentasi'), async (snapshot) =>
      setDocumentations(
        await Promise.all(
          snapshot.docs.map((document) => ({ id: document.id, judul: document.data().judul, file_url: document.data().file_url }))
        )
      )
    );

    return () => {
      listenerDocumentations();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () => (document.body.style = landingReducer.isOpenImageBackdrop ? 'overflow-y : hidden' : ''),
    [landingReducer.isOpenImageBackdrop]
  );

  return params.id ? (
    <>
      <TopNavbar hideMenu />
      <Outlet />
    </>
  ) : (
    <>
      <TopNavbar />
      <Home />
      <Profile withHeader />
      <Dokumentasi withHeader />
      <Footer />
      <Backdrop
        sx={{ color: '#fff', zIndex: 1000, padding: '2vw', width: '100vw', height: '100vh', boxSizing: 'border-box', position: 'fixed' }}
        open={landingReducer.isOpenImageBackdrop}
      >
        <Box
          sx={{
            position: 'fixed',
            right: 23,
            top: 13,
            cursor: 'pointer',
            zIndex: 10000,
            backgroundColor: '#404040',
            opacity: 0.8,
            borderRadius: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 1
          }}
          onClick={() => dispatch({ type: TOGGLE_IMAGE_BACKDROP, status: false, image: '' })}
        >
          <CloseIcon sx={{ fontSize: 25 }} />
        </Box>
        <Carousel
          index={documentations.map((_) => _.file_url).indexOf(landingReducer.imageBackdrop)}
          sx={{ width: '100%', height: '100%' }}
          autoPlay={false}
          duration={100}
          navButtonsAlwaysVisible={true}
        >
          {documentations.map((_) => (
            <Box
              key={_.id}
              sx={{
                width: '100vw',
                height: '100vh',
                boxSizing: 'border-box',
                padding: '10% 20% 15% 15%'
              }}
            >
              <Box
                id="image-frame"
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${_.file_url})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </Box>
          ))}
        </Carousel>
      </Backdrop>
    </>
  );
}
