import React from 'react';
import { connect } from 'react-redux'
import { closeModal } from '../actions/actions';
import { Button } from './Button';

const Failure = ({ message, dismiss }) => (
  <>
    <h1>FAILURE</h1>
    { message && <h3>{message}</h3> }
    <Button onClick={dismiss}>
      OK
    </Button>
  </>
);

const mapStateToProps = state => ({
  message: typeof state.errorMessage === 'string' ? state.errorMessage : '',
});

const mapDispatchToProps = dispatch => ({
  dismiss: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Failure);
