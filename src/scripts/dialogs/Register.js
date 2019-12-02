import React, { useState } from 'react';
import { connect } from 'react-redux'
import { send } from '@giantmachines/redux-websocket';
import { closeModal, registerRequest, error } from '../actions/actions';
import { Button } from './Button';
import { TextInput } from './TextInput';

const Register = ({ sendRegister, setError, dismiss }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const handleUsernameInput = e => {
    setUsername(e.target.value);
  };

  const handleEmailInput = e => {
    setEmail(e.target.value);
  };

  const handlePassword1Input = e => {
    setPassword1(e.target.value);
  };

  const handlePassword2Input = e => {
    setPassword2(e.target.value);
  };

  const onSubmit = () => {
    if (password1 === password2) {
      sendRegister(username, email, password1);
      dismiss();
    } else {
      setError(110, 'Passwords do not match');
    }
  };

  return (
    <>
      <h1>REGISTER</h1>
      <TextInput
        onChange={handleUsernameInput}
        value={username}
        placeholder="USERNAME"
      />
      <TextInput
        onChange={handleEmailInput}
        value={email}
        placeholder="EMAIL"
      />
      <TextInput
        onChange={handlePassword1Input}
        value={password1}
        placeholder="PASSWORD"
        password
      />
      <TextInput
        onChange={handlePassword2Input}
        value={password2}
        placeholder="REPEAT PASSWORD"
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
  sendRegister: (user, email, pass) => dispatch(send(registerRequest(user, email, pass))),
  setError: (code, message) => dispatch(error(code, message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
