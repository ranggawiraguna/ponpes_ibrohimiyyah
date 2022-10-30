import { styled } from '@mui/material';
import { BoxTransition } from 'components/elements/MotionTransitions';

export default styled(BoxTransition)(({ theme }) => ({
  //Normal Breakpoint =======================================================================================================================================================================
  width: '100%',
  height: '100%',
  padding: 30,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  '& > h2': {
    fontFamily: 'Folks',
    padding: '0px 20px 30px'
  },
  '& > div': {
    '&:first-of-type': {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 40,
      '& > div': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: 30,
        '& > div:nth-of-type(1)': {
          height: 'fit-content',
          borderRadius: 10,
          outline: '3px solid gray',
          backgroundColor: 'white',
          padding: '20px 30px',
          '& > table': {
            '& > tr': {
              '& > td:nth-of-type(2)': {
                padding: '0 15px'
              }
            }
          }
        },
        '& > div:nth-of-type(2)': {
          borderRadius: 3,
          outline: '2px solid rgba(0,0,0,0.2)',
          backgroundColor: 'white',
          '& > label': {
            '& > span': {
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              padding: 15,
              '& svg': {
                fill: 'rgba(0,0,0,0.5)'
              },
              '& p': {
                fontSize: 12,
                color: 'rgba(0,0,0,0.5)'
              }
            }
          }
        }
      }
    },
    '&:last-of-type': {
      display: 'flex',
      justifyContent: 'space-between',
      '& > button': {
        fontFamily: 'Folks',
        '&:first-of-type': {
          backgroundColor: '#ccc'
        }
      }
    }
  },
  //=========================================================================================================================================================================================

  //Mobile Breakpoint =======================================================================================================================================================================
  [theme.breakpoints.down('md')]: {
    '& > h2': {
      fontSize: 18,
      padding: '0px 20px 30px 0px'
    },
    '& > div': {
      '& > div': {
        '& > div:nth-of-type(1)': {
          '& > h3': {
            fontSize: 17
          }
        }
      }
    }
  },
  //=========================================================================================================================================================================================

  //Laptop+ Breakpoint ======================================================================================================================================================================
  [theme.breakpoints.up('md')]: {
    '& > div': {
      '&:first-of-type': {
        '& > div': {
          maxWidth: '60%'
        }
      }
    }
  }
  //=========================================================================================================================================================================================
}));
