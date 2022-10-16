import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import ErrorIllustration from "../../assets/svg/ErrorIllustration";

export default function ErrorPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#404040",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& > img": {
          minWidth: 0,
          minHeight: 0,
        },
        [theme.breakpoints.only("xs")]: {
          padding: "10vw",
        },
        [theme.breakpoints.only("sm")]: {
          padding: "15vw",
        },
        [theme.breakpoints.up("md")]: {
          padding: "20vw",
        },
      }}
    >
      <ErrorIllustration />
    </Box>
  );
}
