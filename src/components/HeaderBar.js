import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {openChangePersonDialog} from '../state/actions';

const useStyles = makeStyles(() => ({
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userNameButton: {
    paddingLeft: 12,
  },
  userName: {
    marginLeft: 8,
  },
}));

const HeaderBar = ({isChangePersonButtonHidden, name, openChangePersonDialog}) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="default">
      <Toolbar classes={{root: classes.spaceBetween}}>
        <Typography variant="h6" color="inherit">Chores</Typography>
        {name && !isChangePersonButtonHidden && (
          <Button variant="contained" color="primary" classes={{root: classes.userNameButton}} onClick={openChangePersonDialog}>
            <PersonIcon />
            <span className={classes.userName}>{name}</span>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

HeaderBar.propTypes = {
  isChangePersonButtonHidden: PropTypes.bool,
  name: PropTypes.string,
  openChangePersonDialog: PropTypes.func,
};

const mapStateToProps = ({name}) => ({name});

const mapDispatchToProps = {openChangePersonDialog};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);