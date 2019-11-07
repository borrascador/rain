import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux'
import { send } from '@giantmachines/redux-websocket';
import { chatBroadcast } from '../actions/actions';
import { Button } from './Button';
import { TextInput } from './TextInput';

const styles = {
  chat: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'fixed',
    bottom: '0px',
    right: '0px',
    maxWidth: '600px',
  },
  messageLog: {
    color: 'white',
    margin: '8px',
    marginBottom: '0px',
    maxHeight: '152px',
    overflowY: 'scroll',
  },
  inputLine: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '0px',
  },
};

const Chat = ({ messageLog, broadcastMessage }) => {
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [messageLog]);

  const handleMessageInput = e => {
    setMessage(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (message) broadcastMessage(message);
    setMessage('');
  };

  return (
    <div style={styles.chat}>
      <div style={styles.messageLog}>
        <div>Welcome to Rainforest Trail</div>
        { messageLog.map((({ user='SERVER', text }, index) => (
          <div key={index}>
            { user }: { text }
          </div>
        )))}
        <div ref={messagesEndRef} />
      </div>
      <form style={styles.inputLine}>
        <TextInput
          onChange={handleMessageInput}
          value={message}
          placeholder=">"
        />
        <Button onClick={onSubmit}>
          SEND
        </Button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  messageLog: state.messageLog,
});

const mapDispatchToProps = dispatch => ({
  broadcastMessage: message => dispatch(send(chatBroadcast(message))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chat);
