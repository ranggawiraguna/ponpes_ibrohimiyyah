import TableDisplay from 'components/elements/TableDisplay';
import { Avatar, Box, Button, TableCell, TableRow, styled, CardMedia } from '@mui/material';
import { tableDisplayType } from 'utils/other/EnvironmentValues';
import { Fragment, useEffect, useState } from 'react';
import { MENU_OPEN } from 'utils/redux/action';
import { useDispatch, useSelector } from 'react-redux';
import AlertToast from 'components/elements/AlertToast';
import TransactionConfirmed from 'assets/icon/TransactionConfirmed.svg';
import TransactionDelayed from 'assets/icon/TransactionDelayed.svg';
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import { db } from 'config/firebase';

const tableHeadContent = ['No.', 'Bulan', 'Jumlah Pembayaran', 'Bukti Pembayaran', 'Keterangan', ''];
const tableAlignContent = ['center', 'left', 'center', 'center', 'center', 'center'];

const PageRoot = styled(Box)(() => ({
  '& > div': {
    '& > div': {
      '& > .table-container': {
        '& > table': {
          '& > tbody': {
            '& > tr': {
              '& > td': {
                '&:last-child': {
                  '& > div': {
                    position: 'relative',
                    right: 0,
                    width: 'fit-content',
                    height: 'fit-content',
                    margin: '0 auto',
                    '& > button': {
                      borderRadius: 1000,
                      padding: 0,
                      minHeight: 0,
                      minWidth: 0,
                      width: 30,
                      height: 30,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    },
                    '& > div': {
                      position: 'absolute',
                      width: 'max-content',
                      height: 'fit-content',
                      backgroundColor: 'white',
                      boxShadow: '0 0 3px 1px rgba(0,0,0,0.2)',
                      zIndex: 1,
                      margin: 5,
                      padding: '5px 0',
                      borderRadius: 5,
                      display: 'flex',
                      alignItems: 'stretch',
                      flexDirection: 'column',
                      '& > button': {
                        borderRadius: 0,
                        justifyContent: 'flex-end',
                        color: 'rgba(0,0,0,0.75)',
                        minWidth: 0,
                        minHeight: 0,
                        padding: '5px 15px 5px 30px'
                      }
                    }
                  }
                },
                '&:nth-of-type(5)': {
                  '& > img': {
                    minWidth: 0,
                    minHeight: 0,
                    margin: '0 auto',
                    width: '120px'
                  }
                }
              },
              '&:not(last-child)': {
                '& > td': {
                  '&:last-child': {
                    '& > div': {
                      '& > div': {
                        top: -10,
                        right: -10
                      }
                    }
                  }
                }
              },
              '&:last-child': {
                '& > td': {
                  '&:last-child': {
                    '& > div': {
                      '& > div': {
                        top: '100%',
                        right: -10,
                        transform: 'translateY(-100%)'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}));

export default function PembayaranPage() {
  const dispatch = useDispatch();
  const sidebarReducer = useSelector((state) => state.sidebarReducer);
  const accountReducer = useSelector((state) => state.accountReducer);

  const [alertDescription, setAlertDescription] = useState({
    isOpen: false,
    type: 'info',
    text: '',
    transitionName: 'slideUp'
  });

  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ];
  const [yearSelected, setYearSelected] = useState(new Date().getFullYear());
  const [listPembayaran, setListPembayaran] = useState([]);
  const [accountFormulir, setAccountFormulir] = useState({});

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'payment') > -1)) {
      dispatch({ type: MENU_OPEN, id: 'payment' });
    }

    const listenerListPembayaran = onSnapshot(
      query(collection(db, 'pembayaran'), where('id_santri', '==', accountReducer.id)),
      async (snapshot) =>
        setListPembayaran(
          await Promise.all(
            snapshot.docs.map((document) => ({
              id: document.id,
              ...document.data()
            }))
          )
        )
    );

    const listenerAccountFormulir = onSnapshot(doc(db, 'formulir', accountReducer.id_formulir), (snapshot) => {
      if (snapshot.exists()) {
        setAccountFormulir({
          id: snapshot.id,
          ...snapshot.data()
        });
      }
    });

    return () => {
      listenerListPembayaran();
      listenerAccountFormulir();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(accountFormulir.tanggal_terdaftar ? accountFormulir.tanggal_terdaftar.toDate().getFullYear() : '');

  return (
    <Fragment>
      <PageRoot>
        <TableDisplay
          title="Pembayaran Santri"
          withOptionHeader
          optionValues={
            accountFormulir.tanggal_terdaftar
              ? Array.from(
                  { length: new Date().getFullYear() - accountFormulir.tanggal_terdaftar.toDate().getFullYear() + 1 },
                  (_, __) => ({
                    label: new Date().getFullYear() - __,
                    value: new Date().getFullYear() - __
                  })
                ).reverse()
              : []
          }
          optionAction={(value) => setYearSelected(parseInt(value))}
          optionSelected={yearSelected}
          tableContentType={tableDisplayType.row}
          tableAlignContent={tableAlignContent}
          tableHeadContent={tableHeadContent}
          tableBodyContent={(() =>
            months
              .slice(
                accountFormulir.tanggal_terdaftar
                  ? yearSelected === accountFormulir.tanggal_terdaftar.toDate().getFullYear()
                    ? months.indexOf(
                        accountFormulir.tanggal_terdaftar ? months[accountFormulir.tanggal_terdaftar.toDate().getMonth()] : 'Januari'
                      )
                    : 0
                  : 0
              )
              .map((data, index) => {
                const paymentRow = listPembayaran.find((_) =>
                  _.tanggal_terdaftar
                    ? _.tanggal_terdaftar.toDate().getFullYear() === yearSelected &&
                      months[_.tanggal_terdaftar.toDate().getMonth()] === data
                    : false
                );

                return (
                  <TableRow key={index}>
                    <TableCell align={tableAlignContent[0]}>{index + 1}</TableCell>
                    <TableCell align={tableAlignContent[1]}>{data}</TableCell>
                    <TableCell align={tableAlignContent[2]}>{paymentRow ? paymentRow.jumlah : 'Rp. -'}</TableCell>
                    <TableCell align={tableAlignContent[3]}>
                      {paymentRow ? (
                        <Avatar sx={{ margin: '0 auto' }} src={paymentRow ? paymentRow.url_bukti_pembayaran : ''} />
                      ) : (
                        'Tidak Ada'
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {(() => {
                        if (!paymentRow) {
                          return 'Belum Bayar';
                        } else {
                          return <CardMedia component="img" src={paymentRow.isConfirmed ? TransactionConfirmed : TransactionDelayed} />;
                        }
                      })()}
                    </TableCell>
                    <TableCell align={tableAlignContent[5]}>
                      <Button variant="contained">Upload Bukti</Button>
                    </TableCell>
                  </TableRow>
                );
              }))()}
        />
      </PageRoot>
      <AlertToast description={alertDescription} setDescription={setAlertDescription} />
    </Fragment>
  );
}
