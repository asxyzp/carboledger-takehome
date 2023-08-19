// IMPORTING PACKAGES/MODULES
import { createTheme } from "@mui/material";

// DARK THEME
const DarkTheme = {
  palette: {
    mode: "dark",
    primary: {
      main: "#ff7514",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    h1: {
      fontFamily: "Paytone One",
    },
    fontFamily: "Montserrat",
    h2: {
      fontFamily: "Paytone One",
    },
    h3: {
      fontFamily: "Paytone One",
    },
  },
};

// LIGHT THEME
const LightTheme = {
  ...DarkTheme,
  palette: {
    ...DarkTheme.palette,
    mode: "light",
    background: {
      default: "#ffefd5",
    },
  },
};

export const DarkMode = createTheme(DarkTheme);
export const LightMode = createTheme(LightTheme);
