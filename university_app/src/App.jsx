import React from 'react';
import './App.css';
// Импортируем компоненты Welcome и Button
import { Button } from './components/Button/Button';
import { Message } from './components/Message/Message';
import { Welcome } from './components/Welcome/Welcome';

function App() {
  return (

      <div>
        {/* Используем компоненты Welcome и Button */}
        <Welcome name="Egor" />
        <Button />
        <Message/>
      </div>
    );
}

export default App;
