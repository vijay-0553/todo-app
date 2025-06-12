const todoRouter = require('express').Router();
const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  updateTodoStatus, // 👈 this line is newly added
} = require("../controllers/todosController");

todoRouter.get('/', todosController.getAllTodos);

todoRouter.get('/:id', todosController.getTodoById);

todoRouter.post('/', todosController.createTodo);

todoRouter.patch('/:id', todosController.updateTodo);

todoRouter.patch("/status/:id", updateTodoStatus);

todoRouter.delete('/:id', todosController.deleteTodo);


module.exports = todoRouter;