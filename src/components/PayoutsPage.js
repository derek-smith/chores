import React from 'react';

import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  '@media (min-width: 600px)': {
    container: {
      margin: `56px 0`,
    },
  },
  container: {
    margin: `64px 0`,
  },
  center: {
    width: '100%',
    textAlign: 'center',
  },
  week: {
    paddingTop: 0,
    marginBottom: 16,
  },
  split: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    '& > *': {
      flex: 1,
      margin: '0 32px',
    },
    '& > :first-child': {
      flex: 1,
      textAlign: 'right',
      margin: '0 8px 0 32px',
    },
    '& > :last-child': {
      flex: 1,
      textAlign: 'left',
      margin: '0 32px 0 8px',
    },
  },
  add: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
}));

const PayoutsPage = () =>  {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <List>
          <ListItem alignItems="center">
            <ListItemText disableTypography>
              <Typography variant="body1" align="center">
                Week of
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem divider classes={{root: classes.week}}>
            <Typography variant="h3" classes={{root: classes.center}}>
              Jul 27 - Jun 2
            </Typography>
          </ListItem>
          <ListItem classes={{root: classes.split}}>
            <Typography variant="body1">
              Mom
            </Typography>
            <Typography variant="h6" color="primary">
              $55
            </Typography>
          </ListItem>
          <ListItem classes={{root: classes.split}}>
            <Typography variant="body1">
              Dad
            </Typography>
            <Typography variant="h6" color="primary">
              $21
            </Typography>
          </ListItem>
        </List>
      </div>
      <Link to="chores" className={classes.add}>
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Link>
    </>
  );
};

export default PayoutsPage;