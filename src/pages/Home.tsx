import Header from '../components/Header';
import Input from '../components/Input';
import ProgressCard from '../components/ProgressCard';
import EmptyTodoPage from './EmptyTodoPage';

const Home = () => {
  return (
    <main className="flex flex-col items-center w-full h-dvh gap-5 px-3">
      <Header />
      <Input />
      <ProgressCard />
      <EmptyTodoPage />
    </main>
  );
};
export default Home;
