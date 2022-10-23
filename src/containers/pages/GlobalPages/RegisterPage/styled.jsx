import { Box, styled } from '@mui/material';
import backgroundStartedFirst from 'assets/background/PageStaredFirst.svg';

export default styled(Box)(({ theme }) => ({
  //Normal Breakpoint =======================================================================================================================================================================
  backgroundColor: 'white',
  width: '100%',
  height: '100%',

  '& *': {
    margin: 0,
    fontFamily: 'Folks'
  },

  '& .box-content': {
    backgroundImage: `url(${backgroundStartedFirst})`,
    backgroundRepeat: 'no-repeat',
    height: 'calc(100vh - 5vw)',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPositionY: 'bottom',
    backgroundPositionX: 'center',
    display: 'flex',
    flexDirection: 'column'
  },

  '& .content-section': {
    flex: 1,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      '&:first-of-type': {
        flex: 1,
        display: 'flex',
        overflow: 'hidden',
        justifyContent: 'center',
        '& > div': {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          overflow: 'hidden'
        }
      }
    }
  },
  //=========================================================================================================================================================================================

  //Mobile Breakpoint =======================================================================================================================================================================
  [theme.breakpoints.only('xs')]: {
    '& .content-section': {
      '& > div': {
        '&:first-of-type': {
          alignItems: 'center',
          '& > div': {
            flexDirection: 'column',
            width: '90%',
            height: '90%',
            outline: 'rgba(224, 224, 224, 0.3) solid 1vw',
            border: '1vw solid rgba(224, 224, 224, 0.6)',
            borderRadius: '3vw'
          }
        },
        '&:last-of-type': {
          padding: '0px 20px',
          boxSizing: 'content-box'
        }
      }
    }
  },
  //=========================================================================================================================================================================================

  //Tablet Breakpoint =======================================================================================================================================================================
  [theme.breakpoints.only('sm')]: {
    '& .content-section': {
      '& > div': {
        '&:first-of-type': {
          alignItems: 'center',
          '& > div': {
            flexDirection: 'column',
            width: '85%',
            height: '90%',
            outline: 'rgba(224, 224, 224, 0.3) solid 0.75vw',
            border: '0.75vw solid rgba(224, 224, 224, 0.6)',
            borderRadius: '2vw'
          }
        },
        '&:last-of-type': {
          padding: '0px 20px'
        }
      }
    }
  },
  //=========================================================================================================================================================================================

  //Laptop+ Breakpoint ======================================================================================================================================================================
  [theme.breakpoints.up('md')]: {
    borderTopLeftRadius: '1.1vw',
    borderTopRightRadius: '1.1vw',
    outline: 'white solid 0.5vw',

    '& .content-section': {
      '& > div': {
        '&:first-of-type': {
          alignItems: 'flex-end',
          '& > div': {
            flexDirection: 'row',
            width: '60%',
            height: '95%',
            outline: 'rgba(224, 224, 224, 0.3) solid 0.5vw',
            border: '0.5vw solid rgba(224, 224, 224, 0.6)',
            borderRadius: '1.5vw'
          }
        },
        '&:last-of-type': {
          padding: '50px 150px'
        }
      }
    }
  }
  //=========================================================================================================================================================================================
}));
