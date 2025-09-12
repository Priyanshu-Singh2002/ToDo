import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [Todo, setTodo] = useState({ id: "", text: "" })
  const [Todos, setTodos] = useState(() => {
    let todos = localStorage.getItem("todos")
   return todos?JSON.parse(todos):[]
  })

  useEffect(() => {
    console.log("Saving todos:", Todos)
    localStorage.setItem("todos", JSON.stringify(Todos))
  }, [Todos])



  const inputTodos = (e) => {
    if (Todo.text.trim() === "") {
      alert("Please enter a task")
      return
    }
    setTodos((prev) => [...prev, { ...Todo, id: nanoid() }])
    setTodo({ id: "", text: "" })   // reset properly
  }

  const inputDone = (e) => {
    /* setTodo({ ...Todo, id: nanoid(), text:e.target.value})
    This will keep regenerating a new id on every keypress.
    The id should only be created wh en adding the todo, not while typing.*/
    setTodo({ ...Todo, text: e.target.value })
  }


  const Edit = (id, newText) => {
    setTodos((prev) => {
      return prev.map((Todo) => {
        return Todo.id === id ? { ...Todo, text: newText } : Todo
      })
    })
  }

  const Delete = (id) => {
    setTodos(prev => {
      return prev.filter((todo) => {
        return todo.id !== id
      })
    })
  }

  return (
    <>
      <div className="Main1">
        <div className='Main2'>
          <h1>Todo App</h1>
          <div className="input">
            <input type="text" value={Todo?.text || ''} placeholder='Add a new task' onChange={inputDone} id="Inp1" />
            <button onClick={inputTodos} id='btn1'>Add</button>
          </div>
          <div className="todolist">
            <h2 style={{ textAlign: 'start', margin: '15px 0 0 0', color: 'purple' }}>Todo List</h2>
            {Todos.map((todo) => {
              return <Card key={todo.id} Edit={Edit} Delete={Delete} todo={todo} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
