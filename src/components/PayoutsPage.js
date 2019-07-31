import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

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

const PayoutsPage = ({completedChores, currentWeek}) =>  {
  const classes = useStyles();
  
  const startDate = currentWeek.start && currentWeek.start.toLocaleDateString("en-US", {month: 'short', weekday: 'short', day: 'numeric'});
  const endDate = currentWeek.end && currentWeek.end.toLocaleDateString("en-US", {month: 'short', weekday: 'short', day: 'numeric'});

  // Calculate the payouts
  const currentWeekcompletedChores = completedChores.filter(chore => {
    const date = new Date(chore[0]);
    return date >= currentWeek.start && date <= currentWeek.end;
  })
  console.log('currentWeek completedChores:', currentWeekcompletedChores);

  const payouts = Object.entries(
    currentWeekcompletedChores
      .reduce((payouts, chore) => {
        payouts[chore[1]] = payouts[chore[1]] || 0
        payouts[chore[1]] += parseInt(chore[3]);
        return payouts;
      }, {})
    ).map(([name, sum]) => ({name, sum}))
    .sort((a, b) => b.sum - a.sum);
  console.log('payouts:', payouts);

  return (
    <>
      <div className={classes.container}>
        <List>
          <ListItem alignItems="center">
            <ListItemText disableTypography>
              <Typography variant="subtitle1" align="center" gutterBottom>
                Week of
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem divider classes={{root: classes.week}}>
            <Typography variant="h4" classes={{root: classes.center}}>
              {startDate}{' - '}{endDate}
            </Typography>
          </ListItem>
          {payouts.map(payout => (
            <ListItem key={payout.name} classes={{root: classes.split}}>
              <Typography variant="body1">
                {payout.name}
              </Typography>
              <Typography variant="h6" color="primary">
                ${payout.sum}
              </Typography>
            </ListItem>
          ))}
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

PayoutsPage.propTypes = {
  completedChores: PropTypes.array,
  currentWeek: PropTypes.shape({
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
  }),
};

const mapStateToProps = ({completedChores, currentWeek}) => ({completedChores, currentWeek});

export default connect(mapStateToProps)(PayoutsPage);