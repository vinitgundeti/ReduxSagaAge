import {ActionTypes} from '../actiontypes';

const initialAge = {
  age: 20,
};

const reducer = (state = initialAge, action: {type: string; payload: number}) => {
  const newState = {...state};

  switch (action.type) {
    case ActionTypes.AGE_UP:
      newState.age += action.payload;
      break;
    case ActionTypes.AGE_DOWN:
      newState.age -= action.payload;
      break;
  }
  return newState;
};

export default reducer;
