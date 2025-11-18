import { createContext } from 'react';

export interface TodoType {
  id: string;
  todo: string;
  isCompleted: boolean;
}

export interface TodoContextType {
  todo: TodoType[];
  setTodo: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export const TodoContext = createContext<TodoContextType | null>(null);
