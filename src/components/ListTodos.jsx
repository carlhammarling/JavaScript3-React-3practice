import { useState } from 'react'

const ListTodos = ({ todo, changeCompleted, deleteTodo }) => {

    return (
    <div>
        {
                <div className={`card ${todo.completed ? "completed" : ""}`} onClick={() => changeCompleted(todo)} >
                    <p>{todo.title}</p>
                    <p>{todo.id}</p>
                    <button onClick={(e) => deleteTodo(todo, e)} >remove</button>
                </div>
        }

    </div>
  )
}

export default ListTodos