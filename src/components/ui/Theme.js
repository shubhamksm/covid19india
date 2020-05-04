import { createMuiTheme } from "@material-ui/core/styles";

const greyBlue = "#f5f5f5";
const blackSecondary = "#212121";

export default createMuiTheme({
  palette: {
    common: {
      greyBlue: `${greyBlue}`,
      blackSecondary: `${blackSecondary}`,
    },
    primary: {
      main: `${greyBlue}`,
    },
    secondary: {
      main: `${blackSecondary}`,
    },
  },
  typography: {
    fontFamily: ["Maven Pro", "sans-serif"],
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": ["Maven Pro"],
      },
    },
    MuiAppBar: {
      boxShadow: "none",
    },
  },
});
