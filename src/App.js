import React from 'react';
import './App.css';
import Headers from './components/Headers.js'
import Todolist from './components/Todolist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="todo-app">
      <div className='img-light'>
      <Headers />
      </div>
      <Todolist />
      <Footer />
    </div>
  );
}

export default App;
