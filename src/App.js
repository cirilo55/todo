import React from 'react';
import './App.css';
// import Headers from './components/Headers.js'
import Todolist from './components/Todolist';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [isNight, setNight] = useState("false");
  
  const handleToggle = () => {
    setNight(!isNight);
  };

  return (
    <div className={`todo-app-${isNight ? "light": "dark"}`}>
      <div  className={`img-${isNight ? "light": 'dark'}`}>
      <div className='header'>
          <h1>TODO</h1>
        <div onClick={handleToggle} className={`icon-${isNight ? 'light': 'dark'}`}>
          </div>
        </div>
      </div>
      <Todolist />
      <Footer name={isNight} />
    </div>
  );
}

export default App;
