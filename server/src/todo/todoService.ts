// todoService.ts
// Business logic and validation for todos

import { todoModel } from "./todoModel";
import {Todo} from "./todotype";

export const todoService = {

  createTodo: async (description: string): Promise<Todo> => {
    const result = await todoModel.createTodo(description.trim());
    return result.rows[0];
  },

  getAllTodos: async (): Promise<Todo[]> => {
    const result = await todoModel.getAllTodos();
    return result.rows;
  },

  getTodo: async (id: number): Promise<Todo> => {
    const result = await todoModel.getTodo(id);
    return result.rows[0];
  },

  updateTodo: async (id: number, description: string): Promise<Todo> => {
    const result = await todoModel.updateTodo(id, description);
    return result.rows[0];
  },

  deleteTodo: async (id: number): Promise<Todo> => {
    const result = await todoModel.deleteTodo(id);
    return result.rows[0];
  }
};
