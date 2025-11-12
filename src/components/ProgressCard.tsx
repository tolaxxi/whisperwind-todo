import { BiHeart, BiStar } from 'react-icons/bi';
import Progressbar from './Progressbar';
import { useTodo } from '../context/todoContext/useTodo';
import useProgress from '../context/progressContext/useProgress';
import { useEffect, useState } from 'react';

const ProgressCard = () => {
  const { todo } = useTodo();
  const { setProgress } = useProgress();
  const [progressText, setProgressText] = useState('');

  // get total number of todos and also number of task completed
  const totalNumberOfTodos = todo.length;
  const completedTodo = todo.filter((t) => t['isCompleted'] === true);
  const completedTodoCount = completedTodo.length;

  const completedTodoPercentage = totalNumberOfTodos === 0 ? 0 : (completedTodoCount / totalNumberOfTodos) * 100;

  // change progress Text according to percentage
  useEffect(() => {
    if (totalNumberOfTodos === 0) {
      setProgressText('Ready to start your journey? 🌱');
    } else if (completedTodoPercentage === 100) {
      setProgressText("You did it all! You're incredible! Time to celebrate! 🎊");
    } else if (completedTodoPercentage >= 60) {
      setProgressText("Almost there! You're absolutely crushing it! 🎉");
    } else if (completedTodoPercentage >= 30) {
      setProgressText("You're doing wonderfully! So proud of you! ✨");
    } else if (completedTodoPercentage >= 10) {
      setProgressText('Great start! Keep that momentum going! 💪');
    } else {
      setProgressText("You've got this! Every journey starts with a single step 🌟");
    }
  }, [totalNumberOfTodos, completedTodoPercentage, setProgress, completedTodoCount]);

  // update progress slider
  useEffect(() => {
    if (totalNumberOfTodos === 0) {
      setProgress(0);
    } else {
      setProgress(completedTodoPercentage);
    }
  }, [todo, completedTodoPercentage, totalNumberOfTodos, setProgress]);

  return (
    <section className="border-2 w-full gap-8 border-gray-200 flex flex-col justify-center items-center rounded-xl shadow-md px-4 py-6">
      <section className="flex flex-col gap-4 w-full px-5 items-center justify-center">
        <div className="flex items-center w-full justify-between ">
          <span className="flex items-center gap-3 text-lg text-gray-500">
            <BiHeart className="text-purple-400" />
            <h2>Your Progress</h2>
          </span>

          <h2 className=" flex items-end text-2xl font-medium text-gray-600">
            <span className="text-purple-400 font-bold text-3xl">{completedTodoCount}</span>/{totalNumberOfTodos}
          </h2>
        </div>
        {/* progress bar */}
        <Progressbar />
        {/* progress text */}
        <div className="flex items-center text-center  gap-2 text-gray-600 text-xl">
          <BiStar className="text-amber-200" />
          <p className="text-base"> {progressText}</p>
          <BiStar className="text-amber-200" />
        </div>
      </section>
      {completedTodoPercentage === 100 && (
        <button className="border border-purple-300 bg-purple-200 px-5 py-3 w-full rounded-xl font-medium text-center text-xs text-purple-600">
          Perfect day! You deserve a celebration! 🎉✨
        </button>
      )}
    </section>
  );
};
export default ProgressCard;
