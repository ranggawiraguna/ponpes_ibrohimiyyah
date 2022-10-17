import { Box, styled } from "@mui/material";
import ErrorIllustration from "assets/svg/ErrorIllustration";

const Page = styled(Box)(({ theme }) => ({
  //Normal Breakpoint =====================================================================================
  backgroundColor: '#404040',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  '& > img': {
    minWidth: 0,
    minHeight: 0
  },
  //=======================================================================================================

  //Mobile Breakpoint =====================================================================================
  [theme.breakpoints.only('xs')]: {
    padding: '10vw'
  },
  //=======================================================================================================

  //Tablet Breakpoint =====================================================================================
  [theme.breakpoints.only('sm')]: {
    padding: '15vw'
  },
  //=======================================================================================================

  //Laptop+ Breakpoint =====================================================================================
  [theme.breakpoints.up('md')]: {
    padding: '20vw'
  }
  //=======================================================================================================
}));


export default function ErrorPage() {
  return (
    <Page>
      <ErrorIllustration />
    </Page>
  );
}
