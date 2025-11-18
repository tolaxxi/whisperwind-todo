import { useContext } from 'react';
import { TodoContext } from './TodoContext';

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useContext must be used within a todoContextProvider');
  }
  return context;
};
