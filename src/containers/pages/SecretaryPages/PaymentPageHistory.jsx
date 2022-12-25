import TableDisplay from 'components/elements/TableDisplay';
import { Box, TableCell, TableRow, Typography, styled } from '@mui/material';
import { tableDisplayType } from 'utils/other/EnvironmentValues';
import { Fragment, useEffect, useState } from 'react';
import { MENU_OPEN } from 'utils/redux/action';
import { useDispatch, useSelector } from 'react-redux';
import AlertToast from 'components/elements/AlertToast';
import { useNavigate } from 'react-router';

const tableHeadContent = ['No.', 'Nama Lengkap', 'Bulan', 'Jumlah Pembayaran', 'Tanggal Dikonfirmasi'];
const tableAlignContent = ['center', 'left', 'left', 'center', 'center'];

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

export default function PaymentPageHistory() {
  const dispatch = useDispatch();
  const sidebarReducer = useSelector((state) => state.sidebarReducer);

  const [alertDescription, setAlertDescription] = useState({
    isOpen: false,
    type: 'info',
    text: '',
    transitionName: 'slideUp'
  });

  const [data] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'payment') > -1)) {
      dispatch({ type: MENU_OPEN, id: 'payment' });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <PageRoot>
        <TableDisplay
          withButtonHeader
          buttonText={'Pembayaran Tertunda'}
          title="Riwayat Pembayaran Santri"
          buttonAction={() => {
            navigate('/sekretaris/pembayaran');
          }}
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

            return data.map((data, index) => (
              <TableRow key={index}>
                <TableCell align={tableAlignContent[0]}>{index + 1}</TableCell>
                <TableCell align={tableAlignContent[1]}>{'xxxxx'}</TableCell>
                <TableCell align={tableAlignContent[2]}>{'xxxxx'}</TableCell>
                <TableCell align={tableAlignContent[3]}>{'xxxxx'}</TableCell>
                <TableCell align={tableAlignContent[4]}>{'xxxxx'}</TableCell>
              </TableRow>
            ));
          })()}
        />
      </PageRoot>
      <AlertToast description={alertDescription} setDescription={setAlertDescription} />
    </Fragment>
  );
}
