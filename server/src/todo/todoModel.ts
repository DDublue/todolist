// todoModel.ts
// Handles all database operations for todos

import {pool} from "../config/db";
import {QueryResult} from "pg";
import {Todo} from "./todotype";


export const todoModel = {
  createTodo: async (description: string): Promise<QueryResult<Todo>> => {
    const query = `
      INSERT INTO todo (description)
      VALUES($1)
      RETURNING *
    `;
    return await pool.query(query, [description]);
  },
  getAllTodos: async (): Promise<QueryResult<Todo>> => {
    const query = `
      SELECT * FROM todo
    `;

    return await pool.query(query);
  },
  getTodo: async (id: number): Promise<QueryResult<Todo>> => {
    const query = `
      SELECT * FROM todo
      WHERE todo_id = $1
    `;
    const values = [id]
    return await pool.query(query, values);
  },

  updateTodo: async (id: number, description: string): Promise<QueryResult<Todo>> => {
    const query = `
      UPDATE todo
      SET description = $1
      WHERE todo_id = $2
    `;
    const values = [description, id];
    return await pool.query(query, values);
  },

  deleteTodo: async (id: number): Promise<QueryResult<Todo>> => {
    const query = `
      DELETE FROM todo
      WHERE todo_id = $1
    `;
    const values = [id];
    return await pool.query(query, values);
  }
}
