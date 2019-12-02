import React from 'react';
import { connect } from 'react-redux'
import { send } from '@giantmachines/redux-websocket';
import { closeModal, setModal, logoutRequest } from '../actions/actions';
import { BigButton } from './BigButton';
import { MODAL } from '../utils/constants';

const InGameMenu = ({ selectJukebox, sendLogout, dismiss }) => {
  const selectLogout = () => {
    sendLogout();
    dismiss();
  };

  return (
    <>
      <h1>MENU</h1>
      <BigButton onClick={selectJukebox}>
        JUKEBOX
      </BigButton>
      <BigButton onClick={selectLogout}>
        LOG OUT
      </BigButton>
      <BigButton onClick={dismiss}>
        CANCEL
      </BigButton>
    </>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dismiss: () => dispatch(closeModal()),
  selectJukebox: () => dispatch(setModal(MODAL.JUKEBOX)),
  sendLogout: () => dispatch(send(logoutRequest())),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InGameMenu);
