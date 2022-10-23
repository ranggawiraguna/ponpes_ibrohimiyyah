import { Box, Button, Typography } from '@mui/material';
import BootstrapInput from 'components/elements/BootstrapInput';
import FragmentComponent from './styled';

export default function FormBiodataSantri({ onChange, onChangeStep }) {
  return (
    <FragmentComponent variant="fade" duration={0.25}>
      <Typography component="h2" variant="h2">
        Formulir Biodata Santri
      </Typography>
      <Box>
        <Box>
          <BootstrapInput id="input-nama-lengkap" label="Nama Lengkap" onChange={onChange('fullname')} />
          <BootstrapInput id="input-place-and-date-of-birth" label="Tempat / Tanggal Lahir" onChange={onChange('placeAndDateOfBirth')} />
          <BootstrapInput id="input-address" label="Alamat Lengkap" onChange={onChange('address')} />
          <BootstrapInput id="input-gender" label="Jenis Kelamin" onChange={onChange('gender')} />
          <BootstrapInput id="input-child-order" label="Anak Ke" onChange={onChange('childOrder')} />
        </Box>
        <Box>
          <BootstrapInput id="input-number-of-siblings" label="Jumlah Saudara" onChange={onChange('numberOfSiblings')} />
          <BootstrapInput id="input-school-name" label="Nama Sekolah" onChange={onChange('schoolName')} />
          <BootstrapInput id="input-school-class" label="Kelas Sekolah" onChange={onChange('schoolClass')} />
          <BootstrapInput id="input-school-date" label="Masuk Sekolah" onChange={onChange('schoolDate')} />
          <BootstrapInput id="input-phone-number" label="Nomor Telepon" onChange={onChange('phoneNumber')} />
        </Box>
      </Box>
      <Box>
        <Button
          variant="contained"
          onClick={() => {
            onChangeStep(1);
          }}
        >
          Selanjutnya
        </Button>
      </Box>
    </FragmentComponent>
  );
}
