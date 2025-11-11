import { BiHeart, BiStar } from 'react-icons/bi';
import Progressbar from './Progressbar';
import { useTodo } from '../context/todoContext/useTodo';
import useProgress from '../context/progressContext/useProgress';
import { useEffect } from 'react';

const ProgressCard = () => {
  const { todo } = useTodo();
  const { setProgress } = useProgress();

  // get total number of todos and also number of task completed

  const totalNumberOfTodos = todo.length;
  const completedTodo = todo.filter((t) => t['isCompleted'] === true);
  const completedTodoCount = completedTodo.length;

  // update progress slider

  const completedTodoPercentage = (completedTodoCount / totalNumberOfTodos) * 100;

  useEffect(() => {
    if (totalNumberOfTodos === 0) {
      setProgress(0);
    } else {
      setProgress(completedTodoPercentage);
    }
  }, [todo, completedTodoPercentage, totalNumberOfTodos, setProgress]);

  return (
    <section className="border-2 w-full gap-6 border-gray-200 flex flex-col justify-center items-center rounded-xl shadow-md px-4 py-3">
      <div className="flex items-center w-full justify-between">
        <span className="flex items-center gap-3 text-lg text-gray-500">
          <BiHeart className="text-purple-400" />
          <h2>Your Progress</h2>
        </span>

        <h2 className="text-lg flex items-end">
          <span className="text-purple-400 font-medium text-2xl">{completedTodoCount}</span>/{totalNumberOfTodos}
        </h2>
      </div>
      {/* progress bar */}
      <Progressbar />
      {/* progress text */}
      <div className="flex items-center gap-2 text-gray-600">
        <BiStar className="text-amber-200" />
        Ready to start your journey? 🌱
        <BiStar className="text-amber-200" />
      </div>
    </section>
  );
};
export default ProgressCard;
