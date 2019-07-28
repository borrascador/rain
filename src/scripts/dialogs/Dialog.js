import React from 'react';
import { connect } from 'react-redux'

const styles = {
  dialog: {
    position: 'absolute',
    border: '4px solid white',
    backgroundColor: 'black',
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
  },
};

const Dialog = ({ children }) => (
  <div className="dialog" style={ styles.dialog }>
    <div className="content" style={ styles.content }>
      { children }
    </div>
  </div>
);

export default connect()(Dialog);