import { Box, Typography, styled, Grid, Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_OPEN } from 'utils/redux/action';

const PageRoot = styled(Box)(({ theme }) => ({
  padding: 20,

  '& > div:first-of-type': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > button': {
      fontWeight: 'bold'
    }
  },
  '& > div:last-of-type': {
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
      },
      '& > button': {
        fontWeight: 'bold'
      }
    }
  },

  //Mobile Breakpoint =====================================================================================
  [theme.breakpoints.only('xs')]: {
    '& > div:last-of-type': {
      gridTemplateColumns: 'repeat(1,1fr)'
    }
  },
  //=======================================================================================================

  //Tablet Breakpoint =====================================================================================
  [theme.breakpoints.only('sm')]: {
    '& > div:last-of-type': {
      gridTemplateColumns: 'repeat(1,1fr)'
    }
  },
  //=======================================================================================================

  //Laptop Breakpoint =====================================================================================
  [theme.breakpoints.only('md')]: {
    '& > div:last-of-type': {
      gridTemplateColumns: 'repeat(2,1fr)'
    }
  },
  //=======================================================================================================

  //Desktop Breakpoint =====================================================================================
  [theme.breakpoints.up('lg')]: {
    '& > div:last-of-type': {
      gridTemplateColumns: 'repeat(2,1fr)'
    }
  }
}));

export default function MateriPage({ classNumber }) {
  const dispatch = useDispatch();
  const sidebarReducer = useSelector((state) => state.sidebarReducer);

  const listMateri = ['Fiqih', 'Tajwid', "Al-Qur'an & Hadist", 'Aqidah dan Akhlak'];

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'materi-' + classNumber) > -1)) {
      dispatch({ type: MENU_OPEN, id: 'materi-' + classNumber });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageRoot>
      <Box>
        <Typography component="h2" variant="h2">
          Materi Kelas
        </Typography>
        <Button variant="contained">Tambah Materi</Button>
      </Box>
      <br />
      <Box>
        {(() => {
          return listMateri.map((e) => (
            <Grid item xs={6}>
              <Box className="card-materi">
                <Typography component="h3" variant="h3">
                  Materi Kelas {e === 'Tajwid' ? '' : classNumber}
                </Typography>
                <Box>
                  <Box></Box>
                  <Box>
                    <Typography component="h4" variant="h4">
                      {e} {e === 'Tajwid' ? '' : `Kelas ${classNumber}`}
                    </Typography>
                    <Typography component="p" variant="p">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ducimus facilis quasi tenetur qui, dolor
                      accusantium incidunt temporibus totam necessitatibus iste ab libero dolore quae.
                    </Typography>
                  </Box>
                </Box>
                <Button variant="contained">Edit Materi</Button>
              </Box>
            </Grid>
          ));
        })()}
      </Box>
    </PageRoot>
  );
}
