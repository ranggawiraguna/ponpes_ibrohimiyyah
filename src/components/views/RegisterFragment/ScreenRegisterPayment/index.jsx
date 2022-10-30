import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography, useMediaQuery } from '@mui/material';
import FragmentComponent from './styled';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AnimRegisterSuccess from 'assets/anim/register-success.json';
import { forwardRef, Fragment, useState } from 'react';
import { useTheme } from '@emotion/react';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router';

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
              <Lottie
                isClickToPauseDisabled={true}
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: AnimRegisterSuccess,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }}
              />
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

export default function ScreenRegisterPayment({ onChange, onChangeStep }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const [openDialogFeedbackRegister, setOpenDialogFeedbackRegister] = useState(false);

  const setProfileImage = (value) => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
    }
    setSelectedImage(value);
  };

  const handleOnChangeImage = (event) => {
    if (event.target?.files?.[0]) {
      setProfileImage(event.target?.files?.[0]);
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
            <Box>
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
          </Box>
        </Box>
        <Box>
          <Button variant="contained" onClick={() => onChangeStep(1)}>
            Sebelumnya
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setOpenDialogFeedbackRegister(true);
            }}
          >
            Kirim & Daftar
          </Button>
        </Box>
      </FragmentComponent>
      <DialogFeedbackRegister open={openDialogFeedbackRegister} onClose={() => setOpenDialogFeedbackRegister(false)} />
    </Fragment>
  );
}
