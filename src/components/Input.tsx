import { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { useTodo } from '../context/todoContext/useTodo';
import type { TodoType } from '../context/todoContext/todoContext';

const placeholders = [
  'Drink 8 glasses of water 💧',
  'Take a peaceful walk 🌸',
  'Write in my journal ✨',
  'Practice gratitude 🌟',
  'Stretch for 10 minutes 🧘',
  'Call a loved one 💕',
];

const Input = () => {
  const [input, setInput] = useState('');
  const [currentPlaceholderText, setCurrentPlaceholderText] = useState(placeholders[0]);

  const { todo, setTodo } = useTodo();

  //  handles  form submission
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // check if input is empty
    if (!input.trim()) return;

    const newTodo: TodoType = {
      id: crypto.randomUUID(),
      todo: input,
      isCompleted: false,
    };

    setTodo((prevTodo) => {
      return [...prevTodo, newTodo];
    });

    setInput('');
  }

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % placeholders.length;
      setCurrentPlaceholderText(placeholders[index]);
    }, 40000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <form
      className="flex w-full p-0.5  border-gray-200 rounded-lg justify-center border-2 shadow-lg focus-within:outline outline-blue-600"
      onSubmit={handleSubmit}
    >
      {/* todo input  */}
      <input
        type="text"
        className="outline-none px-3 py-2 flex-1 "
        placeholder={currentPlaceholderText}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      {/* add button */}
      <button disabled={!input.trim()} className="bg-gradient px-3 py-2 rounded-md text-white ">
        <BiPlus />
      </button>
    </form>
  );
};
export default Input;
