import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_OPEN } from 'utils/redux/action';
import Profile from 'components/views/LandingContent/Sections/Profile';
import { Box } from '@mui/material';

export default function ProfilPondokPage() {
  const dispatch = useDispatch();
  const sidebarReducer = useSelector((state) => state.sidebarReducer);

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'profile-pondok') > -1)) {
      dispatch({ type: MENU_OPEN, id: 'profile-pondok' });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Profile withHeader={false} />
    </Box>
  );
}
