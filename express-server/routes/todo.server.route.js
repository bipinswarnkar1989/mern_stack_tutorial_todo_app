// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as todoController from '../controllers/todo.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/')
     .get(todoController.getTodos)
     .post(todoController.addTodo)
     .put(todoController.updateTodo);

router.route('/:id')
      .get(todoController.getTodo)
      .delete(todoController.deleteTodo);


export default router;
