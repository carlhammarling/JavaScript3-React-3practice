import { useEffect } from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ListTodos from './components/ListTodos'
import ListForm from './components/ListForm'

const App = () => {

  const [update, setUpdate] = useState(false)
  const [todos, setTodos] = useState([])
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts?_limit=10')


  useEffect(() => {

    const getTodos = async () => {
      const res = await fetch(url)
      const data = await res.json()
      const todosCompleted = data.map(todo => ({...todo, completed: false}))
      setTodos(todosCompleted)
    }
    getTodos()
    
  }, [update])

  const addItem = (newTodo) => {
    setTodos(todos => [{...newTodo, id: uuidv4(), completed: false}, ...todos])
  }

  const changeCompleted = (updatedTodo) => {

    //Find the right todo
    const newTodos = todos.map(todo => {
      if(todo.id === updatedTodo.id) {
        todo.completed = !todo.completed
        console.log(todo)
      }
      return todo
      
    })

    //Set todo
    setTodos(newTodos)
  }

  const deleteTodo = (findTodo, e) => {
    e.stopPropagation()

    setTodos(todos.filter(todo => todo.id !== findTodo.id))
  }
  

  const clickHandler = () => {
    setUpdate(state => !state)
    // console.log(update)
  }

  
  

  return (
    <div>
      <h1>Hej</h1>
      <button  onClick={clickHandler}>Clicka</button>
      {
        todos.map(todo => (
          <ListTodos todo={todo} key={todo.id} changeCompleted={changeCompleted} deleteTodo={deleteTodo} />
        ))
      }
      <ListForm addItem={addItem} />
      

    </div>
  )
}

export default App