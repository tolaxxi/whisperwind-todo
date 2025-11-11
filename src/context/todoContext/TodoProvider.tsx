import { useState, type ReactNode } from 'react';
import { TodoContext, type TodoType } from './todoContext';

interface TodoProviderPropsType {
  children: ReactNode;
}
const TodoProvider = ({ children }: TodoProviderPropsType) => {
  const [todo, setTodo] = useState<TodoType[]>([]);

  const value = {
    todo,
    setTodo,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
export default TodoProvider;
