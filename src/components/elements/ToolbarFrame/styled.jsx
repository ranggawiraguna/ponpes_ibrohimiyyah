import { styled, Box } from '@mui/material';

export default styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: 100,
  alignItems: 'center',
  justifyContent: 'space-between',

  '& a': {
    textDecoration: 'none'
  },
  '& button': {
    fontFamily: 'Folks',
    fontWeight: 'bold',
    textTransform: 'none',
    letterSpacing: 'normal',
    padding: 0,
    minHeight: 0,
    minWidth: 0
  },
  '& svg': {
    minWidth: 'auto',
    minheight: 'auto',
    width: 'auto',
    height: 'auto'
  },

  [theme.breakpoints.only('xs')]: {
    padding: '5vw 5vw 0',

    '& button': {
      borderRadius: '1.2vw',
      fontSize: '2.5vw',
      padding: '1vw 3.2vw'
    },
    '& svg': {
      height: '8vw'
    }
  },

  [theme.breakpoints.only('sm')]: {
    padding: '3vw 3vw 0',
    '& button': {
      borderRadius: '0.75vw',
      fontSize: '1.5vw',
      padding: '0.4vw 1.8vw'
    },
    '& svg': {
      height: '6vw'
    }
  },

  [theme.breakpoints.up('md')]: {
    padding: '1vw 1.5vw 1vw 3vw',
    '& button': {
      borderRadius: '0.4vw',
      fontSize: '1vw',
      padding: '0.35vw 1.25vw'
    },
    '& svg': {
      height: '3.33vw'
    }
  }
}));
