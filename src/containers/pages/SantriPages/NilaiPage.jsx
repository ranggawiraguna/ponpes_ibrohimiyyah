import { Fragment, useEffect, useState } from 'react';
import { Box, TableCell, TableRow, styled } from '@mui/material';
import { tableDisplayType } from 'utils/other/EnvironmentValues';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_OPEN } from 'utils/redux/action';
import TableDisplay from 'components/elements/TableDisplay';
import AlertToast from 'components/elements/AlertToast';

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

  const [alertDescription, setAlertDescription] = useState({
    isOpen: false,
    type: 'info',
    text: '',
    transitionName: 'slideUp'
  });

  const [data] = useState(['Fiqih', 'Tajwid', "Al-Qur'an & Hadist", 'Aqidah dan Akhlak']);

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
          title="Daftar Nilai"
          tableContentType={tableDisplayType.row}
          tableAlignContent={tableAlignContent}
          tableHeadContent={tableHeadContent}
          tableBodyContent={(() => {
            return data.map((data, index) => (
              <TableRow key={index}>
                <TableCell align={tableAlignContent[0]}>{index + 1}</TableCell>
                <TableCell align={tableAlignContent[1]}>{data}</TableCell>
                <TableCell align={tableAlignContent[2]}>{Math.floor((Math.random() * 30) + 71)}</TableCell>
              </TableRow>
            ));
          })()}
        />
      </PageRoot>
      <AlertToast description={alertDescription} setDescription={setAlertDescription} />
    </Fragment>
  );
}
