// ./react-redux-client/src/components/Todos.js
import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Todos extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchTodos();
  }


  showEditModal(bookToEdit){
     //this.props.mappedshowEditModal(todoToEdit);
  }

  hideEditModal(){
      //this.props.mappedhideEditModal();
  }

  hideDeleteModal(){
    //this.props.mappedhideDeleteModal();
  }

  showDeleteModal(todoToDelete){
//this.props.mappedshowDeleteModal(todoToDelete);
  }

  render(){
    const todoState = this.props.mappedTodoState;
    const todos = todoState.todos;
    return(
      <div className="col-md-12">
      <h3 className="centerAlign">Todos</h3>
      {!todos && todoState.isFetching &&
        <p>Loading todos....</p>
      }
      {todos.length <= 0 && !todoState.isFetching &&
        <p>No Todos Available. Add A Todo to List here.</p>
      }
      {todos && todos.length > 0 && !todoState.isFetching &&
      <table className="table booksTable">
      <thead>
       <tr><th>Todo</th><th className="textCenter">Edit</th><th className="textCenter">Delete</th><th className="textCenter">View</th></tr>
      </thead>
      <tbody>
        {todos.map((todo,i) => <tr key={i}>
        <td>{todo.todoText}</td>
         <td className="textCenter"><Button onClick={() => this.showEditModal(todo)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
         <td className="textCenter"><Button onClick={() => this.showDeleteModal(todo)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
         <td className="textCenter"><Link to={`/${todo._id}`}>View Details</Link> </td>
         </tr> )
      }
      </tbody>
      </table>
    }
      </div>
    );
  }
}
