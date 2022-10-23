import { Box, Button, Typography } from '@mui/material';
import FragmentComponent from './styled';

export default function ScreenRegisterPayment({ onChange, onChangeStep }) {
  return (
    <FragmentComponent variant="fade" duration={0.25}>
      <Typography component="h2" variant="h2">
        Pembayaran Registrasi
      </Typography>
      <Box>
        <></>
      </Box>
      <Box>
        <Button variant="contained" onClick={() => onChangeStep(1)}>
          Sebelumnya
        </Button>
        <Button variant="contained" onClick={() => {}}>
          Kirim & Daftar
        </Button>
      </Box>
    </FragmentComponent>
  );
}
