import {ActionTypes} from '../actiontypes';

const initialAge = {
  id: 20,
};

const reducer = (state = initialAge, action: {type: string; payload: number}) => {
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
