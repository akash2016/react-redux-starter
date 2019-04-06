import { AppActionTypes } from "./AppActions";

const intialState = {
  isLoading: "loading"
};

const AppReducer = (state = intialState, action) => {
  switch (action.type) {
    case AppActionTypes.INITIAL_LOAD: {
      return {
        ...state,
        ...action.payload
      };
    }

    default:
      return state;
  }
};

export default AppReducer;
