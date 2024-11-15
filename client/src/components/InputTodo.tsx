import React, { useEffect, useState } from 'react';

function InputTodo() {
  const [isLMBDown, setIsLMBDown] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [description, setDescription] = useState('');

  const onMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!e.button) {
      setIsLMBDown(true);
    }
  };
  const onMouseUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!e.button) {
      setIsLMBDown(false);
    }
  };
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsLMBDown(false);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!description.trim()) {
      return;
    }
    try {
      const body = {description};
      await fetch("http://localhost:5000/api/todos", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });

      window.location.reload();
      setDescription("");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="relative flex flex-col items-center w-full h-24 mt-16">
        <h1 className=" text-3xl font-bold font-sans mb-2">Todo List</h1>
          <form onSubmit={(e) => {handleAddTodo(e)}} className="w-full max-w-3xl flex justify-center items-center px-4">
            <input
              type="text"
              placeholder="Todo Description"
              className="bg-gray-200 rounded-sm pl-2 focus-visible:outline-2 min-w-1/8 w-96 mx-w-lg"
              value={description}
              onChange={(e) => {setDescription(e.target.value)}}
            />
            <button
              className={`bg-green-500 px-2 py-1 ml-2 rounded-3xl min-w-24
                        duration-100 ease-out hover:ease-in hover:drop-shadow-lg
                        ${isLMBDown && isHovering ? 'scale-95 bg-green-600' : ''}
                        `}
              onMouseDown={(e) => {onMouseDown(e)}}
              onMouseUp={(e) => {onMouseUp(e)}}
              onMouseEnter={() => {setIsHovering(true)}}
              onMouseLeave={() => {setIsHovering(false)}}
            >
              Add Todo
            </button>
          </form>
      </div>
    </>
  );
};

export default InputTodo;
