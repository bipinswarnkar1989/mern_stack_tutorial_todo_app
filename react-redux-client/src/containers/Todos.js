// ./react-redux-client/src/containers/Todos.js
import { connect } from 'react-redux';
import * as todoActions from '../actions/todoActions';
import Todos from '../components/Todos';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedTodos: state.todos
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedAddTodo: todo => dispatch(todoActions.addTodo(todo)),
    mappedDeleteTodo: todoToDelete => dispatch(todoActions.deleteTodo(todoToDelete)),
    mappedEditTodo: todoToEdit => dispatch(todoActions.deleteTodo(todoToEdit))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);
