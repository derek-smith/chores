import React from 'react';
import {connect} from 'react-redux';

import {closeSaveChoresDialog} from '../state/actions';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const SaveChoresDialog = ({closeSaveChoresDialog, isSaveChoresDialogOpen, saveStatus}) => (
  <Dialog open={isSaveChoresDialogOpen} onClose={closeSaveChoresDialog}>
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
          <Button onClick={() => closeSaveChoresDialog(true)}>Ok</Button>
        </DialogActions>
      </>
    ) : (
      <>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>We weren't able to save your chores right now. Try again later.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeSaveChoresDialog(false)}>Ok</Button>
        </DialogActions>
      </>
    )}
  </Dialog>
);

const mapStateToProps = ({isSaveChoresDialogOpen, saveStatus}) => ({
  isSaveChoresDialogOpen,
  saveStatus,
});

const mapDispatchToProps = {closeSaveChoresDialog};

export default connect(mapStateToProps, mapDispatchToProps)(SaveChoresDialog);