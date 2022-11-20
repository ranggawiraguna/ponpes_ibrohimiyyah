import TableDisplay from 'components/elements/TableDisplay';
import { Backdrop, Box, Button, CardMedia, ClickAwayListener, TableCell, TableRow, Typography, styled } from '@mui/material';
import { tableDisplayType } from 'utils/other/EnvironmentValues';
import IconOptiontDetail from 'assets/icon/OptionDetail.svg';
import { Fragment, useEffect, useState } from 'react';
import { MENU_OPEN } from 'utils/redux/action';
import { useDispatch, useSelector } from 'react-redux';
import AlertToast from 'components/elements/AlertToast';
import ImageNotFound from 'assets/icon/ImageNotFound.png';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from 'config/firebase';

const tableHeadContent = ['No.', 'Nama Lengkap', 'Email', 'Bukti Pembayaran', 'Lainnya'];
const tableAlignContent = ['center', 'left', 'left', 'center', 'center'];

const PageRoot = styled(Box)(() => ({
  '& > div': {
    '& > div': {
      '& > .table-container': {
        '& > table': {
          '& > tbody': {
            '& > tr': {
              '& > td': {
                '&:nth-of-type(4)': {
                  '& > div': {
                    cursor: 'pointer',
                    width: '50px',
                    height: '50px',
                    margin: '0 auto',
                    backgroundColor: 'lightgrey',
                    borderRadius: '5px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }
                },
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

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const sidebarReducer = useSelector((state) => state.sidebarReducer);

  const [alertDescription, setAlertDescription] = useState({
    isOpen: false,
    type: 'info',
    text: '',
    transitionName: 'slideUp'
  });

  const [data, setData] = useState([]);
  const [isOpenOption, setIsOpenOption] = useState([]);
  const [imageBackdrop, setImageBackdrop] = useState(ImageNotFound);
  const [openImageBackdrop, setOpenImageBackdrop] = useState(false);

  useEffect(() => {
    if (!(sidebarReducer.isOpen.findIndex((id) => id === 'registration') > -1)) {
      dispatch({ type: MENU_OPEN, id: 'registration' });
    }
    const listenerRegistration = onSnapshot(
      query(collection(db, 'pendaftaran'), where('status', '==', 'waitingConfirmation')),
      (snapshot) => {
        setData(snapshot.docs.map((document) => ({ id: document.id, ...document.data() })));
      }
    );

    return () => {
      listenerRegistration();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Fragment>
        <PageRoot>
          <TableDisplay
            title="Data Pendaftaran Santri"
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
                  <TableCell align={tableAlignContent[1]}>{data.fullname}</TableCell>
                  <TableCell align={tableAlignContent[2]}>{data.email}</TableCell>
                  <TableCell align="center">
                    <Box
                      sx={{ backgroundImage: `url('${!data.paymentPhotoUrl ? ImageNotFound : data.paymentPhotoUrl}')` }}
                      onClick={() => {
                        if (data.paymentPhotoUrl) {
                          setImageBackdrop(!data.paymentPhotoUrl ? ImageNotFound : data.paymentPhotoUrl);
                          setOpenImageBackdrop(true);
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell align={tableAlignContent[4]}>
                    <ClickAwayListener
                      mouseEvent="onMouseDown"
                      touchEvent="onTouchStart"
                      onClickAway={() => {
                        if (isOpenOption[index]) {
                          isOpenOption[index] = false;
                          setIsOpenOption(Array.from(isOpenOption));
                        }
                      }}
                    >
                      <Box>
                        <Button
                          type="Button"
                          onClick={() => {
                            isOpenOption[index] = !isOpenOption[index];
                            setIsOpenOption(Array.from(isOpenOption));
                          }}
                        >
                          <CardMedia component="img" src={IconOptiontDetail} />
                        </Button>
                        {(() => {
                          const closeClickaway = (callback) => {
                            callback();
                            isOpenOption[index] = !isOpenOption[index];
                            setIsOpenOption(Array.from(isOpenOption));
                          };

                          return isOpenOption[index] ? (
                            <Box>
                              <Button
                                onClick={() => {
                                  closeClickaway(() => {
                                    //
                                  });
                                }}
                              >
                                Lihat Detail
                              </Button>
                              <Button
                                onClick={() => {
                                  closeClickaway(() => {
                                    //
                                  });
                                }}
                              >
                                Konfirmasi Pembayaran
                              </Button>
                            </Box>
                          ) : (
                            <></>
                          );
                        })()}
                      </Box>
                    </ClickAwayListener>
                  </TableCell>
                </TableRow>
              ));
            })()}
          />
        </PageRoot>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, padding: '2vw' }}
          open={openImageBackdrop}
          onClick={() => {
            document.body.style = '';
            setOpenImageBackdrop(false);
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${imageBackdrop})`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </Backdrop>
        <AlertToast description={alertDescription} setDescription={setAlertDescription} />
      </Fragment>
    </div>
  );
}
