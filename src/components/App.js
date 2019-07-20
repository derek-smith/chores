import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {getChoreList, signIn} from '../state/actions';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(() => ({
  centered: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    margin: '56px 0',
    padding: '4px 0 0 0',
  },
  chore: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  choreName: {
    maxWidth: '50%',
  },
  count: {
    flex: 'unset',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  invisible: {
    // visibility: 'hidden',
    minWidth: 'unset',
  },
  footer: {
    top: 'auto',
    bottom: 0,
  },
  userName: {
    marginLeft: 8,
  },
  userNameButton: {
    paddingLeft: 12,
  },
}));

const App = ({choreList, getChoreList, isSignedIn, name, signIn}) => {
  useEffect(() => {
    if (isSignedIn) {
      getChoreList();
    }
  }, [isSignedIn]); // eslint-disable-line

  const classes = useStyles();

  return (
    <>
     <AppBar position="fixed" color="default">
        <Toolbar classes={{root: classes.header}}>
          <Typography variant="h6" color="inherit">
            Chores
          </Typography>
          {name && (
            <Button variant="contained" color="primary" classes={{root: classes.userNameButton}}>
              <PersonIcon />
              <span className={classes.userName}>{name}</span>
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {(isSignedIn ? (
        !choreList.length
          ? `Hi ${name}`
          : (
            <List dense={true} classes={{root: classes.list}}>
              {choreList.map(chore => (
                <ListItem key={chore.name} classes={{root: classes.chore}} onClick={() => console.log('ListItem onClick()')} button={true} divider={true}>
                  <ListItemText classes={{root: classes.choreName}}>
                    {chore.name}
                  </ListItemText>
                  <ListItemText classes={{root: classes.count}}>{chore.count} @ ${(chore.price / 100)}</ListItemText>
                  {/* <ListItemIcon classes={{root: classes.invisible}}>
                    <IconButton edge="end"><AddBoxIcon /></IconButton>
                  </ListItemIcon> */}
                </ListItem>                      
              ))}
            </List>  
          )
      ) : (
        <div className={classes.centered}>
          <Button variant="contained" onClick={signIn}>Sign in to Google</Button>
        </div>
      ))}
      <AppBar position="fixed" color="default" classes={{root: classes.footer}}>
        <Toolbar>
          {isSignedIn && (
            <Button variant="contained" color="primary" disabled={true /* TODO: how many chores are selected? */}>Save</Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

const mapStateToProps = ({choreList, isSignedIn, name}) => ({
  choreList,
  isSignedIn,
  name,
});

const mapDispatchToProps = {getChoreList, signIn};

export default connect(mapStateToProps, mapDispatchToProps)(App);
