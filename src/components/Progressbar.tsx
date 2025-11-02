import useProgress from '../context/progressContext/useProgress';

const Progressbar = () => {
  const { progress } = useProgress();

  return (
    <div className="w-full  bg-rose-100 h-2.5 rounded-md overflow-clip">
      <div className="bg-gradient h-full duration-300 ease-in-out" style={{ width: `${progress}%` }}></div>
    </div>
  );
};
export default Progressbar;
