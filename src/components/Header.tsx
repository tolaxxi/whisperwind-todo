import { LuSparkles } from 'react-icons/lu';

const Header = () => {
  return (
    <section className="flex flex-col gap-2 justify-center pt-10 w-full text-center items-center">
      <span className="flex font-medium animate-bounce text-nowrap items-center justify-center text-4xl bg-gradient text-transparent bg-clip-text ">
        <LuSparkles size={25} className="text-gradient-primary" />
        <h1>Gentle Goals</h1>
        <LuSparkles size={25} className="text-gradient-secondary " />
      </span>
      <div className="flex-col flex gap-2">
        <h2 className="text-Secondary-Foreground font-medium text-xl ">Good afternoon, lovely human! ✨</h2>
        <p className="text-gray-400 font-medium ">
          What small, beautiful things would you like to accomplish today? Remember: progress over perfection! 💖
        </p>
      </div>
    </section>
  );
};
export default Header;
