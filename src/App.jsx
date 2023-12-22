import { Alert } from "./components/Alert/Alert"
import { Input } from "./components/Input/Input"
import { TodoForm } from "./components/TodoForm/TodoForm"

function App() {
  // LOGICA Y MANEJO DE EVENTOS
  const handleButton = () => {
    console.log("Estas presionando el boton")
  }



  const handleForm = (event) => {
    event.preventDefault()

    //console.log(event.target[0].value);

    const data = new FormData(event.target)
    console.log(data.get("name"))
    console.log(data.get("email"))
    console.log(data.get("password"))
  }


  // RENDERIZADO
  return (
    <>
      <h1>Hola desde React</h1>
      <button onClick={ handleButton }>Preciona el boton</button>

      <Input />

      <Alert />

      <TodoForm />

      <form className="mt-5" onSubmit={ handleForm }>
        <input type="text" name="name" placeholder="Name"/>
        <input type="text" name="email" placeholder="Email"/>
        <input type="password" name="password" placeholder="Password"/>

        <button type="submit">Enviar formulario</button>
      </form>



    </>
  )
}

export default App
