import ProgressContextProvider from './context/progressContext/ProgressContextProvider';
import TodoProvider from './context/todoContext/TodoProvider';
import Home from './pages/Home';

const App = () => {
  return (
    <TodoProvider>
      <ProgressContextProvider>
        <Home />
      </ProgressContextProvider>
    </TodoProvider>
  );
};
export default App;
