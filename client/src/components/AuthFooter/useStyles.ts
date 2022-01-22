import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  authHeader: {
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  accAside: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    paddingRight: '0.5em',
  },
  authLink: {
    color: ' #f14140',
  },
}));

export default useStyles;
