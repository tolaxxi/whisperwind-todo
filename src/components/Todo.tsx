import { FaCheckCircle } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { GiCircle } from 'react-icons/gi';
import { useTodo } from '../context/todoContext/useTodo';

interface TodoPropType {
  todoText: string;
  isCompleted: boolean;
  id: string;
}
const Todo = ({ todoText, isCompleted, id }: TodoPropType) => {
  const { setTodo } = useTodo();

  function handleToggle() {
    setTodo((prevTodo) => {
      return prevTodo.map((t) => {
        return t.id === id ? { ...t, isCompleted: !isCompleted } : t;
      });
    });
  }

  function handleDelete() {
    setTodo((prevTodo) => {
      return prevTodo.filter((t) => {
        return t.id !== id;
      });
    });
  }

  return (
    <div
      className={`flex flex-col  w-full py-5 px-5 my-3 rounded-2xl border-gray-200 items-center justify-between border-2 group ${
        isCompleted && 'h-25 pb-3 pt-6 border-purple-300 bg-purple-100'
      }`}
    >
      {/* checkbox */}
      <section className="flex justify-between w-full gap-5">
        <button className="text-3xl text-purple-300" onClick={handleToggle}>
          {isCompleted ? <FaCheckCircle /> : <GiCircle />}
        </button>

        <div className="flex justify-between flex-1">
          <p className={`text-gray-800  ${isCompleted && 'line-through text-slate-500'}`}>{todoText}</p>

          {/* delete icon */}
          <button className="text-red-400 text-md group-hover:block hidden" onClick={handleDelete}>
            <FaRegTrashCan />
          </button>
        </div>
      </section>

      {isCompleted && (
        <p className={`text-xs font-mono font-medium ${isCompleted && ' text-purple-400'}`}>
          You did amazing! Keep going! 🌟
        </p>
      )}
    </div>
  );
};
export default Todo;
