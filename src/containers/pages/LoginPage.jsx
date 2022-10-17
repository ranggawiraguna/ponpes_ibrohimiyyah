import { Box, TextField, CardMedia, Button, styled } from "@mui/material";
import LogoIcon from "assets/img/logo-icon.png";
import { useState } from "react";
import { useNavigate } from "react-router";

const Page = styled(Box)(({ theme }) => ({
  //Normal Breakpoint =====================================================================================
  minWidth: "100vw",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& > div": {
    width: 500,
    height: 600,
    backgroundColor: "white",
    borderRadius: 25,
    boxShadow: "0 0 10px rgba(0,0,0,0.25)",
    border: "5px solid rgba(255,255,255,0.5)",
    padding: "20px 30px 50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > button": {
      marginTop: "auto",
      justifySelf: "flex-end",
    },
  },
  //=======================================================================================================

  //Mobile Breakpoint =====================================================================================
  [theme.breakpoints.only("xs")]: {
    //
  },
  //=======================================================================================================

  //Tablet Breakpoint =====================================================================================
  [theme.breakpoints.only("sm")]: {
    //
  },
  //=======================================================================================================

  //Laptop+ Breakpoint =====================================================================================
  [theme.breakpoints.up("md")]: {
    //
  },
  //=======================================================================================================
}));

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    switch (username) {
      case "guru":
        navigate("/guru/home");
        break;

      case "sekertaris":
        navigate("/sekertaris/home");
        break;

      case "santri":
        navigate("/santri/home");
        break;

      default:
        break;
    }
  };

  return (
    <Page>
      <Box>
        <CardMedia
          component="img"
          src={LogoIcon}
          alt=""
          sx={{ marginBottom: 5, width: 150 }}
        />
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          label="Username"
          variant="outlined"
        />
        <br />
        <br />
        <TextField fullWidth label="Password" variant="outlined" />
        <Button variant="contained" onClick={handleLogin}>
          Masuk Akun
        </Button>
      </Box>
    </Page>
  );
}
