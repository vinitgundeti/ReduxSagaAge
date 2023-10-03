import {ActionTypes} from '../utils/actiontypes';

export const nextProductClick = (payload: number) => {
  return {
    type: ActionTypes.NEXT_PRODUCT,
    payload,
  };
};

export const prevProductClick = (payload: number) => {
  return {
    type: ActionTypes.PREV_PRODUCT,
    payload,
  };
};
