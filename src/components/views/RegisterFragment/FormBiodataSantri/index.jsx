import { Box, Button, Typography } from '@mui/material';
import AlertToast from 'components/elements/AlertToast';
import BootstrapInput from 'components/elements/BootstrapInput';
import { db } from 'config/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import FragmentComponent from './styled';

export default function FormBiodataSantri({ values, onChange, onChangeStep }) {
  const [listEmail, setListEmail] = useState([]);

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

  useEffect(() => {
    const listenerEmail = onSnapshot(collection(db, 'formulir'), (snapshot) => {
      setListEmail(snapshot.docs.map((document) => document.data().email));
    });

    return () => {
      listenerEmail();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <FragmentComponent variant="fade" duration={0.25}>
        <Typography component="h2" variant="h2">
          Formulir Biodata Santri
        </Typography>
        <Box>
          <Box>
            <BootstrapInput
              id="input-nama-lengkap"
              defaultValue={values.nama_lengkap}
              label="Nama Lengkap"
              onChange={onChange('nama_lengkap')}
            />
            <BootstrapInput
              id="input-place-and-date-of-birth"
              defaultValue={values.tempat_tanggal_lahir}
              label="Tempat / Tanggal Lahir"
              onChange={onChange('tempat_tanggal_lahir')}
            />
            <BootstrapInput id="input-alamat" defaultValue={values.alamat} label="Alamat Lengkap" onChange={onChange('alamat')} />
            <BootstrapInput
              id="input-jenis_kelamin"
              defaultValue={values.jenis_kelamin}
              label="Jenis Kelamin"
              onChange={onChange('jenis_kelamin')}
            />
            <BootstrapInput id="input-child-order" defaultValue={values.anak_ke} label="Anak Ke" onChange={onChange('anak_ke')} />
          </Box>
          <Box>
            <BootstrapInput
              id="input-number-of-siblings"
              defaultValue={values.jumlah_saudara}
              label="Jumlah Saudara"
              onChange={onChange('jumlah_saudara')}
            />
            <BootstrapInput
              id="input-school-name"
              defaultValue={values.nama_sekolah}
              label="Nama Sekolah"
              onChange={onChange('nama_sekolah')}
            />
            <BootstrapInput
              id="input-school-class"
              defaultValue={values.kelas_sekolah}
              label="Kelas Sekolah"
              onChange={onChange('kelas_sekolah')}
            />
            <BootstrapInput
              id="input-school-date"
              defaultValue={values.masuk_sekolah}
              label="Masuk Sekolah"
              onChange={onChange('masuk_sekolah')}
            />
            <BootstrapInput
              id="input-phone-number"
              defaultValue={values.nomor_telepon}
              label="Nomor Telepon"
              onChange={onChange('nomor_telepon')}
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
              if (
                values.nama_lengkap.isEmpty ||
                values.tempat_tanggal_lahir.isEmpty ||
                values.alamat.isEmpty ||
                values.jenis_kelamin.isEmpty ||
                values.anak_ke.isEmpty ||
                values.jumlah_saudara.isEmpty ||
                values.nama_sekolah.isEmpty ||
                values.kelas_sekolah.isEmpty ||
                values.masuk_sekolah.isEmpty ||
                values.nomor_telepon.isEmpty ||
                values.email.isEmpty
              ) {
                showAlertToast('warning', 'Silahkan lengkapi formulir dengan benar');
              } else if (listEmail.includes(values.email)) {
                showAlertToast('warning', 'Email telah digunakan, silahkan gunakan email lain');
              } else if (!/^[A-Z0-9._%+-]+@gmail.com$/i.test(values.email)) {
                showAlertToast('warning', 'Email yang dimasukkan tidak valid');
              } else {
                onChangeStep(1);
              }
            }}
          >
            Selanjutnya
          </Button>
        </Box>
      </FragmentComponent>
      <AlertToast description={alertDescription} setDescription={setAlertDescription} />
    </>
  );
}
