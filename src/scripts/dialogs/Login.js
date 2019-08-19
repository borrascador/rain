import React, { useState } from 'react';
import { connect } from 'react-redux'
import { send } from '@giantmachines/redux-websocket';
import { closeModal, loginRequest } from '../actions/actions';
import { Button } from './Button';
import { TextInput } from './TextInput';

const Login = ({ sendLogin, dismiss }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameInput = e => {
    setUsername(e.target.value);
  };

  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    sendLogin(username, password);
    dismiss();
  };

  return (
    <>
      <h1>LOGIN</h1>
      <TextInput
        onChange={handleUsernameInput}
        value={username}
        placeholder="USERNAME"
      />
      <TextInput
        onChange={handlePasswordInput}
        value={password}
        placeholder="PASSWORD"
        password
      />
      <div>
        <Button onClick={onSubmit}>
          OK
        </Button>
        <Button onClick={dismiss}>
          CANCEL
        </Button>
      </div>
    </>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dismiss: () => dispatch(closeModal()),
  sendLogin: (user, pass) => dispatch(send(loginRequest(user, pass))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
