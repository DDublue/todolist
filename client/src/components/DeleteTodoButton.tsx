interface DeleteTodoButtonProps {
  id: number,
  onDeleteSuccess: () => void,
};

function DeleteTodoButton({id, onDeleteSuccess}: DeleteTodoButtonProps) {

  const deleteTodo = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: "DELETE"
      });
      
      if (response.ok) {
        onDeleteSuccess();
      } else {
        console.error("Failed to delete todo");
      };
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="">
        <button
          type="button"
          className="bg-gradient-to-b from-red-600 to-red-700 hover:to-red-800
                    hover:drop-shadow-md h-6 w-14 rounded-md
                    text-center text-sm font-semibold"
          onClick={deleteTodo}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default DeleteTodoButton;
