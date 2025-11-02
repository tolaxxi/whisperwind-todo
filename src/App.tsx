import ProgressContextProvider from './context/progressContext/ProgressContextProvider';
import Home from './pages/Home';

const App = () => {
  return (
    <ProgressContextProvider>
      <Home />
    </ProgressContextProvider>
  );
};
export default App;
