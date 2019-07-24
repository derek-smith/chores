import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {closeSaveDialog, decrementChore, getChoreList, incrementChore, saveCompletedChores, signIn} from '../state/actions';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
    alignItems: 'flex-start',
  },
  choreName: {
  },
  count: {
    flex: 'unset',
    maxWidth: 100,
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  removeIcon: {
    justifyContent: 'center',
    minWidth: 0,
    paddingRight: 8,
    marginTop: 2,
    color: 'red',
  },
  itemLeft: {
    display: 'flex',
  },
}));

const App = ({choreList, closeSaveDialog, decrementChore, getChoreList, incrementChore, isSaveDialogOpen, isSignedIn, name, saveCompletedChores, saveStatus, signIn}) => {
  const classes = useStyles();
  
  useEffect(() => {
    if (isSignedIn) {
      getChoreList();
    }
  }, [isSignedIn]); // eslint-disable-line

  const onIncrementChore = choreId => () => incrementChore(choreId);
  const onDecrementChore = choreId => event => {
    event.stopPropagation();
    decrementChore(choreId);
  };

  const total = Object.values(choreList).reduce((total, chore) => total + (chore.count * chore.price), 0);

  const onSaveClick = () => {
    const timestamp = new Date().toISOString();
    const rows = Object.values(choreList)
      .filter(chore => chore.count > 0)
      .reduce((rows, chore) => [
        ...rows,
        ...[...Array(chore.count)].map(() => [
          timestamp,
          name,
          chore.name,
          chore.price / 100,        
        ])
      ], []);
    saveCompletedChores(rows);
  }

  return (
    <>
     <AppBar position="fixed" color="default">
        <Toolbar classes={{root: classes.spaceBetween}}>
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
          ? `Hi ${name}, we couldn't find the chore list.`
          : (
            <List dense={true} classes={{root: classes.list}}>
              {choreList.map(chore => (
                <ListItem key={chore.name} classes={{root: classes.chore}} onClick={onIncrementChore(chore.id)} button={true} divider={true}>
                  {chore.count > 0 && <ListItemIcon classes={{root: classes.removeIcon}} onClick={onDecrementChore(chore.id)}><RemoveCircleIcon /></ListItemIcon>}
                  <ListItemText classes={{root: classes.choreName}}>{chore.name}</ListItemText>
                  <ListItemText classes={{root: classes.count}}>{chore.count} @ ${chore.price / 100}</ListItemText>
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
        <Toolbar classes={{root: classes.spaceBetween}}>
          {isSignedIn && (
            <>
              <Button variant="contained" color="primary" disabled={total <= 0} onClick={onSaveClick}>Save</Button>
              {total > 0 && (
                <Typography variant="h6" color="primary">
                  <span>+</span> ${(total / 100)}
                </Typography>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Dialog open={isSaveDialogOpen} onClose={closeSaveDialog}>
        {saveStatus === 'PENDING' ? (
          <>
            <DialogTitle>In progress</DialogTitle>
            <DialogContent>
              <DialogContentText>We're saving your chores now...</DialogContentText>
            </DialogContent>
          </>
        ) : saveStatus === 'SUCCESS' ? (
          <>
            <DialogTitle>Done</DialogTitle>
            <DialogContent>
              <DialogContentText>Nice work!! Your chores have been saved.</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeSaveDialog}>Ok</Button>
            </DialogActions>
          </>
        ) : (
          <>
            <DialogTitle>Error</DialogTitle>
            <DialogContent>
              <DialogContentText>We weren't able to save your chores right now. Try again later.</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeSaveDialog}>Ok</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}

const mapStateToProps = ({choreList, isSaveDialogOpen, isSignedIn, name, saveStatus}) => ({
  choreList: Object.values(choreList),
  isSaveDialogOpen,
  isSignedIn,
  name,
  saveStatus,
});

const mapDispatchToProps = {closeSaveDialog, decrementChore, getChoreList, incrementChore, saveCompletedChores, signIn};

export default connect(mapStateToProps, mapDispatchToProps)(App);
