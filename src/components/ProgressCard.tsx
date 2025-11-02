import { BiHeart, BiStar } from 'react-icons/bi';
import Progressbar from './Progressbar';

const ProgressCard = () => {
  return (
    <section className="border-2 w-[90%] gap-6 border-gray-200 flex flex-col justify-center items-center rounded-xl shadow-md px-4 py-3">
      <div className="flex items-center w-full justify-between">
        <span className="flex items-center gap-3 text-lg text-gray-500">
          <BiHeart className="text-purple-400" />
          <h2>Your Progress</h2>
        </span>

        <h2 className="text-lg flex items-end">
          <span className="text-purple-400 font-medium text-2xl">0</span>/0
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
