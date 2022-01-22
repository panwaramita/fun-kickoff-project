import { grey } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    backgroundColor: '#fafafa',
    marginTop: '10px',
    fontFamily: 'Arial,Roboto',
  },
  box: {
    backgroundColor: 'white',
    minWidth: '150vh',
    borderRadius: '0.4em',
    boxShadow: 'rgba(0,0,0,0.2) 0 0 10px',
  },
  authWrapper: {
    minHeight: '100vh',
    paddingTop: 23,
  },
  list: {
    listStyleType: 'none',
  },
  link: {
    fontSize: 14,
    textDecoration: 'none',
    color: '#b9baba',
    fontWeight: 700,
  },
  activeLink: {
    color: '#000000',
    fontSize: 15,
  },
  listElement: {
    marginBottom: '15px',
    color: 'grey',
  },
  welcome: {
    fontSize: 26,
    paddingBottom: 20,
    color: '#000000',
    fontWeight: 700,
  },
  listItem: {
    marginTop: 40,
  },
}));

export default useStyles;
