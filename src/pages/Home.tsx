import { useEffect } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import ProgressCard from '../components/ProgressCard';
import Todo from '../components/Todo';
import { useTodo } from '../context/todoContext/useTodo';
import EmptyTodoPage from './EmptyTodoPage';

const Home = () => {
  const { todo, setTodo } = useTodo();

  const todoString = JSON.stringify(todo);
  const storedTodo = localStorage.getItem('todos');

  useEffect(() => {
    if (storedTodo) {
      setTodo(JSON.parse(storedTodo));
    }
  }, []);

  // save todo to local Storage
  useEffect(() => {
    localStorage.setItem('todos', todoString);
  }, [todoString]);

  return (
    <main className="flex md:px-35 lg:px-70 flex-col items-center w-full h-dvh gap-10 px-8 sm:px-25">
      <Header />
      <Input />
      <ProgressCard />

      <section className="w-full">
        {todo.length > 0 ? (
          todo.map(({ id, todo, isCompleted }) => {
            return <Todo key={id} todoText={todo} isCompleted={isCompleted} id={id} />;
          })
        ) : (
          <EmptyTodoPage />
        )}
      </section>
    </main>
  );
};
export default Home;
