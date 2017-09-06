// ./react-redux-client/src/reducers/todoReducer.js
const INITIAL_STATE = {
  todos:[],
  todo:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  todoToDelete: null,
  showEditModal: false,
  todoToEdit: null,
  newTodo: null
}

export  const todoReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_REQUEST':
          return {
            ...currentState,
            todos:[],
            todo:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: false,
            todoToEdit: null,
          }

    case 'FETCH_TODOS_SUCCESS':
          return {
            ...currentState,
            todos:action.todos,
            todo:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: false,
            todoToEdit: null,
          }

    case 'FETCH_TODOS_FAILED':
          return {
            ...currentState,
            todos:[],
            todo:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: false,
            todoToEdit: null,
          }

    case 'FETCH_TODO_REQUEST':
          return {
            ...currentState,
            todos:currentState.todos,
            todo:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: false,
            todoToEdit: null,
          }

    case 'FETCH_TODO_SUCCESS':
          return {
            ...currentState,
            todos:currentState.todos,
            todo:action.todo,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: false,
            todoToEdit: null,
          }

    case 'FETCH_TODO_FAILED':
          return {
            ...currentState,
            todos:[],
            todo:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: false,
            todoToEdit: null,
          }

    case 'ADD_NEW_TODO_REQUEST':
          return {
            ...currentState,
            todos:currentState.todos,
            todo:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: false,
            todoToEdit: null,
            newTodo: action.todo
          }

    case 'ADD_NEW_TODO_REQUEST_FAILED':
          return {
            ...currentState,
            todos:currentState.todos,
            todo:null,
            isFetching: true,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: false,
            todoToEdit: null,
            newTodo: null
          }

    case 'ADD_NEW_TODO_REQUEST_SUCCESS':
          const nextState =  {
            ...currentState,
            todos:[...currentState.todos, action.todo],
            todo:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: false,
            todoToEdit: null,
            newTodo: action.todo
          }
        return nextState;

  case 'SHOW_EDIT_MODAL':
        return {
          ...currentState,
          todos:currentState.todos,
          todo:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          todoToDelete: null,
          showEditModal: true,
          todoToEdit: action.todo,
          newTodo: null
        }

  case 'HIDE_EDIT_MODAL':
        return {
          ...currentState,
          todos:currentState.todos,
          todo:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          todoToDelete: null,
          showEditModal: false,
          todoToEdit: null,
          newTodo: null
        }

    case 'EDIT_TODO_REQUEST':
          return {
            ...currentState,
            todos:currentState.todos,
            todo:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: true,
            todoToEdit: action.todo,
            newTodo: null
          }

    case 'EDIT_TODO_SUCCESS':
         const updatedTodos = currentState.todos.map((todo) => {
           if(todo._id !== action.todo._id){
             //This is not the item we care about, keep it as is
             return todo;
           }
           //Otherwise, this is the one we want to return an updated value
           return { ...todo, ...action.todo }
         })
          return {
            ...currentState,
            todos:updatedTodos,
            todo:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            todoToDelete: null,
            showEditModal: true,
            todoToEdit: action.todo,
            newTodo: null
          }

  case 'EDIT_TODO_FAILED':
        return {
          ...currentState,
          todos:currentState.todos,
          todo:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: false,
          todoToDelete: null,
          showEditModal: true,
          todoToEdit: currentState.todoToEdit,
          newTodo: null
        }

  case 'DELETE_TODO_REQUEST':
        return {
          ...currentState,
          todos:currentState.todos,
          todo:null,
          isFetching: true,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          todoToDelete: action.todo,
          showEditModal: false,
          todoToEdit: null,
          newTodo: null
        }

  case 'DELETE_TODO_SUCCESS':
  const filteredTodos = currentState.todos.filter((todo) => todo._id !== currentState.todoToDelete._id)
        return {
          ...currentState,
          todos:filteredTodos,
          todo:null,
          isFetching: false,
          error: null,
          successMsg:action.message,
          showDeleteModal: true,
          todoToDelete: null,
          showEditModal: false,
          todoToEdit: null,
          newTodo: null
        }


  case 'DELETE_TODO_FAILED':
        return {
          ...currentState,
          todos:currentState.todos,
          todo:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: true,
          todoToDelete: null,
          showEditModal: false,
          todoToEdit: null,
          newTodo: null
        }

  case 'SHOW_DELETE_MODAL':
        return {
          ...currentState,
          todos:currentState.todos,
          todo:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          todoToDelete: action.todo,
          showEditModal: false,
          todoToEdit: null,
          newTodo: null
        }

  case 'HIDE_DELETE_MODAL':
        return {
          ...currentState,
          todos:currentState.todos,
          todo:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          todoToDelete: null,
          showEditModal: false,
          todoToEdit: null,
          newTodo: null
        }


    default:
       return currentState;

  }
}
