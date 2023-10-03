import {ActionTypes} from '../utils/actiontypes';

const initialState = {
  id: 20,
};

const reducer = (state = initialState, action: {type: string; payload: any}) => {
  const newState = {...state};

  switch (action.type) {
    case ActionTypes.NEXT_PRODUCT:
      newState.id += action.payload;
      break;
    case ActionTypes.PREV_PRODUCT:
      newState.id -= action.payload;
      break;
  }
  return newState;
};

export default reducer;
