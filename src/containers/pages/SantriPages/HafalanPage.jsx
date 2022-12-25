import { Fragment, useEffect, useState } from 'react';
import { Box, TableCell, TableRow, styled } from '@mui/material';
import { tableDisplayType } from 'utils/other/EnvironmentValues';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_OPEN } from 'utils/redux/action';
import TableDisplay from 'components/elements/TableDisplay';
import AlertToast from 'components/elements/AlertToast';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const listSurat = [
  "Surat An Naba'",
  "Surat An Naazi'aat",
  "Surat 'Abasa",
  'Surat At Takwiir',
  'Surat Al Infithaar',
  'Surat Al Muthaffifiin',
  'Surat Al Insyiqaaq',
  'Surat Al Buruuj',
  'Surat Ath Thaariq',
  "Surat Al A'laa",
  'Surat Al Ghaasyiyah',
  'Surat Al Fajr',
  'Surat Al Balad',
  'Surat Asy Syams',
  'Surat Al Lail',
  'Surat Adh Dhuhaa',
  'Surat Al Insyirah',
  'Surat At Tin',
  "Surat Al 'Alaq",
  'Surat Al Qadr',
  'Surat Al Bayyinah',
  'Surat Al Zalzalah',
  "Surat Al 'Aadiyaat",
  "Surat Al Qaari'ah",
  'Surat At Takaatsur',
  'Surat Al Ashr',
  'Surat Al Humazah',
  'Surat Al Fiil',
  'Surat Quraisy',
  "Surat Al Maa'uun",
  'Surat Al Kautsar',
  'Surat Al Kaafiruun',
  'Surat An Nashr',
  'Surat Al Lahab',
  'Surat Al Ikhlash',
  'Surat Al Falaq',
  'Surat An Naas'
].reverse();
const tableHeadContent = ['No.', 'Materi', 'Sudah / Belum'];
const tableAlignContent = ['left', 'left', 'center'];

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

export default function HafalanPage() {
  const dispatch = useDispatch();
  const sidebarReducer = useSelector((state) => state.sidebarReducer);

  const [alertDescription, setAlertDescription] = useState({
    isOpen: false,
    type: 'info',
    text: '',
    transitionName: 'slideUp'
  });

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'memory') > -1)) {
      dispatch({ type: MENU_OPEN, id: 'memory' });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <PageRoot>
        <TableDisplay
          title="Daftar Nilai"
          tableContentType={tableDisplayType.row}
          tableAlignContent={tableAlignContent}
          tableHeadContent={tableHeadContent}
          tableBodyContent={(() => {
            return listSurat.map((surat, index) => (
              <TableRow key={index}>
                <TableCell align={tableAlignContent[0]}>{index + 1}</TableCell>
                <TableCell align={tableAlignContent[1]}>{surat}</TableCell>
                <TableCell align={tableAlignContent[2]}>
                  {Math.floor((Math.random() * 2)) === 0 ? <CheckBoxOutlineBlankIcon/> : <CheckBoxIcon color='primary'/>}
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
