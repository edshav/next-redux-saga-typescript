import * as actionIs from '../interfaces/actions.interfaces';

export enum actionTypes {
  FAILURE = 'FAILURE',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET',
  LOAD_DATA = 'LOAD_DATA',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  START_CLOCK = 'START_CLOCK',
  TICK_CLOCK = 'TICK_CLOCK',
}

export type Action =
  | actionIs.Failure
  | actionIs.Increment
  | actionIs.Decrement
  | actionIs.Reset
  | actionIs.LoadData
  | actionIs.LoadDataSuccess
  | actionIs.StartClock
  | actionIs.TickClock;
