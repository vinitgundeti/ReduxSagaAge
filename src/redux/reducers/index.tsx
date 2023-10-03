import {ActionTypes} from '../actiontypes';

const initialState = {
  id: 20,
};

const reducer = (state = initialState, action: {type: string; payload: any}) => {
  const newState = {...state};

  switch (action.type) {
    case ActionTypes.AGE_UP:
      newState.id += action.payload;
      break;
    case ActionTypes.AGE_DOWN:
      newState.id -= action.payload;
      break;
  }
  return newState;
};

export default reducer;
