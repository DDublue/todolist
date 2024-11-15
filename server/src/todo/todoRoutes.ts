// todoRoutes.ts
// Defines API endpoints w/Controller for todos

import express from "express";
import {createTodo, deleteTodo, getAllTodos, getTodo, updateTodo} from "./todoController";
import { validateTodoCreate, validateTodoDelete, validateTodoGet, validateTodoUpdate } from "./todoMiddleware";

const todoRouter = express.Router();

todoRouter.post("/todos", validateTodoCreate, createTodo);
todoRouter.get("/todos", getAllTodos);
todoRouter.get("/todos/:id", validateTodoGet, getTodo);
todoRouter.put("/todos/:id", validateTodoUpdate, updateTodo);
todoRouter.delete("/todos/:id", validateTodoDelete, deleteTodo)

export default todoRouter;
