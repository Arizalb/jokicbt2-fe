import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4a148c", // Biru muda
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#5c6bc0", // Hijau lembu
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
          margin: "0 8px",
        },
      },
    },
  },
});

export default theme;
