import { useState, type ReactNode } from 'react';
import { ProgressContext, type ProgressContextType } from './ProgressContext';

interface ProgressContextProviderProps {
  children: ReactNode;
}
const ProgressContextProvider = ({ children }: ProgressContextProviderProps) => {
  const [progress, setProgress] = useState(0);

  const value: ProgressContextType = {
    progress,
    setProgress,
  };

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
};
export default ProgressContextProvider;
