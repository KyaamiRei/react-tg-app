import React, { useEffect } from 'react';

import { useTelegram } from './hooks/useTelegram';

import './App.css';
import { Header } from './components/HeaderApp/HeaderApp';

function App() {
  const { tg, onTogleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className='App'>
      <Header />
      <button onClick={onTogleButton}>togle</button>
    </div>
  );
}

export default App;
