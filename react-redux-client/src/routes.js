// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Todos from './containers/Todos';
import Todo from './containers/Todo';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Todos} />
     <Route path="/:id" component={Todo} />
  </Route>
)
