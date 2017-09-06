// ./react-redux-client/src/actions/todoActions.js

const apiUrl = "/api/";

export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_TODO'
  }
}

export const addNewTodo = (todo) => {console.log(todo)
  return (dispatch) => {
    dispatch(addNewTodoRequest(todo));
    return fetch(apiUrl, {
      method:'post',
      body: todo,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.todo);
          dispatch(addNewTodoRequestSuccess(data.todo, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewTodoRequestFailed(error))
        })
      }
    })
  }
}

export const addNewTodoRequest = (todo) => {
  return {
    type: 'ADD_NEW_TODO_REQUEST',
    todo
  }
}

export const addNewTodoRequestSuccess = (todo,message) => {
  return {
    type: 'ADD_NEW_TODO_REQUEST_SUCCESS',
    todo:todo,
    message:message
  }
}

export const addNewTodoRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_TODO_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchTodos = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchTodosRequest());
    // Returns a promise
    return fetch(apiUrl)
                .then(response => {
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchTodosSuccess(data.todos,data.message));
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchTodosFailed(error));
                    })
                  }
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
}

export const fetchTodosFailed = (error) => {
  return {
    type:'FETCH_TODOS_FAILED',
    error
  }
}

export const fetchTodoById = (todoId) => {
  return (dispatch) => {
    dispatch(fetchTodoRequest());
      // Returns a promise
      return fetch(apiUrl + todoId)
             .then(response => {console.log(response)
               if(response.ok){
                 response.json().then(data => {
                   dispatch(fetchTodoSuccess(data.todo[0], data.message));
                 })
               }
               else{
                 response.json().then(error => {
                   dispatch(fetchTodoFailed(error));
                 })
               }
             })

  }
}

export const fetchTodoRequest = () => {
  return {
    type:'FETCH_TODO_REQUEST'
  }
}


//Sync action
export const fetchTodoSuccess = (todo,message) => {
  return {
    type: 'FETCH_TODO_SUCCESS',
    todo: todo,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchTodoFailed = (error) => {
  return {
    type:'FETCH_TODO_FAILED',
    error
  }
}

export const showEditModal = (todoToEdit) => {
  return {
    type:'SHOW_EDIT_MODAL',
    todo:todoToEdit
  }
}

export const hideEditModal = () => {
  return {
    type:'HIDE_EDIT_MODAL'
  }
}

export const editTodo = (todo) => {
    return (dispatch) => {
      dispatch(editTodoRequest(todo));
      return fetch(apiUrl, {
        method:'put',
        body:todo
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editTodoSuccess(data.todo,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editTodoFailed(error));
          })
        }
      })
    }
}

export const editTodoRequest = (todo) => {
   return {
     type:'EDIT_TODO_REQUEST',
     todo
   }
}

export const editTodoSuccess = (todo,message) => {
  return {
    type:'EDIT_TODO_SUCCESS',
    todo:todo,
    message:message
  }
}

export const editTodoFailed = (error) => {
  return {
    type:'EDIT_TODO_FAILED',
    error
  }
}

export const deleteTodo = (todo) => {
  return (dispatch) => {
    dispatch(deleteTodoRequest(todo));
    return fetch(apiUrl + todo._id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteTodoSuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteTodoFailed(error));
        })
      }
    })

  }
}

export const deleteTodoRequest = (todo) => {
   return {
     type:'DELETE_TODO_REQUEST',
     todo
   }
}

export const deleteTodoSuccess = (message) => {
  return {
    type:'DELETE_TODO_SUCCESS',
    message:message
  }
}

export const deleteTodoFailed = (error) => {
  return {
    type:'DELETE_TODO_FAILED',
    error
  }
}

export const showDeleteModal = (todoToDelete) => {
  return {
    type:'SHOW_DELETE_MODAL',
    todo:todoToDelete
  }
}

export const hideDeleteModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}
