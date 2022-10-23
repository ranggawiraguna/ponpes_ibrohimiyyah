import { Box, Button, Typography } from '@mui/material';
import BootstrapInput from 'components/elements/BootstrapInput';
import FragmentComponent from './styled';

export default function FormBiodataOrangTua({ onChange, onChangeStep }) {
  return (
    <FragmentComponent variant="fade" duration={0.25}>
      <Typography component="h2" variant="h2">
        Formulir Biodata Orang Tua
      </Typography>
      <Box>
        <Box>
          <BootstrapInput id="input-nama-lengkap-ayah" label="Nama Lengkap Ayah" onChange={onChange('fullnameFather')} />
          <BootstrapInput id="input-status-ayah" label="Status Ayah" onChange={onChange('statusFather')} />
          <BootstrapInput
            id="input-place-and-date-of-birth-ayah"
            label="Tempat / Tanggal Lahir Ayah"
            onChange={onChange('placeAndDateOfBirthFather')}
          />
          <BootstrapInput id="input-pekerjaan-ayah" label="Pekerjaan Ayah" onChange={onChange('workFather')} />
          <BootstrapInput id="input-telepon-ayah" label="Nomor Telepon Ayah" onChange={onChange('phoneNumberFather')} />
        </Box>
        <Box>
          <BootstrapInput id="input-nama-lengkap-ibu" label="Nama Lengkap Ibu" onChange={onChange('fullnameMother')} />
          <BootstrapInput id="input-status-ibu" label="Status Ibu" onChange={onChange('statusMother')} />
          <BootstrapInput
            id="input-place-and-date-of-birth-ibu"
            label="Tempat / Tanggal Lahir Ibu"
            onChange={onChange('placeAndDateOfBirthMother')}
          />
          <BootstrapInput id="input-pekerjaan-ibu" label="Pekerjaan Ibu" onChange={onChange('workMother')} />
          <BootstrapInput id="input-telepon-ibu" label="Nomor Telepon Ibu" onChange={onChange('phoneNumberMother')} />
        </Box>
      </Box>
      <Box>
        <BootstrapInput id="input-alamat-orang-tua" label="Alamat Orang Tua" onChange={onChange('addressParent')} />
        <BootstrapInput id="input-tujuan-daftar" label="Tujuan Mendaftarkan Santri" onChange={onChange('purpose')} />
      </Box>
      <Box>
        <Button variant="contained" onClick={() => onChangeStep(0)}>
          Sebelumnya
        </Button>
        <Button variant="contained" onClick={() => onChangeStep(2)}>
          Selanjutnya
        </Button>
      </Box>
    </FragmentComponent>
  );
}
