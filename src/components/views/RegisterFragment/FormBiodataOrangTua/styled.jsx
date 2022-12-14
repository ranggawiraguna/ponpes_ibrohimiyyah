import { styled } from '@mui/material';
import { BoxTransition } from 'components/elements/MotionTransitions';

export default styled(BoxTransition)(({ theme }) => ({
  //Normal Breakpoint =======================================================================================================================================================================
  width: '100%',
  height: '100%',
  padding: '50px 30px 30px',
  overflow: 'auto',
  '& > h2': {
    fontFamily: 'Folks',
    padding: '0px 20px 30px'
  },
  '& > div': {
    '&:first-of-type': {
      display: 'flex',
      marginBottom: 20,
      padding: '0 20px',
      '& > div': {
        height: 'max-content',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        '& input': {
          width: '100%'
        }
      }
    },
    '&:nth-of-type(2)': {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      padding: '0 20px 50px',
      alignItems: 'stretch',
      '& input': {
        width: '100%'
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
    '& > div': {
      '&:first-of-type': {
        flexDirection: 'column',
        gap: 20
      }
    }
  },
  //=========================================================================================================================================================================================

  //Laptop+ Breakpoint ======================================================================================================================================================================
  [theme.breakpoints.up('md')]: {
    '& > div': {
      flexDirection: 'row',
      '&:first-of-type': {
        gap: 50
      }
    }
  }
  //=========================================================================================================================================================================================
}));
