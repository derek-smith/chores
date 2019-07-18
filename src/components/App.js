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
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles(() => ({
  header: {

  },
  footer: {
    top: 'auto',
    bottom: 0,
  },
  flip: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  count: {
    flex: 'unset',
    marginLeft: 16,
    marginRight: 32,
  }
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
     <AppBar position="fixed" color="default" className={classes.header}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Chores
          </Typography>
        </Toolbar>
      </AppBar>
      {(isSignedIn ? (
        !choreList.length
          ? `Hi ${name}`
          : (
            <List>
              {choreList.map(chore => (
                <ListItem key={chore.name} onClick={() => {/* TODO */}}>
                  <ListItemText disableTypography={true} classes={{root: classes.count}}>
                    <Typography variant="h4" color="inherit">
                      {chore.count}
                    </Typography>
                  </ListItemText>
                  <ListItemText>
                    <Typography variant="h6" color="inherit">
                      {chore.name}
                    </Typography>
                  </ListItemText>
                  <ListItemIcon>
                    <IconButton edge="end">
                      <AddBoxIcon />
                    </IconButton>
                    </ListItemIcon>
                </ListItem>                      
              ))}
            </List>  
          )
      ) : (
        <button onClick={signIn}>Sign in to Google</button>
      ))}
      <AppBar position="fixed" color="default" classes={{root: classes.footer}}>
        <Toolbar classes={{root: classes.flip}}>
          <Button variant="contained" color="primary">Track it</Button>
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
