import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Ariel", "Roboto"',
    fontSize: 10,
    fontWeightRegular: 700,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    h5: {
      fontSize: 30,
      fontWeight: 900,
      color: '#0000000',
      textTransform: 'uppercase',
    },
    h1: {
      fontSize: '60px',
    },
  },
  palette: {
    primary: { main: '#3a8dff' },
  },
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '15px',
          marginTop: '3px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          backgroundColor: '#f14140',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
        },
      },
    },
  },
});
