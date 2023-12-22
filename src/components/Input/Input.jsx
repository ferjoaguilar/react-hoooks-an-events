import {useState} from 'react'

export const Input = () => {

    // HOOKS
    const [valorInput, setValorInput] = useState("Patito")
    const [contador, setContador] = useState(0)

    // HOOKS REACT NATIVOS/VANILLA
    // HOOKS DE LA COMUNIDAD
    // HOOKS CUSTOMIZADOS


    // LOGICA
    const handleInput = (event) => {
        console.log("Escribiste: " + event.target.value)
        setValorInput(event.target.value)
    }

    const handleCounter = () => {
      setContador(contador + 1)
    }


  // RENDERIZADO
  return (
    <>
        <input 
            type="text" 
            placeholder="Hello" 
            onChange={handleInput }
        />

        <h2>El usuario tecleo: {valorInput}</h2>

        <h1>Contador: {contador}</h1>
        <button type="button" onClick={ handleCounter }>+1</button>

    </>
  )

}

