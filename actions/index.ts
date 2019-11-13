import { User } from '../interfaces';
import { actionTypes } from './types';
import * as actionIs from '../interfaces/actions.interfaces';

// Action Creators ======================

export function failure(error: Error): actionIs.Failure {
  return {
    type: actionTypes.FAILURE,
    error,
  };
}

export function increment(): actionIs.Increment {
  return { type: actionTypes.INCREMENT };
}

export function decrement(): actionIs.Decrement {
  return { type: actionTypes.DECREMENT };
}

export function reset(): actionIs.Reset {
  return { type: actionTypes.RESET };
}

export function loadData(): actionIs.LoadData {
  return { type: actionTypes.LOAD_DATA };
}

export function loadDataSuccess(data: User[]): actionIs.LoadDataSuccess {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
}

export function startClock(): actionIs.StartClock {
  return { type: actionTypes.START_CLOCK };
}

export function tickClock(isServer: boolean): actionIs.TickClock {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  };
}
