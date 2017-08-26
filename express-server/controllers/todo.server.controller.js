// ./express-server/controllers/todo.server.controller.js
import mongoose from 'mongoose';

//import models
import Todo from '../models/todo.server.model';

export const getTodos = (req,res) => {
  Todo.find().exec((err,todos) => {
    if(err){
    return res.json({'message':'Some Error'});
    }

    return res.json({'message':'Todos fetched successfully',todos});
  });
}

export const addTodo = (req,res) => {
  const newTodo = new Todo(req.body);
  newTodo.save((err,todo) => {
    if(err){
    return res.json({'message':'Some Error'});
    }

    return res.json({'message':'Todo added successfully',todo});
  })
}
