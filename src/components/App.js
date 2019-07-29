import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import HeaderBar from './HeaderBar';
import ChangePersonDialog from './ChangePersonDialog';
import SaveChoresDialog from './SaveChoresDialog';

import {decrementChore, getChoreList, incrementChore, openChangePersonDialog, saveCompletedChores, signIn} from '../state/actions';

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

const App = ({choreList, decrementChore, getChoreList, incrementChore, isSignedIn, name, openChangePersonDialog, saveCompletedChores, signIn}) => {
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
      <HeaderBar />

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

      <SaveChoresDialog />
      <ChangePersonDialog />
    </>
  );
}

const mapStateToProps = ({choreList, isSignedIn, name}) => ({
  choreList: Object.values(choreList),
  isSignedIn,
  name,
});

const mapDispatchToProps = {decrementChore, getChoreList, incrementChore, openChangePersonDialog, saveCompletedChores, signIn};

export default connect(mapStateToProps, mapDispatchToProps)(App);
