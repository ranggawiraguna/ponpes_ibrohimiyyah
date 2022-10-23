import { Snackbar, styled } from '@mui/material';

export default styled(Snackbar)(() => ({
  fontFamily: 'Folks',
  maxWidth: '80vw',
  position: 'fixed',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  '& *': {
    fontFamily: 'Folks'
  }
}));
