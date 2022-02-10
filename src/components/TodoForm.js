import React, {useState} from 'react';
import './TodoForm.css';

function TodoForm(props) {

  const [input, setInput] = useState('');

  const handleChange = e =>{
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };
  return  (<form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" 
            className='todo-input' 
            placeholder='type todo here'
            value={input}
            name="text"
            onChange={handleChange}
            >

            </input>
            <button className='todo-button'>Add To do</button>
            </form>)
        ;
}

export default TodoForm
