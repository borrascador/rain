import React from 'react';
import { connect } from 'react-redux'
import { setModal } from '../actions/actions';
import { MODAL } from '../utils/constants';
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
  dismiss: () => dispatch(setModal(MODAL.NONE)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Success);
