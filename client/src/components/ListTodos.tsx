import {useEffect, useState, useCallback} from 'react';
import DeleteTodoButton from './DeleteTodoButton';
import EditTodoButton from './EditTodoButton';

interface Todo {
  todo_id: number,
  description: string,
};

function ListTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getTodos = async() => {
    try {
      const response = await fetch("http://localhost:5000/api/todos", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      };

      const data = await response.json();
      setTodos(data);
      setError(null);
    } catch (err: any) {
      console.error(err.message);
    };
  };

  const handleEditSuccess = useCallback(() => {
    getTodos();
  }, []);

  const handleDeleteSuccess = useCallback(() => {
      getTodos();
    }, []);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div
        className="flex transition-all duration-300 w-full sm:justify-center
                  overflow-x-auto mt-1.5"
      >
        <table
          className="table-fixed rounded-md bg-gray-300
                    min-w-[640px] w-11/12 max-w-[960px]"
        >
          <thead className="bg-gray-400 border-gray-700 border-2">
            <tr>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 w-24 text-center">Edit</th>
              <th className="px-4 py-2 w-24 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(({
              todo_id,
              description
            }: {
              todo_id: number,
              description: string
            }) => (
                <tr key={todo_id}>
                  <td className="px-4 py-2 truncate">{description}</td>
                  <td className="px-4 py-2 text-center">
                    {
                      <EditTodoButton
                        id={todo_id}
                        description={description}
                        onEditSuccess={handleEditSuccess}
                      />
                    }
                  </td>
                  <td className="px-4 py-2 text-center">
                    {
                      <DeleteTodoButton
                        id={todo_id}
                        onDeleteSuccess={handleDeleteSuccess}
                      />
                    }
                  </td>
                </tr>
            )
              )
            }
          </tbody>
        </table>

        {error && (
          <div className="mt-4 text-red-600 text-center">
            <strong>Error: </strong>{error}
          </div>
        )}
      </div>
    </>
  )
};

export default ListTodos;
