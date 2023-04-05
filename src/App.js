import React, { useEffect } from 'react';

import './App.css';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const { tg, onTogleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className='App'>
      сайт
      <button onClick={onTogleButton}>togle</button>
    </div>
  );
}

export default App;
