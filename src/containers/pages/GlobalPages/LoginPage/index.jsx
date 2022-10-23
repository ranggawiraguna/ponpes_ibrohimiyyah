import ToolbarFrame from 'components/elements/ToolbarFrame';
import PageRoot from './styled';
import AlertToast from 'components/elements/AlertToast';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import IllustrationProfileChangePassword from 'assets/illustration/ProfileChangePassword.svg';
import AnimWriteLoginForm from 'assets/anim/write-login-form.json';
import Lottie from 'react-lottie';
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

const DialogForgotPassword = forwardRef(({ open, onClose, showAlert, ...others }, ref) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [isSendingLinkProcess] = useState(false);

  const [inputUsername, setInputUsername] = useState('');

  const handleChangeInput = (event) => {
    setInputUsername(event.target.value);
  };

  const handleClose = () => {
    if (!isSendingLinkProcess) {
      onClose();
      isSendingLinkProcess(false);
      setTimeout(() => {
        setInputUsername('');
      }, 500);
    }
  };

  const handleSendLinkReset = async () => {
    //
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
                Masukkan Username untuk mendapatkan link
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
                id="InputUsername"
                type="name"
                value={inputUsername}
                onChange={handleChangeInput}
                label="Username"
                placeholder="Masukkan Username"
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
  let navigate = useNavigate();

  const [openDialogForgotPassword, setOpenDialogForgotPassword] = useState(false);

  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false
  });

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
    switch (values.username) {
      case 'santri':
        return navigate('/santri/home');

      case 'guru':
        return navigate('/guru/home');

      case 'sekretaris':
        return navigate('/sekertaris/home');

      default:
        return navigate('/masuk');
    }
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
                Masukkan username dan password
                <br />
                untuk dapat masuk kedalam sistem
              </p>
              <Box>
                <Lottie
                  isClickToPauseDisabled={true}
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: AnimWriteLoginForm,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}
                />
              </Box>
              <Box component="form" className="login-form">
                <FormControl variant="outlined" className="input">
                  <InputLabel htmlFor="InputUsername">Username</InputLabel>
                  <OutlinedInput
                    id="InputUsername"
                    type="text"
                    className="normal-border"
                    value={values.username}
                    onChange={handleChange('username')}
                    label="Username"
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
                <Lottie
                  isClickToPauseDisabled={true}
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: AnimWriteLoginForm,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}
                />
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
