import ToolbarFrame from 'components/elements/ToolbarFrame';
import PageRoot from './styled';
import AlertToast from 'components/elements/AlertToast';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import IllustrationProfileChangePassword from 'assets/illustration/ProfileChangePassword.svg';
import AnimWriteLoginForm from 'assets/anim/write-login-form.json';
import Lottie from 'lottie-react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { forwardRef, Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BoxTransition } from 'components/elements/MotionTransitions';
import { useTheme } from '@emotion/react';
import {
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  useMediaQuery
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { createSession } from 'utils/redux/reducers/account';
import { auth } from 'config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const DialogForgotPassword = forwardRef(({ open, onClose, showAlert, ...others }, ref) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [isSendingLinkProcess, setIsSendingLinkProcess] = useState(false);

  const [inputEmail, setInputEmail] = useState('');

  const handleChangeInput = (event) => {
    setInputEmail(event.target.value);
  };

  const handleClose = () => {
    if (!isSendingLinkProcess) {
      onClose();
      setIsSendingLinkProcess(false);
      setTimeout(() => {
        setInputEmail('');
      }, 500);
    }
  };

  const handleSendLinkReset = async () => {
    if (!isSendingLinkProcess) {
      setIsSendingLinkProcess(true);
      await sendPasswordResetEmail(auth, inputEmail)
        .then(() => {
          showAlert('success', 'Email reset password telah dikirim melalui email terdaftar');
          handleClose();
          setIsSendingLinkProcess(false);
        })
        .catch((error) => {
          showAlert('warning', error.toString());
          setIsSendingLinkProcess(false);
        });
    }
  };

  return (
    <Fragment>
      <Dialog ref={ref} open={open} {...others} fullScreen={fullScreen} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle>
          <Grid container sx={{ position: 'relative', marginTop: 2, marginBottom: 1 }} justifyContent="center" alignItems="center">
            <Typography variant="h3" component="h3" sx={{ fontFamily: 'Folks' }}>
              Lupa Password Anda ?
            </Typography>
            <IconButton
              sx={{ position: 'absolute', right: 0, top: -12 }}
              color="inherit"
              onClick={() => handleClose(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Grid container textAlign="center" alignItems="center" justifyContent="center" gap={3} direction="column" minWidth={{ md: 450 }}>
            <Grid container direction="column" alignItems="center">
              <Typography
                variant="p"
                component="p"
                sx={{
                  marginBottom: { xs: 5, md: 3 },
                  fontSize: 18,
                  lineHeight: 1.2,
                  width: '80%'
                }}
              >
                Masukkan Email untuk mendapatkan link
                <br />
                reset password melalui email terdaftar
              </Typography>
              <CardMedia
                component="img"
                src={IllustrationProfileChangePassword}
                sx={{ width: 240, height: 240 }}
                marginTop={3}
                marginBottom={1}
              />
            </Grid>
            <FormControl
              sx={{
                width: '80%',
                fontFamily: 'Folks',
                input: { textAlign: 'center', fontSize: 18, fontWeight: 'normal' },
                label: { display: 'none' },
                legend: { display: 'none' }
              }}
              variant="outlined"
              className="input"
            >
              <OutlinedInput
                id="InputEmail"
                type="name"
                value={inputEmail}
                onChange={handleChangeInput}
                label="Email"
                placeholder="Masukkan Email"
                autoComplete="off"
                sx={{ fontFamily: 'Folks' }}
              />
            </FormControl>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container justifyContent="center">
            <Button
              variant="contained"
              onClick={handleSendLinkReset}
              sx={{ fontFamily: 'Folks', fontSize: 16, fontWeight: 'bold', width: '50%', marginBottom: 2 }}
            >
              Kirim Link Reset
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
});

DialogForgotPassword.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
};

DialogForgotPassword.defaultProps = {
  open: false,
  onClose: () => {}
};

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openDialogForgotPassword, setOpenDialogForgotPassword] = useState(false);

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false
  });

  const [isLoginProcess, setIsLoginProcess] = useState(false);

  const clearLoginForm = () => {
    setValues({
      email: '',
      password: ''
    });
    setIsLoginProcess(false);
  };

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

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLoginSession = async () => {
    dispatch(
      createSession({
        data: {
          email: values.email,
          password: values.password
        },
        isLoginProcess: isLoginProcess,
        setIsLoginProcess: setIsLoginProcess,
        showAlertToast: showAlertToast,
        navigate: navigate,
        clearLoginForm: clearLoginForm
      })
    );
  };

  return (
    <Fragment>
      <PageRoot>
        <Box className="box-content">
          <ToolbarFrame buttonLink="/pendaftaran" buttonText="Pendaftaran" />
          <Box className="content-section">
            <BoxTransition variant="fadeZoom" duration={0.25}>
              <h2>Masuk Akun</h2>
              <p>
                Masukkan email dan password
                <br />
                untuk dapat masuk kedalam sistem
              </p>
              <Box width={500}>
                <center>
                  <Lottie animationData={AnimWriteLoginForm} loop={true} autoPlay={true} style={{ width: '70%' }} />
                </center>
              </Box>
              <Box component="form" className="login-form">
                <FormControl variant="outlined" className="input">
                  <InputLabel htmlFor="InputEmail">Email</InputLabel>
                  <OutlinedInput
                    id="InputEmail"
                    type="email"
                    className="normal-border"
                    value={values.email}
                    onChange={handleChange('email')}
                    label="Email"
                  />
                </FormControl>
                <FormControl variant="outlined" className="input">
                  <InputLabel htmlFor="InputPassword">Password</InputLabel>
                  <OutlinedInput
                    id="InputPassword"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Button className="forgot-password" variant="text" onClick={() => setOpenDialogForgotPassword(true)}>
                  Lupa Password ?
                </Button>
                <Button onClick={handleLoginSession} variant="contained">
                  Masuk
                </Button>
              </Box>
            </BoxTransition>
            <BoxTransition variant="fade" duration={0.5}>
              <Box>
                <Lottie animationData={AnimWriteLoginForm} loop={true} autoPlay={true} style={{ height: '100%' }} />
              </Box>
            </BoxTransition>
          </Box>
        </Box>
      </PageRoot>
      <DialogForgotPassword open={openDialogForgotPassword} onClose={() => setOpenDialogForgotPassword(false)} showAlert={showAlertToast} />
      <AlertToast description={alertDescription} setDescription={setAlertDescription} />
    </Fragment>
  );
}
