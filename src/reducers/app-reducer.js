import { ACTION_TYPE } from "../actions";

const initialAppState = {
  isLoading: false,
};

export const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default:
      return state;
  }
};
