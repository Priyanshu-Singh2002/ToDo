import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [Todo, setTodo] = useState("")
  const [Todos, setTodoList] = useState([])


  const inputTodos = (e) => {
    Todo?setTodoList((prev) => [...prev, Todo]):alert("Please enter a task")
    setTodo('')
  }

  const inputDone = (e) => {
    setTodo(e.target.value)
  }


  return (
    <>
      <div className="Main1">
        <div className='Main2'>
          <h1>Todo App</h1>
          <div className="input">
            <input type="text" value={Todo} placeholder='Add a new task' onChange={inputDone} id="Inp1" />
            <button onClick={inputTodos} id='btn1'>Add</button>
          </div>
          <div className="todolist">
            <h2 style={{ textAlign: 'start', margin: '15px 0 0 0',color:'purple' }}>Todo List</h2>
            {Todos.map((todo,index) => {
              return <Card key={index} todo={todo} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
