import {ActionTypes} from '../utils/actiontypes';

const initialState = {
  id: 20,
  products: [],
  error: false,
};

const reducer = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  const newState = {...state};

  switch (action.type) {
    case ActionTypes.NEXT_PRODUCT_ASYNC:
      newState.id += action.payload;
      break;
    case ActionTypes.PREV_PRODUCT_ASYNC:
      newState.id -= action.payload;
      break;
    case ActionTypes.SEARCH_PRODUCT_SUCCESS:
      console.log(action.payload)
      newState.products = action.payload;
      newState.error = false;
      break;
    case ActionTypes.SEARCH_PRODUCT_FAILURE:
      newState.products = [];
      newState.error = true;
      break;
  }
  return newState;
};

export default reducer;
