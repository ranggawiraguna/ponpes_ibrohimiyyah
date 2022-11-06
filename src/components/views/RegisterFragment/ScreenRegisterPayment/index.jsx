import Lottie from 'lottie-react';
import FragmentComponent from './styled';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AnimRegisterSuccess from 'assets/anim/register-success.json';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography, useMediaQuery } from '@mui/material';
import { forwardRef, Fragment, useState } from 'react';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db, storage } from 'config/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import AlertToast from 'components/elements/AlertToast';
import AnimCheckGreen from 'assets/anim/check-green.json';

const DialogFeedbackRegister = forwardRef(({ open, onClose, ...others }, ref) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClose = () => {
    onClose();
    navigate('/masuk');
  };

  return (
    <Fragment>
      <Dialog ref={ref} open={open} {...others} fullScreen={fullScreen} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle>
          <Grid container sx={{ position: 'relative', marginTop: 2, marginBottom: 1 }} justifyContent="center" alignItems="center">
            <Typography variant="h3" component="h3" sx={{ fontFamily: 'Folks' }}>
              Pendaftaran Sedang Di Proses
            </Typography>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            maxWidth={!fullScreen ? 300 : 10000}
            minHeight={fullScreen ? '100%' : 0}
          >
            <Box sx={fullScreen ? { width: '70%' } : { width: 200 }}>
              <Lottie animationData={AnimRegisterSuccess} loop={true} autoPlay={true} />
            </Box>
            <Typography component="p" variant="p" sx={{ textAlign: 'center', padding: fullScreen ? '0 20px' : 0 }}>
              Silahkan periksa email pendaftaran santri untuk mendapatkan informasi selanjutnya
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Grid container justifyContent="center">
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{ fontFamily: 'Folks', fontSize: 14, fontWeight: 'bold', width: '50%', marginBottom: 2 }}
            >
              Mengerti
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
});

export default function ScreenRegisterPayment({ thisRef, values, onChangeStep, setPayment }) {
  const [openDialogFeedbackRegister, setOpenDialogFeedbackRegister] = useState(false);
  const [isCreateFormRegister, setIsCreateFormRegister] = useState(false);

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

  const handleOnChangeImage = (event) => {
    if (event.target?.files?.[0]) {
      if (values.paymentPhotoUrl) {
        URL.revokeObjectURL(values.paymentPhotoUrl);
      }
      setPayment(event.target?.files?.[0]);
    }
  };

  const handleCreateFormRegister = async () => {
    if (!isCreateFormRegister) {
      setIsCreateFormRegister(true);

      const docRef = doc(collection(db, 'pendaftaran'));
      let result;
      let data = {};
      if (values.paymentPhotoUrl) {
        data = {
          ...values,
          paymentPhotoUrl: values.paymentPhotoUrl
        };
      } else {
        data = { ...values };
      }

      if (data.paymentPhotoUrl) {
        try {
          const snapshot = await uploadBytes(ref(storage, `/pendaftaran-bukti-pembayaran/${docRef.id}`), data.paymentPhotoUrl);
          result = await getDownloadURL(snapshot.ref);
        } catch (e) {
          result = null;
        }
      } else {
        result = ' ';
      }

      if (result) {
        if (data.paymentPhotoUrl) {
          data = {
            ...data,
            paymentPhotoUrl: result
          };
        }

        setDoc(docRef, {
          ...data,
          status: 'waitingConfirmation'
        })
          .then(() => {
            setIsCreateFormRegister(true);
            setOpenDialogFeedbackRegister(true);
          })
          .catch(() => {
            setIsCreateFormRegister(true);
          });
      } else {
        showAlertToast('warning', 'Terjadi kesalahan, silahkan coba kembali');
        setIsCreateFormRegister(false);
      }
    }
  };

  return (
    <Fragment>
      <FragmentComponent variant="fade" duration={0.25}>
        <Typography component="h2" variant="h2">
          Pembayaran Registrasi
        </Typography>
        <Box>
          <Box>
            <Box>
              <h3>Bank Mandiri</h3>
              <br />
              <table>
                <tr>
                  <td>No. Rek</td>
                  <td>:</td>
                  <td>1208309128</td>
                </tr>
                <tr>
                  <td>Nama</td>
                  <td>:</td>
                  <td>Agus Budiantoro</td>
                </tr>
                <tr>
                  <td>Jumlah</td>
                  <td>:</td>
                  <td>Rp. 50.000</td>
                </tr>
              </table>
              <br />
              <p>
                Silahkan lakukan pembayaran registrasi pada nomor rekening yang tertera, dan upload bukti pembayaran pada bagian upload
                dibawah ini
              </p>
            </Box>
            {(() => {
              return values.paymentPhotoUrl === null ? (
                <Box className="upload-box">
                  <input
                    sx={{ margin: 0, padding: 0, borderRadius: 1000, width: 60, height: 60 }}
                    hidden
                    id="picture-file"
                    accept="image/*"
                    type="file"
                    onChange={handleOnChangeImage}
                  />
                  <label htmlFor="picture-file">
                    <Button variant="raised" component="span">
                      <AddPhotoAlternateIcon />
                      <p>Upload Bukti Pembayaran</p>
                    </Button>
                  </label>
                </Box>
              ) : (
                <Box className="confirmation-box">
                  <Lottie
                    ref={thisRef}
                    animationData={AnimCheckGreen}
                    loop={false}
                    autoPlay={true}
                    style={{
                      width: 100
                    }}
                  />
                  <Typography component="p" variant="p">
                    Bukti pembayaran telah di upload
                  </Typography>
                </Box>
              );
            })()}
          </Box>
        </Box>
        <Box>
          <Button variant="contained" onClick={() => onChangeStep(1)}>
            Sebelumnya
          </Button>
          <Button disabled={values.paymentPhotoUrl == null} variant="contained" onClick={handleCreateFormRegister}>
            Kirim & Daftar
          </Button>
        </Box>
      </FragmentComponent>
      <DialogFeedbackRegister open={openDialogFeedbackRegister} onClose={() => setOpenDialogFeedbackRegister(false)} />
      <AlertToast description={alertDescription} setDescription={setAlertDescription} />
    </Fragment>
  );
}
