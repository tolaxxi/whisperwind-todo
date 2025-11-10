import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { GiCircle } from 'react-icons/gi';

const Todo = () => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="flex w-full py-6 px-5 rounded-2xl border-gray-200 items-center border-2 gap-5">
      <button
        className="text-3xl text-purple-300"
        onClick={() => {
          setCompleted(!completed);
        }}
      >
        {completed ? <FaCheckCircle /> : <GiCircle />}
      </button>

      <div className="flex justify-between flex-1">
        <p className="text-gray-800">Task Title</p>
        <button className="text-red-400 text-md">
          <FaRegTrashCan />
        </button>
      </div>
    </div>
  );
};
export default Todo;
