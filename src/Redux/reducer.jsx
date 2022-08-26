import {todoActions} from "./action";

const init = {
    loading: true,
    error: false,
    data : []
}

export const reducer = (state = init, action) => {
  switch (action.type) {
    case todoActions.GET_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case todoActions.GET_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    }
    case todoActions.GET_TODO_FAILED: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
