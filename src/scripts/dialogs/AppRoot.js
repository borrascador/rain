import React from 'react';
import { connect } from 'react-redux'
import { MODAL, VIEW } from '../utils/constants';
import TitleView from './TitleView';
import Dialog from './Dialog';
import Login from './Login';
import Register from './Register';
import Success from './Success';
import Failure from './Failure';
import ServerSelect from './ServerSelect';

const AppRoot = ({ view, modal }) => {
  return (
    <>
      { view === VIEW.TITLE && <TitleView />}
      { modal !== MODAL.NONE && (
        <Dialog>
          { modal === MODAL.LOGIN && <Login /> }
          { modal === MODAL.REGISTER && <Register /> }
          { modal === MODAL.SUCCESS && <Success /> }
          { modal === MODAL.FAILURE && <Failure /> }
          { modal === MODAL.SERVER_SELECT && <ServerSelect /> }
        </Dialog>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  view: state.view,
  modal: state.modal,
});

export default connect(
  mapStateToProps,
)(AppRoot);
