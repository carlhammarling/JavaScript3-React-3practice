import { useState } from 'react'

const ListForm = ({ addItem }) => {

    const [formData, setFormData] = useState({
        todo: '',
        description: ''
    })

    const handleChange = (e) => {
        setFormData(formData => {
            return {
                ...formData,
            [e.target.name]: e.target.value
        }
        })
    }
   
    const submitHandler = (e) => {
        e.preventDefault()

        const newTodo = {
            title: formData.todo,
            description: formData.description
        }

        addItem(newTodo)

        console.log(newTodo)

    }
  return (
    <div>
        <form className='card form' onSubmit={submitHandler}>
            <label htmlFor="todo">Add todo:</label>
            <input name="todo" type="text" value={formData.todo} onChange={handleChange}/>
            <input name="description" type="text" value={formData.description} onChange={handleChange}/>
            <button>Submit</button>

        </form>
    </div>
  )
}

export default ListForm