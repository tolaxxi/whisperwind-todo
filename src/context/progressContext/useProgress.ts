import { useContext } from 'react';
import { ProgressContext } from './ProgressContext';

const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a progress context provider ');
  }
  return context;
};
export default useProgress;
