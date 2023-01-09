import { Fragment, useEffect, useState } from 'react';
import { Box, TableCell, TableRow, styled } from '@mui/material';
import { listSurat, tableDisplayType } from 'utils/other/EnvironmentValues';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_OPEN } from 'utils/redux/action';
import TableDisplay from 'components/elements/TableDisplay';
import AlertToast from 'components/elements/AlertToast';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from 'config/firebase';

const tableHeadContent = ['No.', 'Materi', 'Keterangan'];
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
  const accountReducer = useSelector((state) => state.accountReducer);

  const [alertDescription, setAlertDescription] = useState({
    isOpen: false,
    type: 'info',
    text: '',
    transitionName: 'slideUp'
  });

  const [listHafalan, setListHafalan] = useState([]);

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'memory') > -1)) {
      dispatch({ type: MENU_OPEN, id: 'memory' });
    }

    const listenerListHafalan = onSnapshot(
      query(collection(db, 'hafalan'), where('id_santri', '==', accountReducer.id)),
      async (snapshot) =>
        setListHafalan(
          await Promise.all(
            snapshot.docs.map((document) => ({
              id: document.id,
              ...document.data()
            }))
          )
        )
    );

    return () => {
      listenerListHafalan();
    };
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
                  {listHafalan.some((_) => _.nama_surat === surat) ? <CheckBoxIcon color="primary" /> : <CheckBoxOutlineBlankIcon />}
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
