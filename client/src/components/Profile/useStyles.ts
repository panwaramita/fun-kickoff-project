import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(9),
  },
  label: {
    fontSize: 15,
    color: '#000000',
    paddingLeft: '5px',
    marginTop: '30px',
    textAlign: 'right',
    marginBottom: '32px',
  },
  dropDown: {
    marginLeft: '20px',
    width: '20%',
    height: '65px',
  },
  dropDownDate: {
    marginLeft: '20px',
    width: '15%',
    height: '65px',
  },
  dropDownYear: {
    marginLeft: '20px',
    width: '15%',
    height: '65px',
  },
  phoneNumber: {
    fontSize: '15px',
    marginLeft: '22px',
    fontStyle: 'italic',
  },
  gridItem: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  phoneButton: {
    fontSize: '15px',
    marginLeft: '200px',
    border: '0.5px solid #f14140',
    borderRadius: '5px',
    textTransform: 'none',
    width: '30%',
  },
  testWidth: {
    width: '80%',
    marginLeft: '20px',
  },
  inputs: {
    marginTop: '0.8rem',
    height: '1.3rem',
    fontSize: 15,
  },
  phoneDetails: {
    marginTop: '19px',
    marginBottom: '25px',
  },
  inputsDescription: {
    fontSize: 15,
    height: '5rem',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    fontWeight: 'bold',
  },
}));

export default useStyles;
