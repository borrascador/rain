import reducer from './index.js';
import { initialState } from './initialState';
import * as actions from '../actions/actions';
import { ACTIONS, EVENTS } from '../actions/types';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should ZOOM_IN correctly', () => {
    expect(
      reducer(initialState, {
        type: actions.ZOOM_IN
      })
    ).toEqual(
      Object.assign(
        initialState,
        { zoom: 2 }
      )
    )
  })
})
