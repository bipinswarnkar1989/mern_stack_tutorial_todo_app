// ./react-redux-client/src/components/Todo.js
import React from 'react';

export default class Todo extends React.Component {


  render(){
    const todo = this.props.mappedTodoState.todo;
    return(
      <div className="todoDetail">
       <h2>Todo Detail</h2>
       <h3>{todo.todoText}</h3>
       <p>{todo.todoDesc}</p>
      </div>
    );
  }
}
