import React, { useEffect } from 'react';

import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.close();
  };

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className='App'>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
