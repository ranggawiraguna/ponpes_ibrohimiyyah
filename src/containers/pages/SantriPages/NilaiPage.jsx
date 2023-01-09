import { Fragment, useEffect, useState } from 'react';
import { Box, TableCell, TableRow, styled } from '@mui/material';
import { tableDisplayType } from 'utils/other/EnvironmentValues';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_OPEN } from 'utils/redux/action';
import TableDisplay from 'components/elements/TableDisplay';
import AlertToast from 'components/elements/AlertToast';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from 'config/firebase';

const tableHeadContent = ['No.', 'Materi', 'Nilai'];
const tableAlignContent = ['left', 'left', 'left'];

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

export default function NilaiPage() {
  const dispatch = useDispatch();
  const sidebarReducer = useSelector((state) => state.sidebarReducer);
  const accountReducer = useSelector((state) => state.accountReducer);

  const [alertDescription, setAlertDescription] = useState({
    isOpen: false,
    type: 'info',
    text: '',
    transitionName: 'slideUp'
  });

  const [listMateri, setListMateri] = useState([]);
  const [listNilai, setListNilai] = useState([]);

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'value') > -1)) {
      dispatch({ type: MENU_OPEN, id: 'value' });
    }

    const listenerListMateri = onSnapshot(query(collection(db, 'materi'), where('kelas', '==', accountReducer.kelas)), async (snapshot) =>
      setListMateri(
        await Promise.all(
          snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data()
          }))
        )
      )
    );

    return () => {
      listenerListMateri();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const listenerListNilai = onSnapshot(
      query(
        collection(db, 'nilai'),
        where('id_materi', 'in', listMateri.length > 0 ? listMateri.map((_) => _.id) : ['']),
        where('id_santri', '==', accountReducer.id)
      ),
      async (snapshot) =>
        setListNilai(
          await Promise.all(
            snapshot.docs.map((document) => ({
              id: document.id,
              ...document.data()
            }))
          )
        )
    );

    return () => {
      listenerListNilai();
    };
  }, [accountReducer.id, listMateri]);

  return (
    <Fragment>
      <PageRoot>
        <TableDisplay
          title="Daftar Nilai"
          tableContentType={tableDisplayType.row}
          tableAlignContent={tableAlignContent}
          tableHeadContent={tableHeadContent}
          tableBodyContent={(() => {
            return listMateri.map((data, index) => (
              <TableRow key={index}>
                <TableCell align={tableAlignContent[0]}>{index + 1}</TableCell>
                <TableCell align={tableAlignContent[1]}>{data.name}</TableCell>
                <TableCell align={tableAlignContent[2]}>
                  {listNilai.some((_) => _.id_materi === data.id) ? listNilai.find((_) => _.id_materi === data.id).nilai : 'Belum Ada'}
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
