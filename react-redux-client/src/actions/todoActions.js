// ./react-redux-client/src/actions/todoActions.js

const apiUrl = "/api/";

export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_TODO'
  }
}

export const addTodo = (todo) => {

}

export const deleteTodo = (todo) => {

}

export const editTodo = (todo) => {

}

//Async action
export const fetchTodos = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchTodosRequest());
    // Returns a promise
    return fetch(apiUrl)
                .then(response => response.json())
                .then(data =>
                  // dispatch another action
                  // to consume data
                  dispatch(fetchTodosSuccess(data.todos,data.message))
                )
                .then(error => {
                  throw(error);
                })
  }
}

export const fetchTodosRequest = () => {
  return {
    type:'FETCH_TODOS_REQUEST'
  }
}


//Sync action
export const fetchTodosSuccess = (todos,message) => {
  return {
    type: 'FETCH_TODOS_SUCCESS',
    todos: todos,
    message: message,
    receivedAt: Date.now
  }
};
