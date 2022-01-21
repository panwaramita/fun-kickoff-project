import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useStyles from './useStyles';
import { Select, MenuItem, InputLabel } from '@mui/material';

const EditProfile = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box width="100%" maxWidth={450} p={3} alignSelf="center">
      <form className={classes.form} noValidate>
        <Typography className={classes.label}>first name</Typography>
        <TextField
          className={classes.testWidth}
          id="username"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            classes: { input: classes.inputs },
          }}
          name="username"
          autoComplete="username"
          autoFocus
        />
        <Typography className={classes.label}>last name</Typography>
        <TextField
          className={classes.testWidth}
          id="username"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            classes: { input: classes.inputs },
          }}
          name="username"
          autoComplete="username"
          autoFocus
        />
        <Typography className={classes.label}>Gender</Typography>
        <select>
          <option selected disabled>
            Choose one
          </option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="kindacode.com">Kindacode.com</option>
        </select>

        <Box textAlign="center" marginTop={5}>
          <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
            Create
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditProfile;
