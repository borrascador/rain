import React from 'react';
import { connect } from 'react-redux';
import { MODAL, VIEW } from '../utils/constants';
import TitleView from './TitleView';
import Dialog from './Dialog';
import Login from './Login';
import Register from './Register';
import Success from './Success';
import Failure from './Failure';
import ServerSelect from './ServerSelect';
import Jukebox from './Jukebox';
import Chat from './Chat';
import InGameMenu from './InGameMenu';

class AppRoot extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.audioRef = React.createRef();
    this.setSong = this.setSong.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  setSong(src) {
    this.audioRef.current.src = src;
  }

  play() {
    this.audioRef.current.play();
  }

  pause() {
    this.audioRef.current.pause();
  }

  render() {
    const { view, modal } = this.props;
    return (
      <>
        <audio ref={this.audioRef} type="audio/mp3" />
        { view === VIEW.TITLE && <TitleView />}
        { ![undefined, MODAL.PARTY, MODAL.STORY].includes(modal) && (
          <Dialog>
            { modal === MODAL.LOGIN && <Login /> }
            { modal === MODAL.REGISTER && <Register /> }
            { modal === MODAL.SUCCESS && <Success /> }
            { modal === MODAL.FAILURE && <Failure /> }
            { modal === MODAL.SERVER_SELECT && <ServerSelect /> }
            { modal === MODAL.JUKEBOX && this.audioRef && (
              <Jukebox setSong={this.setSong} play={this.play} pause={this.pause} />
            )}
            { modal === MODAL.IN_GAME_MENU && <InGameMenu /> }
          </Dialog>
        )}
        { view === VIEW.GAME && <Chat /> }
      </>
    );
  }
}

const mapStateToProps = state => ({
  view: state.view,
  modal: state.modal,
});

export default connect(
  mapStateToProps,
)(AppRoot);
