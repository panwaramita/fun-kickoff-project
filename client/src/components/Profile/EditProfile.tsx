import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { Formik, FormikHelpers } from 'formik';
import useStyles from './useStyles';
import { Select, MenuItem, InputLabel, Grid, FormGroup } from '@mui/material';

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
    <>
      <Box
        p={1}
        style={{ justifyContent: 'center', fontSize: '20px', marginTop: '40px' }}
        display="flex"
        justifyContent="flex-end"
        alignSelf="flex-end"
        marginRight={5}
      >
        <label style={{ fontSize: '35px' }}>Edit Profile</label>
      </Box>
      <form className={classes.form} noValidate>
        <Grid container component="main" className={classes.root}>
          <Grid item xs={3} sm={4} md={3} className={classes.gridItem}>
            <Box display="flex" justifyContent="center" flexDirection="column">
              <Typography className={classes.label}>first name</Typography>
              <Typography className={classes.label}>last name</Typography>
              <Typography className={classes.label}>Gender</Typography>
              <Typography className={classes.label}>Birth Date</Typography>
              <Typography className={classes.label}>Email Address</Typography>
              <Typography className={classes.label}>PHONE NUMBER</Typography>
              <Typography className={classes.label}>WHERE YOU LEAVE</Typography>
              <Typography className={classes.label}>DESCRIBE YOURSELF</Typography>
            </Box>
          </Grid>
          <Grid item xs={9} sm={8} md={9} className={classes.gridItem}>
            <Box display="flex" justifyContent="center" flexDirection="column">
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
                name="firstname"
                autoComplete="firstname"
                autoFocus
                placeholder="Your First Name"
              />
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
                name="lastname"
                autoComplete="lastname"
                autoFocus
                placeholder="Your Last Name"
              />
              <Select labelId="label" id="select" value="10" className={classes.dropDown}>
                <MenuItem value="10">Select</MenuItem>
                <MenuItem value="20">Male</MenuItem>
                <MenuItem value="20">Female</MenuItem>
              </Select>
              <Box flexDirection="row" className={classes.phoneDetails}>
                <Select className={classes.dropDown} id="selectMonth" value="0">
                  <MenuItem value="0">Month</MenuItem>
                  {fillMonth.map((el) => (
                    <MenuItem key={el} value={el}>
                      {el}
                    </MenuItem>
                  ))}
                </Select>
                <Select className={classes.dropDownDate} id="selectDate" value="0">
                  <MenuItem value="0">Date</MenuItem>
                  {fillDate.map((el) => (
                    <MenuItem key={el} value={el}>
                      {el}
                    </MenuItem>
                  ))}
                </Select>
                <Select className={classes.dropDownYear} labelId="label" id="select" value="10">
                  <MenuItem value="10">Year</MenuItem>
                  {fillYear.map((el) => (
                    <MenuItem key={el} value={el}>
                      {el}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
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
                name="email"
                autoComplete="email"
                autoFocus
                placeholder="Your email"
              />
              <Box flexDirection="row" className={classes.phoneDetails}>
                <span className={classes.phoneNumber}>No Phone number entered</span>
                <Button className={classes.phoneButton}>Add a phone number</Button>
              </Box>
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
                name="city"
                autoComplete="city"
                autoFocus
                placeholder="Your Address"
              />
              <TextField
                className={classes.testWidth}
                id="username"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  classes: { input: classes.inputsDescription },
                }}
                name="description"
                autoComplete="description"
                autoFocus
                placeholder="Your Description"
              />
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" marginTop={5}>
          <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
            Save
          </Button>
        </Box>
      </form>
    </>
  );
};

export default EditProfile;
