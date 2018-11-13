import reducer from './index.js';
import { newInitialState } from './initialState';
import * as actions from '../actions/actions';
import { ACTIONS, EVENTS } from '../actions/types';

describe('reducer', () => {
  it('should return the initial state', () => {
    let initialState = newInitialState()
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should zoom in and out correctly', () => {
    let initialState = newInitialState();
    expect(
      reducer(initialState, {
        type: ACTIONS.ZOOM_IN
      })
    ).toEqual(
      Object.assign(
        initialState,
        { zoom: 4 }
      )
    )

    initialState = newInitialState({ zoom: 5 });
    expect(
      reducer(initialState, {
        type: ACTIONS.ZOOM_IN
      })
    ).toEqual(
      initialState
    )

    initialState = newInitialState();
    expect(
      reducer(initialState, {
        type: ACTIONS.ZOOM_OUT
      })
    ).toEqual(
      Object.assign(
        initialState,
        { zoom: 2 }
      )
    )

    initialState = newInitialState({ zoom: 1 });
    expect(
      reducer(initialState, {
        type: ACTIONS.ZOOM_OUT
      })
    ).toEqual(
      initialState
    )
  })
})
