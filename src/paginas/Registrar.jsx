import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

const Registrar = () => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repetirPassword, setRepetirPassword] = useState("")

  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();

    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({msg: "Hay campos vacios...", error: true})
      return;
    }
    if (password !== repetirPassword) {
      setAlerta({msg: "Las contraseñas no coinciden", error: true})
      return;
    }

    if (password.length < 6) {
      setAlerta({msg: "La contraseña es muy corta, agrega mínimo 6 carácteres", error: true})
      return;
    }

    setAlerta({})

    // Crear el usuario en la API
    try {
      await clienteAxios.post("/veterinarios", { nombre, email, password })
      setAlerta({
        msg: "Creado Correctamente, revisa tu correo",
        error: false
      })
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true 
      })
    }

  }
  
  const { msg } = alerta;
  
  return (
    <>
      <div>
        <h1 className="text-indigo-700 font-black text-6xl"> Crea tu Cuenta y Administra tus {""}
          <span className="text-black">Pacientes</span></h1>
      </div>
      
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        
        { msg && <Alerta
           alerta={alerta}
        />}
        
        <form
         onSubmit={handleSubmit}
        >
           <div className="my-5">
                <label
                className="uppercase text-gray-700 block text-xl font-bold"
                > Nombre
                </label>
                    <input 
                        type = "text"
                        placeholder="Digite su nombre"
                        className="border w-full p-3 mt-3 bg-gray-100 rounded-xl"
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}
            />
          </div>
             <div className="my-5">
                <label
                className="uppercase text-gray-700 block text-xl font-bold"
                > Correo
                </label>
                    <input 
                        type = "email"
                        placeholder="Correo de Registro"
              className="border w-full p-3 mt-3 bg-gray-100 rounded-xl"
              value={email}
                        onChange={ e => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
                <label
                className="uppercase text-gray-700 block text-xl font-bold"
                > Constraseña
                </label>
                    <input 
                        type = "password"
                        placeholder="Digite su contraseña"
              className="border w-full p-3 mt-3 bg-gray-100 rounded-xl"
              value={password}
                        onChange={ e => setPassword(e.target.value)}
            />
          </div>
          <div className="my-5">
                <label
                className="uppercase text-gray-700 block text-xl font-bold"
                > Repita Constraseña
                </label>
                    <input 
                        type = "password"
                        placeholder="Digite nuevamente su contraseña"
              className="border w-full p-3 mt-3 bg-gray-100 rounded-xl"
              value={repetirPassword}
                        onChange={ e => setRepetirPassword(e.target.value)}
            />
          </div>
          <input 
                        type="submit"
                        value="Crear Cuenta"
                        className="bg-indigo-600 w-full py-3 px-10 rounded-xl  text-white uppercase font-bold mt-4 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                    />
        </form>
        <nav className="mt-5 lg:flex lg:justify-between">
                    <Link
                        className="block text-center my-5 text-gray-600"
                        to="/">¿Ya tienes una cuenta? Inicia Sesión</Link>
                    <Link
                        className="block text-center my-5 text-gray-600"
                        to="/olvide-password">¿Olvidaste la contraseña? Entra aquí</Link>
                </nav>
          </div>
          
    </>
  )
}

export default Registrar