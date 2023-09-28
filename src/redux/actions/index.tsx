import {ActionTypes} from '../actiontypes';

export const ageIncrement = (payload: number) => {
  return {
    type: ActionTypes.AGE_UP,
    payload,
  };
};

export const ageDecrement = (payload: number) => {
  return {
    type: ActionTypes.AGE_DOWN,
    payload,
  };
};
