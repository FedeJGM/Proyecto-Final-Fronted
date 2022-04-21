import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

const OlvidePassword = () => {
  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})
  
   const handleSubmit = async e => {
     e.preventDefault()

     if (email === '' || email.length < 5) {
       setAlerta({ msg: "El correo es obligatorio", error: true })
       return
     }

     try {
       const { data } = await clienteAxios.post('/veterinarios/olvide-password', { email })
       setAlerta({msg: data.msg})

     } catch (error) {
       setAlerta({
         msg: error.response.data.msg,
         error: true
      })
     }

   }  
  
  const { msg } = alerta
  
  return (
    <>
      <div>
        <h1 className="text-indigo-700 font-black text-6xl"> Recupera Acceso a tu Cuenta y no pierdas tus {""}
          <span className="text-black">Pacientes</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        
        {msg && <Alerta
          alerta={alerta}
        />}
        
        <form
        onSubmit={handleSubmit}
        >
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
                        onChange={e => setEmail(e.target.value)}
            />
          </div>
          <input 
                        type="submit"
                        value="Enviar Instrucciones"
                        className="bg-indigo-600 w-full py-3 px-10 rounded-xl  text-white uppercase font-bold mt-4 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                    />
        </form>
        <nav className="mt-5 lg:flex lg:justify-between">
                    <Link
                        className="block text-center my-5 text-gray-600"
                        to="/">¿Ya tienes una cuenta? Inicia Sesión</Link>
                    <Link
                        className="block text-center my-5 text-gray-600"
                        to="/registrar">¿No tienes una cuenta? Regístrate</Link>
                </nav>
      </div>  
                 
    </>
  )
}

export default OlvidePassword