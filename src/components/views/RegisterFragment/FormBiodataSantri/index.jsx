import { Box, Button, Typography } from '@mui/material';
import BootstrapInput from 'components/elements/BootstrapInput';
import FragmentComponent from './styled';

export default function FormBiodataSantri({ values, onChange, onChangeStep }) {
  return (
    <FragmentComponent variant="fade" duration={0.25}>
      <Typography component="h2" variant="h2">
        Formulir Biodata Santri
      </Typography>
      <Box>
        <Box>
          <BootstrapInput id="input-nama-lengkap" defaultValue={values.fullname} label="Nama Lengkap" onChange={onChange('fullname')} />
          <BootstrapInput
            id="input-place-and-date-of-birth"
            defaultValue={values.placeAndDateOfBirth}
            label="Tempat / Tanggal Lahir"
            onChange={onChange('placeAndDateOfBirth')}
          />
          <BootstrapInput id="input-address" defaultValue={values.address} label="Alamat Lengkap" onChange={onChange('address')} />
          <BootstrapInput id="input-gender" defaultValue={values.gender} label="Jenis Kelamin" onChange={onChange('gender')} />
          <BootstrapInput id="input-child-order" defaultValue={values.childOrder} label="Anak Ke" onChange={onChange('childOrder')} />
        </Box>
        <Box>
          <BootstrapInput
            id="input-number-of-siblings"
            defaultValue={values.numberOfSiblings}
            label="Jumlah Saudara"
            onChange={onChange('numberOfSiblings')}
          />
          <BootstrapInput id="input-school-name" defaultValue={values.schoolName} label="Nama Sekolah" onChange={onChange('schoolName')} />
          <BootstrapInput
            id="input-school-class"
            defaultValue={values.schoolClass}
            label="Kelas Sekolah"
            onChange={onChange('schoolClass')}
          />
          <BootstrapInput id="input-school-date" defaultValue={values.schoolDate} label="Masuk Sekolah" onChange={onChange('schoolDate')} />
          <BootstrapInput
            id="input-phone-number"
            defaultValue={values.phoneNumber}
            label="Nomor Telepon"
            onChange={onChange('phoneNumber')}
          />
        </Box>
      </Box>
      <Box>
        <BootstrapInput id="input-email" defaultValue={values.email} label="Email" onChange={onChange('email')} />
      </Box>
      <Box>
        <Button
          disabled={!Object.values(values).every(Boolean)}
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
