import React from 'react';
import {connect} from 'react-redux';

import {changePerson, closeChangePersonDialog} from '../state/actions';

import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';

const ChangePersonDialog = ({changePerson, closeChangePersonDialog, isChangePersonDialogOpen, people}) => (
  <Dialog open={isChangePersonDialogOpen} onClose={closeChangePersonDialog}>
    <DialogTitle>Change person</DialogTitle>
    <List>
      {people.map(person => (
        <ListItem button onClick={() => changePerson(person)} key={person}>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={person} />
        </ListItem>
      ))}
    </List>
  </Dialog>
);

const mapStateToProps = ({isChangePersonDialogOpen, people}) => ({
  isChangePersonDialogOpen,
  people,
});

const mapDispatchToProps = {changePerson, closeChangePersonDialog};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePersonDialog);