import { Fragment, useEffect, useState } from 'react';
import { Box, TableCell, TableRow, styled, Checkbox } from '@mui/material';
import { listSurat, tableDisplayType } from 'utils/other/EnvironmentValues';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_OPEN } from 'utils/redux/action';
import TableDisplay from 'components/elements/TableDisplay';
import AlertToast from 'components/elements/AlertToast';

const tableHeadContent = ['No.', 'Nama Lengkap', ...listSurat];
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

export default function HafalanPage() {
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
          title="Hafalan Santri"
          tableContentType={tableDisplayType.row}
          tableAlignContent={tableAlignContent}
          tableHeadContent={tableHeadContent}
          tableBodyContent={(() => {
            return listName.map((name, index) => (
              <TableRow key={index}>
                <TableCell align={tableAlignContent[0]}>{index + 1}</TableCell>
                <TableCell align={tableAlignContent[1]}>{name}</TableCell>
                {listSurat.map(() => (
                  <TableCell align={tableAlignContent[2]}>
                    <Checkbox defaultChecked={Math.floor(Math.random() * 2) === 0 ? true : false} />
                  </TableCell>
                ))}
              </TableRow>
            ));
          })()}
        />
      </PageRoot>
      <AlertToast description={alertDescription} setDescription={setAlertDescription} />
    </Fragment>
  );
}
