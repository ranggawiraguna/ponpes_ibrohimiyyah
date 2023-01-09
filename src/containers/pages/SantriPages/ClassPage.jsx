import { Box, Typography, styled, Grid, Button } from '@mui/material';
import { db } from 'config/firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_OPEN } from 'utils/redux/action';
import AlertToast from 'components/elements/AlertToast';
import fileDownload from 'js-file-download';
import axios from 'axios';

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
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundSc: 'contain',
        borderRadius: 10,
        border: '2px solid rgba(0,0,0,0.1)'
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
  const accountReducer = useSelector((state) => state.accountReducer);
  const [listMateri, setListMateri] = useState([]);

  const [alertDescription, setAlertDescription] = useState({
    isOpen: false,
    type: 'info',
    text: '',
    transitionName: 'slideUp'
  });

  const showAlertToast = (type, text) =>
    setAlertDescription({
      ...alertDescription,
      isOpen: true,
      type: type,
      text: text
    });

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'class') > -1)) {
      dispatch({ type: MENU_OPEN, id: 'class' });
    }

    const listenerListMateri = onSnapshot(query(collection(db, 'materi'), where('kelas', '==', accountReducer.kelas)), async (snapshot) =>
      setListMateri(
        await Promise.all(
          snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data()
          }))
        )
      )
    );

    return () => {
      listenerListMateri();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageRoot>
        {(() => {
          return listMateri.map((_) => (
            <Grid item xs={6} alignContent="stretch">
              <Box className="card-materi" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography component="h3" variant="h3">
                  Materi Kelas {accountReducer.kelas}
                </Typography>
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ backgroundImage: `url(${_.cover_url})` }} />
                  <Box>
                    <Typography component="h4" variant="h4">
                      {_.name}
                    </Typography>
                    <Typography component="p" variant="p">
                      {_.deskripsi}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  onClick={() => {
                    if (_.file_url) {
                      axios.get(_.file_url, { responseType: 'blob' }).then((res) => {
                        fileDownload(res.data, `Materi ${_.name} Kelas ${_.kelas}.pdf`);
                      });
                    } else {
                      showAlertToast('info', 'Materi belum tersedia untuk saat ini');
                    }
                  }}
                >
                  Download
                </Button>
              </Box>
            </Grid>
          ));
        })()}
      </PageRoot>
      <AlertToast description={alertDescription} setDescription={setAlertDescription} />
    </>
  );
}
