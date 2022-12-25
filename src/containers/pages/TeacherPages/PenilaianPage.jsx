import { Fragment, useEffect, useState } from 'react';
import { Box, TableCell, TableRow, styled, Button, TextField } from '@mui/material';
import { tableDisplayType } from 'utils/other/EnvironmentValues';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_OPEN } from 'utils/redux/action';
import TableDisplay from 'components/elements/TableDisplay';
import AlertToast from 'components/elements/AlertToast';

const tableHeadContent = ['No.', 'Nama Lengkap', 'Fiqih', 'Tajwid', "Al-Qur'an & Hadist", 'Aqidah dan Akhlak', ''];
const tableAlignContent = ['left', 'left', 'center', 'center', 'center', 'center', 'center'];

const PageRoot = styled(Box)(() => ({
  '& > div': {
    '& > div': {
      '& > .table-container': {
        '& > table': {
          '& td': {
            '&:first-of-type': {
              width: 10
            }
          }
        }
      }
    }
  }
}));

export default function PenilaianPage() {
  const dispatch = useDispatch();
  const sidebarReducer = useSelector((state) => state.sidebarReducer);

  const [listName] = useState([
    'Agus Budiantoro',
    'May Rahmat',
    'Alip Prasetyo',
    'Rio Siswandi',
    'AAA',
    'BBB',
    'CCC',
    'DDD',
    'EEE',
    'FFF',
    'GGG',
    'HHH',
    'III'
  ]);
  const [listStatus, setListStatus] = useState([false, false, false, false]);

  const [alertDescription, setAlertDescription] = useState({
    isOpen: false,
    type: 'info',
    text: '',
    transitionName: 'slideUp'
  });

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'value') > -1)) {
      dispatch({ type: MENU_OPEN, id: 'value' });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <PageRoot>
        <TableDisplay
          title="Penilaian Santri"
          tableContentType={tableDisplayType.row}
          tableAlignContent={tableAlignContent}
          tableHeadContent={tableHeadContent}
          tableBodyContent={(() => {
            return listName.map((name, index) => (
              <TableRow key={index}>
                <TableCell align={tableAlignContent[0]}>{index + 1}</TableCell>
                <TableCell align={tableAlignContent[1]}>{name}</TableCell>
                {['Fiqih', 'Tajwid', "Al-Qur'an & Hadist", 'Aqidah dan Akhlak'].map(() => (
                  <TableCell align={tableAlignContent[3]}>
                    {!listStatus[index] ? (
                      Math.floor(Math.random() * 30 + 71)
                    ) : (
                      <TextField
                        variant="standard"
                        inputProps={{ min: 0, style: { textAlign: 'center' } }}
                        sx={{ width: 30, margin: 0 }}
                        defaultValue={Math.floor(Math.random() * 30 + 71)}
                      />
                    )}
                  </TableCell>
                ))}
                <TableCell align={tableAlignContent[5]}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      const tempListStatus = Array.from(listStatus);
                      tempListStatus[index] = !tempListStatus[index];
                      setListStatus(Array.from(tempListStatus));
                    }}
                  >
                    {!listStatus[index] ? 'Edit' : 'Simpan'}
                  </Button>
                </TableCell>
              </TableRow>
            ));
          })()}
        />
      </PageRoot>
      <AlertToast description={alertDescription} setDescription={setAlertDescription} />
    </Fragment>
  );
}
