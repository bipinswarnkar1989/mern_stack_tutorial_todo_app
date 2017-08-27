import React from 'react';
import { Navbar,Nav,NavItem,MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <Navbar inverse  collapseOnSelect className="customNav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">BookLibrary</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/">
           <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/books">
           <NavItem eventKey={2}>Books</NavItem>
        </LinkContainer>
        <LinkContainer to="/favourites">
           <NavItem eventKey={3}>Favourites</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
      {this.props.location.pathname === '/books' &&
      <LinkContainer to="/" onClick={this.toggleAddBook}>
         <NavItem eventKey={1}>Add Book</NavItem>
      </LinkContainer>
      }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div className="container">
  { /* Each Smaller Components */}
   {this.props.children}
  </div>
 </div>
    );
  }
}
