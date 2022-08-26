export const todoActions = {
  GET_TODO_REQUEST: "GET_TODO_REQUEST",
  GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
  GET_TODO_FAILED: "GET_TODO_FAILED",
};

export const getTodoRequest = () => ({
  type: todoActions.GET_TODO_REQUEST,
});

export const getTodoSuccess = (data) => ({
  type: todoActions.GET_TODO_SUCCESS,
  payload: data,
});

export const getTodoFailed = () => ({
  type: todoActions.GET_TODO_FAILED,
});