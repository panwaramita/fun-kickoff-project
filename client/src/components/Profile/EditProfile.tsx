import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { Formik, FormikHelpers } from 'formik';
import useStyles from './useStyles';
import { Select, MenuItem, InputLabel } from '@mui/material';

const EditProfile = (): JSX.Element => {
  const classes = useStyles();
  const fillDate = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const fillMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const fillYear = [];
  for (let i = 1910; i < 2022; i++) {
    fillYear.push(i);
  }
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
        <Select labelId="label" id="select" value="10">
          <MenuItem value="10">Select</MenuItem>
          <MenuItem value="20">Male</MenuItem>
          <MenuItem value="20">Female</MenuItem>
        </Select>
        <br />
        <Typography className={classes.label}>Date Of Birth</Typography>
        <Select id="selectMonth" value="0">
          <MenuItem value="0">Month</MenuItem>
          {fillMonth.map((el) => (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
        <Select id="selectDate" value="0">
          <MenuItem value="0">Date</MenuItem>
          {fillDate.map((el) => (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
        <Select labelId="label" id="select" value="10">
          <MenuItem value="10">Year</MenuItem>
          {fillYear.map((el) => (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
        <Typography className={classes.label}>Email Address</Typography>
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
        <Typography className={classes.label}>PHONE NUMBER</Typography>
        <label>No Phone number entered</label>
        <Button>Add a phone number</Button>
        <Typography className={classes.label}>WHERE YOU LEAVE</Typography>
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
        <Typography className={classes.label}>DESCRIBE ABOUT YOURSELF</Typography>
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
        <Box textAlign="center" marginTop={5}>
          <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditProfile;
