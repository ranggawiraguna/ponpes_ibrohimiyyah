import TableDisplay from 'components/elements/TableDisplay';
import { Avatar, Box, Button, TableCell, TableRow, Typography, styled, CardMedia } from '@mui/material';
import { tableDisplayType } from 'utils/other/EnvironmentValues';
import { Fragment, useEffect, useState } from 'react';
import { MENU_OPEN } from 'utils/redux/action';
import { useDispatch, useSelector } from 'react-redux';
import AlertToast from 'components/elements/AlertToast';
import TransactionConfirmed from 'assets/icon/TransactionConfirmed.svg';
import TransactionDelayed from 'assets/icon/TransactionDelayed.svg';

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

  const [alertDescription, setAlertDescription] = useState({
    isOpen: false,
    type: 'info',
    text: '',
    transitionName: 'slideUp'
  });

  const firstSigned = 'Maret' ;

  const data = [
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
    'Desember',
  ];

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'payment') > -1)) {
      dispatch({ type: MENU_OPEN, id: 'payment' });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Fragment>
        <PageRoot>
          <TableDisplay
            title="Pembayaran Santri"
            tableContentType={tableDisplayType.row}
            tableAlignContent={tableAlignContent}
            tableHeadContent={tableHeadContent}
            tableBodyContent={(() => {
              if (data.length <= 0) {
                return (
                  <TableRow>
                    <TableCell colSpan={tableHeadContent.length} align="center">
                      <Typography variant="p" component="p" sx={{ color: 'rgba(0,0,0,0.6)' }}>
                        Belum terdapat pendaftaran santri baru
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              }

              return data.slice(data.indexOf(firstSigned)).concat(data.slice(0, data.indexOf(firstSigned))).map((data, index) => (
                <TableRow key={index}>
                  <TableCell align={tableAlignContent[0]}>{index + 1}</TableCell>
                  <TableCell align={tableAlignContent[1]}>{data}</TableCell>
                  <TableCell align={tableAlignContent[2]}>{'xxxxx'}</TableCell>
                  <TableCell align={tableAlignContent[3]}>
                    <Avatar sx={{ margin: '0 auto' }} src={'xxxxx'} />
                  </TableCell>
                  <TableCell align="center">
                    {(() => {
                      const x = Math.floor(Math.random() * 3);

                      if (x === 0) {
                        return '-';
                      } else {
                        return (
                          <CardMedia
                            component="img"
                            src={x === 1 ? TransactionConfirmed : TransactionDelayed}
                          />
                        );
                      }
                    })()}
                  </TableCell>
                  <TableCell align={tableAlignContent[5]}>
                    <Button variant="contained">Upload Bukti</Button>
                  </TableCell>
                </TableRow>
              ));
            })()}
          />
        </PageRoot>
        <AlertToast description={alertDescription} setDescription={setAlertDescription} />
      </Fragment>
    </div>
  );
}
