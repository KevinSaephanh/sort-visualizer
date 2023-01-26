import * as React from 'react';
import { Array } from './components/Array/Array';
import { Header } from './components/Header/header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  const [algorithm, setAlgorithm] = React.useState<string>('Algorithms');
  const [mode, setMode] = React.useState<string>('');
  const [sorting, setSorting] = React.useState<Boolean>(false);

  const handleClickAlgorithm = (e: any): void => {
    e.preventDefault();
    setAlgorithm(e.target.name);
  };

  const handleClickMode = (e: any): void => {
    e.preventDefault();
    setMode(e.target.name);

    // Reset mode to enable constant re-initialization of array
    if (e.target.name === 'Reset') {
      setTimeout(() => {
        setMode('');
      }, 100);
    }
  };

  const toggleSorting = (): void => {
    setSorting(!sorting);
  };

  return (
    <div>
      <Header
        algorithm={algorithm}
        mode={mode}
        sorting={sorting}
        handleClickAlgorithm={handleClickAlgorithm}
        handleClickMode={handleClickMode}
      />
      <Array algorithm={algorithm} mode={mode} toggleSorting={toggleSorting} />
    </div>
  );
};
