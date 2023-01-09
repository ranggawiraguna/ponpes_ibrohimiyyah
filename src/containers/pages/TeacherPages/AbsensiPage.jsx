import { Fragment, useEffect, useState } from 'react';
import { Box, TableCell, TableRow, styled, Checkbox } from '@mui/material';
import { tableDisplayType } from 'utils/other/EnvironmentValues';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_OPEN } from 'utils/redux/action';
import TableDisplay from 'components/elements/TableDisplay';
import AlertToast from 'components/elements/AlertToast';

const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const tableHeadContent = ['No.', 'Nama Lengkap'];
const tableHeadAlign = ['center', 'left'];

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

export default function AbsensiPage() {
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

  const [monthSelected, setMonthSelected] = useState(0);
  const [yearSelected, setYearSelected] = useState(new Date().getFullYear());

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'attendance') > -1)) {
      dispatch({ type: MENU_OPEN, id: 'attendance' });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <PageRoot>
        <TableDisplay
          withOptionHeader
          withOptionHeader2
          optionValues={Array.from({ length: 12 }, (_, __) => ({
            label: months[__],
            value: __
          }))}
          optionValues2={Array.from({ length: 5 }, (_, __) => ({
            label: new Date().getFullYear() + __,
            value: new Date().getFullYear() + __
          }))}
          optionAction={(value) => setMonthSelected(parseInt(value))}
          optionAction2={(value) => setYearSelected(parseInt(value))}
          optionSelected={monthSelected}
          optionSelected2={yearSelected}
          title="Absensi Santri"
          tableAlignContent={[
            ...tableHeadAlign,
            ...Array.from({ length: new Date(yearSelected, parseInt(monthSelected) + 1, 0).getDate() }, (_, __) => 'center')
          ]}
          tableContentType={tableDisplayType.row}
          tableHeadContent={[
            ...tableHeadContent,
            ...Array.from({ length: new Date(yearSelected, parseInt(monthSelected) + 1, 0).getDate() }, (_, __) => __ + 1)
          ]}
          tableBodyContent={(() => {
            return listName.map((date, index) => (
              <TableRow key={index}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="left">{date}</TableCell>
                {Array.from({ length: new Date(yearSelected, parseInt(monthSelected) + 1, 0).getDate() }, (_, __) => __).map(() => (
                  <TableCell align={'center'}>
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
