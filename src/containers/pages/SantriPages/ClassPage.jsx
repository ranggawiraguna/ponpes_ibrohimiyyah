import { Box, Typography, styled, Grid, Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_OPEN } from 'utils/redux/action';

const PageRoot = styled(Box)(({ theme }) => ({
  padding: 20,
  display: 'grid',
  alignItems: 'stretch',
  gap: 20,
  gridTemplateRows: 'auto',

  '& .card-materi': {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 20,
    padding: 20,
    borderRadius: 10,
    '& > h3': {
      width: '100%',
      textAlign: 'start'
    },
    '& > div': {
      display: 'flex',
      gap: 20,
      '& > div:first-of-type': {
        width: 80,
        height: 80,
        backgroundColor: 'lightgrey',
        borderRadius: 10
      },
      '& > div:last-of-type': {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }
  },
  //Mobile Breakpoint =====================================================================================
  [theme.breakpoints.only('xs')]: {
    gridTemplateColumns: 'repeat(1,1fr)'
  },
  //=======================================================================================================

  //Tablet Breakpoint =====================================================================================
  [theme.breakpoints.only('sm')]: {
    gridTemplateColumns: 'repeat(1,1fr)'
  },
  //=======================================================================================================

  //Laptop Breakpoint =====================================================================================
  [theme.breakpoints.only('md')]: {
    gridTemplateColumns: 'repeat(2,1fr)'
  },
  //=======================================================================================================

  //Desktop Breakpoint =====================================================================================
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(2,1fr)'
  }
}));

export default function ClassPage() {
  const dispatch = useDispatch();
  const sidebarReducer = useSelector((state) => state.sidebarReducer);

  const listMateri = ['Fiqih', 'Tajwid', "Al-Qur'an & Hadist", 'Aqidah dan Akhlak'];

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'class') > -1)) {
      dispatch({ type: MENU_OPEN, id: 'class' });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageRoot>
      {(() => {
        return listMateri.map((e) => (
          <Grid item xs={6}>
            <Box className="card-materi">
              <Typography component="h3" variant="h3">
                Materi Kelas {e === "Tajwid" ? "" : "1"}
              </Typography>
              <Box>
                <Box></Box>
                <Box>
                  <Typography component="h4" variant="h4">
                    {e} {e === "Tajwid" ? "" : "Kelas 1"}
                  </Typography>
                  <Typography component="p" variant="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ducimus facilis quasi tenetur qui, dolor accusantium
                    incidunt temporibus totam necessitatibus iste ab libero dolore quae.
                  </Typography>
                </Box>
              </Box>
              <Button variant="contained">Download</Button>
            </Box>
          </Grid>
        ));
      })()}
    </PageRoot>
  );
}
