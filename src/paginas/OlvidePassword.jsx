import { Link } from "react-router-dom"

const OlvidePassword = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-700 font-black text-6xl"> Recupera Acceso a tu Cuenta y no pierdas tus {""}
          <span className="text-black">Pacientes</span></h1>
      </div>

       <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form>
           <div className="my-5">
                <label
                className="uppercase text-gray-700 block text-xl font-bold"
                > Correo
                </label>
                    <input 
                        type = "email"
                        placeholder="Correo de Registro"
                        className="border w-full p-3 mt-3 bg-gray-100 rounded-xl"
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