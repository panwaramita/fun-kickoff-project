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
    },
  },
  palette: {
    primary: { main: '#f14140' },
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
  },
});
