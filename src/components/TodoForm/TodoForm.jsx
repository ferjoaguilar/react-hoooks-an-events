import { useState } from "react"

const todosData = [
    {title: 'Todo 1', description: 'Description 1'},
    {title: 'Todo 2', description: 'Description 2'},
]

export const TodoForm = () => {

    const [todos, setTodos] = useState(todosData)

    const handleSubmit = (event) => {
        event.preventDefault()

        const title = event.target[0].value
        const description = event.target[1].value

        const newTodos = {
            title, 
            description
        }

        // OBTENER EL ESTADO ACTUAL HE INDICAR LO QUE QUIERO AGREGAR
        setTodos([...todos, newTodos])
    }

  return (
    <>
        <h1>My todo</h1>
        <form onSubmit={ handleSubmit}>
            <input type="text" className="form-control" placeholder="Title" />
            <textarea className="form-control mt-2" placeholder="Description"></textarea>
            <button className="btn btn-primary mt-2">Add new todo</button>
        </form>

        <ul className="list-group mt-5">
            {
                todos.map((todo, index) => (
                    <li key={index}>
                        <h2>{todo.title}</h2>
                        <p>{todo.description}</p>
                    </li>
                ))
            }
        </ul>

    </>
  )
}
