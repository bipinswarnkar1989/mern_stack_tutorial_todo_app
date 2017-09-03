// ./react-redux-client/src/containers/Todo.js
import { connect } from 'react-redux';
import * as todoActions from '../actions/todoActions';
import Todo from '../components/Todo';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedTodoState: state.todoState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedfetchTodoById: todoId => dispatch(todoActions.fetchTodoById(todoId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);
