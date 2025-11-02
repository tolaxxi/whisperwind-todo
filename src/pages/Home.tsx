import Header from '../components/Header';
import Input from '../components/Input';
import ProgressCard from '../components/ProgressCard';

const Home = () => {
  return (
    <main className="flex flex-col items-center w-full h-dvh gap-5">
      <Header />
      <Input />
      <ProgressCard />
    </main>
  );
};
export default Home;
