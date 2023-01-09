import { Box, Button, Typography } from '@mui/material';
import BootstrapInput from 'components/elements/BootstrapInput';
import FragmentComponent from './styled';

export default function FormBiodataOrangTua({ values, onChange, onChangeStep }) {
  return (
    <FragmentComponent variant="fade" duration={0.25}>
      <Typography component="h2" variant="h2">
        Formulir Biodata Orang Tua
      </Typography>
      <Box>
        <Box>
          <BootstrapInput
            id="input-nama-lengkap-ayah"
            defaultValue={values.nama_lengkap_ayah}
            label="Nama Lengkap Ayah"
            onChange={onChange('nama_lengkap_ayah')}
          />
          <BootstrapInput id="input-status-ayah" defaultValue={values.status_ayah} label="Status Ayah" onChange={onChange('status_ayah')} />
          <BootstrapInput
            id="input-place-and-date-of-birth-ayah"
            defaultValue={values.ttl_ayah}
            label="Tempat / Tanggal Lahir Ayah"
            onChange={onChange('ttl_ayah')}
          />
          <BootstrapInput
            id="input-pekerjaan-ayah"
            defaultValue={values.pekerjaan_ayah}
            label="Pekerjaan Ayah"
            onChange={onChange('pekerjaan_ayah')}
          />
          <BootstrapInput
            id="input-telepon-ayah"
            defaultValue={values.nomor_telepon_ayah}
            label="Nomor Telepon Ayah"
            onChange={onChange('nomor_telepon_ayah')}
          />
        </Box>
        <Box>
          <BootstrapInput
            id="input-nama-lengkap-ibu"
            defaultValue={values.nama_lengkap_ibu}
            label="Nama Lengkap Ibu"
            onChange={onChange('nama_lengkap_ibu')}
          />
          <BootstrapInput id="input-status-ibu" defaultValue={values.status_ibu} label="Status Ibu" onChange={onChange('status_ibu')} />
          <BootstrapInput
            id="input-place-and-date-of-birth-ibu"
            defaultValue={values.ttl_ibu}
            label="Tempat / Tanggal Lahir Ibu"
            onChange={onChange('ttl_ibu')}
          />
          <BootstrapInput
            id="input-pekerjaan-ibu"
            defaultValue={values.pekerjaan_ibu}
            label="Pekerjaan Ibu"
            onChange={onChange('pekerjaan_ibu')}
          />
          <BootstrapInput
            id="input-telepon-ibu"
            defaultValue={values.nomor_telepon_ibu}
            label="Nomor Telepon Ibu"
            onChange={onChange('nomor_telepon_ibu')}
          />
        </Box>
      </Box>
      <Box>
        <BootstrapInput
          id="input-alamat-orang-tua"
          defaultValue={values.alamat_orang_tua}
          label="Alamat Orang Tua"
          onChange={onChange('alamat_orang_tua')}
        />
        <BootstrapInput
          id="input-tujuan-daftar"
          defaultValue={values.tujuan_mendaftar}
          label="Tujuan Mendaftarkan Santri"
          onChange={onChange('tujuan_mendaftar')}
        />
      </Box>
      <Box>
        <Button variant="contained" onClick={() => onChangeStep(0)}>
          Sebelumnya
        </Button>
        <Button disabled={!Object.values(values).every(Boolean)} variant="contained" onClick={() => onChangeStep(2)}>
          Selanjutnya
        </Button>
      </Box>
    </FragmentComponent>
  );
}
