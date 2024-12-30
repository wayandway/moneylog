import { createTheme, ThemeOptions } from '@mui/material/styles';
import colors from './colors';

// 공통
const commonThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        contained: {
          boxShadow: 'none',
          ':hover': {
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: '1rem',
        },
      },
    },
  },
};

// Light Theme
const lightThemeOptions: ThemeOptions = {
  ...commonThemeOptions,
  palette: {
    primary: {
      main: colors.yellow[500],
      light: colors.yellow[300],
      dark: colors.yellow[700],
      contrastText: colors.white,
    },
    secondary: {
      main: colors.gray[500],
      light: colors.gray[300],
      dark: colors.gray[700],
      contrastText: colors.black,
    },
    background: {
      default: colors.gray[50],
      paper: colors.white,
    },
    text: {
      primary: colors.gray[900],
      secondary: colors.gray[600],
    },
  },
};

// Dark Theme
const darkThemeOptions: ThemeOptions = {
  ...commonThemeOptions,
  palette: {
    primary: {
      main: colors.yellow[700],
      light: colors.yellow[500],
      dark: colors.yellow[900],
      contrastText: colors.white,
    },
    secondary: {
      main: colors.gray[700],
      light: colors.gray[500],
      dark: colors.gray[900],
      contrastText: colors.white,
    },
    background: {
      default: colors.gray[900],
      paper: colors.gray[800],
    },
    text: {
      primary: colors.white,
      secondary: colors.gray[400],
    },
  },
};

const lightTheme = createTheme(lightThemeOptions);
const darkTheme = createTheme(darkThemeOptions);

export { lightTheme, darkTheme };
