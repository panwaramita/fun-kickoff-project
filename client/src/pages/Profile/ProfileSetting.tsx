import React, { useEffect } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { NavLink, useHistory } from 'react-router-dom';
import { CircularProgress, Grid, Box, ListItem, List } from '@mui/material';
import { Navbar } from '../../components/Navbar/Navbar';
import useStyles from './useStyles';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ProfilePhoto from '../../components/Profile/ProfilePhoto';
import Availabilty from '../../components/Profile/Availabilty';
import EditProfile from '../../components/Profile/EditProfile';

export default function ProfileSetting(): JSX.Element {
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();
  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    return <CircularProgress />;
  }

  return (
    <>
      <Navbar />
      <Router>
        <Grid sx={{ padding: 5, marginTop: 5 }} container rowSpacing={5} columnSpacing={2} className={classes.root}>
          <Grid item xs={2} className={classes.listItem}>
            <List className={classes.list}>
              <ListItem className={classes.listElement}>
                <NavLink exact className={classes.link} activeClassName={classes.activeLink} to="/editProfile">
                  Edit Profile
                </NavLink>
              </ListItem>
              <ListItem className={classes.listElement}>
                <NavLink exact activeClassName={classes.activeLink} className={classes.link} to="/profilePhoto">
                  Profile Photo
                </NavLink>
              </ListItem>
              <ListItem className={classes.listElement}>
                <NavLink activeClassName={classes.activeLink} exact className={classes.link} to="/available">
                  Availability
                </NavLink>
              </ListItem>
              <ListItem className={classes.listElement}>
                <NavLink exact activeClassName={classes.activeLink} className={classes.link} to="/">
                  Payment
                </NavLink>
              </ListItem>
              <ListItem className={classes.listElement}>
                <NavLink exact activeClassName={classes.activeLink} className={classes.link} to="/">
                  Security
                </NavLink>
              </ListItem>
              <ListItem className={classes.listElement}>
                <NavLink exact activeClassName={classes.activeLink} className={classes.link} to="/">
                  Settings
                </NavLink>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={10}>
            <Box width="100%" maxWidth={450} p={3} alignSelf="center" className={classes.box}>
              <Switch>
                <Route exact path="/profileSetting">
                  <Redirect to="/EditProfile" />
                </Route>
                <Route exact path="/profilePhoto" component={ProfilePhoto} />
                <Route exact path="/available" component={Availabilty} />
                <Route exact path="/editProfile" component={EditProfile} />
              </Switch>
            </Box>
          </Grid>
        </Grid>
      </Router>
    </>
  );
}
