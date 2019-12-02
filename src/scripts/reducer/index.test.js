import reducer from './index';
import { newInitialState } from './initialState';
import { ACTIONS } from '../actions/types';
// import * as actions from '../actions/actions';

describe('reducer', () => {
  it('should return the initial state', () => {
    const initialState = newInitialState();
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should zoom in and out correctly', () => {
    let initialState = newInitialState();
    expect(
      reducer(initialState, {
        type: ACTIONS.ZOOM_IN,
      }),
    ).toEqual(
      Object.assign(
        initialState,
        { zoom: 8 },
      ),
    );

    initialState = newInitialState({ zoom: 10 });
    expect(
      reducer(initialState, {
        type: ACTIONS.ZOOM_IN,
      }),
    ).toEqual(
      initialState,
    );

    initialState = newInitialState();
    expect(
      reducer(initialState, {
        type: ACTIONS.ZOOM_OUT,
      }),
    ).toEqual(
      Object.assign(
        initialState,
        { zoom: 6 },
      ),
    );

    initialState = newInitialState({ zoom: 5 });
    expect(
      reducer(initialState, {
        type: ACTIONS.ZOOM_OUT,
      }),
    ).toEqual(
      initialState,
    );
  });
});
