import React, { useState } from 'react';
import './Todolist.css'
import TodoForm from './TodoForm';

function Todolist() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        //regex que apaga os espaços em branco.
        if(!todo.text || /^\s*$/.test(todo.text) ){
            return;
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(todo, ...todos);
    }

  return (<div>
            <TodoForm onSubmit={addTodo}/>
        </div>);
}
export default Todolist
