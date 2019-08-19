import React from 'react';
import { connect } from 'react-redux'
import { closeModal } from '../actions/actions';
import { Button } from './Button';

const Success = ({ dismiss }) => (
  <>
    <h1>SUCCESS</h1>
    <Button onClick={dismiss}>
      OK
    </Button>
  </>
);

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => ({
  dismiss: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Success);
