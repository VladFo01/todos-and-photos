export const addTodo = (value) => {
  return {
    type: "ADD_TODO",
    payload: value,
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};
export const updateValue = (newValue) => {
  return {
    type: "UPDATE_VALUE",
    payload: newValue,
  };
};
export const clearValue = () => {
  return {
    type: "UPDATE_VALUE",
    payload: "",
  };
};
export const changeStatus = (id) => {
  return {
    type: "CHANGE_STATUS",
    payload: id,
  };
};
export const fetchPhotos = (data) => {
  return {
    type: "FETCH_PHOTOS",
    payload: data,
  };
};
export const updateId = (newId) => {
  return {
    type: "UPDATE_ID",
    payload: newId,
  };
};
export const clearId = () => {
  return {
    type: "UPDATE_ID",
    payload: "",
  };
};
export const changeSort = (newSortBy) => {
  return {
    type: "CHANGE_SORT",
    payload: newSortBy,
  };
};
export const catchError = (type, newError) => {
  return {
    type: "CATCH_ERROR",
    payload: {
      type,
      error: newError
    },
  };
};
export const removeError = type => {
  return {
    type: "REMOVE_ERROR",
    payload: {
      type,
      error: null,
    },
  };
};