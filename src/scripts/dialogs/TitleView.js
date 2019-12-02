import React from 'react';
import { connect } from 'react-redux';
import { setModal } from '../actions/actions';
import { MODAL } from '../utils/constants';
import { CONNECT_GREEN, DISCONNECT_RED } from '../utils/colors';

const styles = {
  titleView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    height: '100%',
    width: '100%',
  },
  top: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 48,
    textAlign: 'center',
  },
  bottom: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 32,
    textAlign: 'center',
  },
};

const TitleView = ({
  showLogin, showRegister, showJukebox, showServerSelect, connected,
}) => (
    <div style={styles.titleView}>
      <div style={styles.top}>
        <h1>RAINFOREST TRAIL</h1>
      </div>
      <div style={styles.bottom}>
        <div><a onClick={showLogin}>LOGIN</a></div>
        <div><a onClick={showRegister}>REGISTER</a></div>
        <div><a onClick={showJukebox}>JUKEBOX</a></div>
        <div>
          <a
            onClick={showServerSelect}
            style={{ color: connected ? CONNECT_GREEN : DISCONNECT_RED }}
          >
            { connected ? 'CONNECTED' : 'DISCONNECTED' }
          </a>
        </div>
      </div>
    </div>
);

const mapStateToProps = state => ({
  connected: state.connected,
});

const mapDispatchToProps = dispatch => ({
  showLogin: () => dispatch(setModal(MODAL.LOGIN)),
  showRegister: () => dispatch(setModal(MODAL.REGISTER)),
  showServerSelect: () => dispatch(setModal(MODAL.SERVER_SELECT)),
  showJukebox: () => dispatch(setModal(MODAL.JUKEBOX)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TitleView);
