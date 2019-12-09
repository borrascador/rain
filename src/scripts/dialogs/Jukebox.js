import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/actions';
import Button from './Button';

const Jukebox = ({
  play,
  pause,
  setSong,
  dismiss,
  songs,
}) => (
    <>
      <h1>JUKEBOX</h1>
      {
        songs.map(({ src, title }, index) => (
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            width: '100%',
          }} key={ index }
          >
            <Button onClick={setSong(src)}>
              SET
            </Button>
            <h2>{title}</h2>
          </div>
        ))
      }
      <div style={{ display: 'inline-block' }}>
        <Button onClick={play}>
          PLAY
        </Button>
        <Button onClick={pause}>
          PAUSE
        </Button>
        <Button onClick={dismiss}>
          EXIT
        </Button>
      </div>
    </>
);

const mapStateToProps = state => ({
  songs: state.songs,
});

const mapDispatchToProps = dispatch => ({
  dismiss: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Jukebox);
