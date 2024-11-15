import React from 'react';

interface EditTodoFormProps {
  editedDescription: string;
  setEditedDescription: React.Dispatch<React.SetStateAction<string>>;
  onSave: () => void;
}

function EditTodoForm({editedDescription, setEditedDescription, onSave}: EditTodoFormProps) {

  return (
    <>
      <div>
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="w-full h-32 p-2 border border-gray-300 rounded-md mb-4"
          placeholder="Edit your todo (cannot be empty)"
        />
        <button
          onClick={onSave}
          className="bg-gradient-to-b from-green-500 to-green-600
                  hover:to-green-700 hover:drop-shadow-md
                    w-full text-white py-2 rounded-md"
        >
          Save Changes
          </button>
      </div>
    </>
  );
};

export default EditTodoForm;
