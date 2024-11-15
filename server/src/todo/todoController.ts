// todoController.ts
// Handles HTTP requests/responses of todos

import {NextFunction, Request, Response} from "express";
import { todoService } from "./todoService";
import { pool } from "@/config/db";

// Create todo
export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {description} = req.body;
    const newTodo = await todoService.createTodo(description);
    res.json(newTodo);
  } catch (err: any) {
    next(err);
  }
};

// Get all todos
export const getAllTodos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allTodos = await todoService.getAllTodos();
    res.json(allTodos);
  } catch (err: any) {
    next(err);
  }
};

// Get a todo by id
export const getTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params;
    const todo = await todoService.getTodo(parseInt(id));
    res.json(todo);
  } catch (err) {
    next(err);
  }
};

// Update todo by id
export const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params;
    const {description} = req.body;
    const updateTodo = await todoService.updateTodo(parseInt(id), description);
    res.json(updateTodo);
  } catch (err) {
    next(err);
  }
};

// Delete todo by id
export const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params;
    const deleteTodo = await todoService.deleteTodo(parseInt(id));
    res.json("Todo was deleted!");
  } catch (err) {
    next(err);
  }
};
