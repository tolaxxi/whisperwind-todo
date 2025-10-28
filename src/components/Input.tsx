import { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';

const placeholders = [
  'Drink 8 glasses of water 💧',
  'Take a peaceful walk 🌸',
  'Write in my journal ✨',
  'Practice gratitude 🌟',
  'Stretch for 10 minutes 🧘',
  'Call a loved one 💕',
];

const Input = () => {
  const [currentPlaceholderText, setCurrentPlaceholderText] = useState(placeholders[0]);

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % placeholders.length;
      setCurrentPlaceholderText(placeholders[index]);
    }, 50000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex w-[90%] p-0.5 border-gray-200 rounded-lg justify-center border-2">
      <input type="text" className="outline-none px-3 flex-1 " placeholder={currentPlaceholderText} />
      <button className="bg-gradient p-2 rounded-lg text-white">
        <BiPlus />
      </button>
    </div>
  );
};
export default Input;
