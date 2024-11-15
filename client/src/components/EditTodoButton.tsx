import { useState } from 'react';
import EditTodoForm from './EditTodoForm';

interface EditTodoButtonProps {
  id: number,
  description: string,
  onEditSuccess: () => void,
};

function EditTodoButton({id, description, onEditSuccess}: EditTodoButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editedDescription, seteditedDescription] = useState<string>(description);

  const editTodo = async () => {
    try {
      const body = {description: editedDescription};
      const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });
      
      if (response.ok) {
        onEditSuccess();
        setIsModalOpen(false);
      } else {
        console.error("Failed to edit todo");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="">
        <button
          type="button"
          className="bg-gradient-to-b from-gray-400 to-gray-500 hover:to-gray-600
                    hover:drop-shadow-md h-6 w-14 rounded-md
                    text-center text-sm font-semibold"
          onClick={() => setIsModalOpen(true)}
        >
          Edit
        </button>

        {isModalOpen && (
          <div
            className="fixed inset-0 backdrop-blur-[2px] flex items-center justify-center bg-black bg-opacity-50 transition-opacity"
            onClick={() => {setIsModalOpen(false); seteditedDescription(description);}}
          >
            <div
              className="bg-gray-300 p-6 rounded-lg max-w-md w-full shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold mb-4">Edit Todo</h2>
              <EditTodoForm
                editedDescription={editedDescription}
                setEditedDescription={seteditedDescription}
                onSave={editTodo}
              />
              <button
                className="bg-gradient-to-b from-gray-400 to-gray-500
                         hover:to-gray-600 hover:drop-shadow-md
                           mt-4 w-full text-white py-2 rounded-md"
                onClick={() => {setIsModalOpen(false); seteditedDescription(description);}}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EditTodoButton;
