import { User } from './index';

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
  | Failure
  | Increment
  | Decrement
  | Reset
  | LoadData
  | LoadDataSuccess
  | StartClock
  | TickClock;

export interface Failure {
  type: actionTypes.FAILURE;
  error: Error;
}

export interface Increment {
  type: actionTypes.INCREMENT;
}

export interface Decrement {
  type: actionTypes.DECREMENT;
}

export interface Reset {
  type: actionTypes.RESET;
}

export interface LoadData {
  type: actionTypes.LOAD_DATA;
}

export interface LoadDataSuccess {
  type: actionTypes.LOAD_DATA_SUCCESS;
  data: User[];
}

export interface StartClock {
  type: actionTypes.START_CLOCK;
}

export interface TickClock {
  type: actionTypes.TICK_CLOCK;
  light: boolean;
  ts: number;
}
