import React, { useState } from 'react';
import { connect as reduxConnect } from 'react-redux'
import { connect as wsConnect } from '@giantmachines/redux-websocket';
import { setModal } from '../actions/actions';
import { MODAL } from '../utils/constants';
import { Button } from './Button';
import { TextInput } from './TextInput';

const ServerSelect = ({ serverEndpoint, connectToEndpoint, dismiss }) => {
  const [endpoint, setEndpoint] = useState(serverEndpoint);

  const handleEndpointInput = e => {
    setEndpoint(e.target.value);
  };

  const onSubmit = () => {
    connectToEndpoint(endpoint);
    dismiss();
  };

  return (
    <>
      <h1>SELECT SERVER</h1>
      <TextInput
        onChange={handleEndpointInput}
        value={endpoint}
        placeholder="ENDPOINT"
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

const mapStateToProps = state => ({
  serverEndpoint: state.serverEndpoint,
});

const mapDispatchToProps = dispatch => ({
  connectToEndpoint: (endpoint) => dispatch(wsConnect(endpoint)),
  dismiss: () => dispatch(setModal(MODAL.NONE)),
});

export default reduxConnect(
  mapStateToProps,
  mapDispatchToProps,
)(ServerSelect);
