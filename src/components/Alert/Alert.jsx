import { useState } from "react"

export const Alert = () => {

  const [darkMode, setDarMode] = useState(false)

  const handleMode = () => {
    setDarMode(!darkMode)
    console.log(darkMode)
  }

  return (
   <>
    <h1 className="text-center">Alerta component</h1>
    <div className="container">
      <div className={`alert ${darkMode? "alert-dark": "alert-light"}`}>
        Bienvenido al modo { darkMode ? "oscuro": "claro" }
      </div>

      <button 
        className="btn btn-info"
        onClick={handleMode}
      >
        Change ? mode
      </button>
    </div>
   </>
  )
}
