import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
    <div>
                <h1 className="text-indigo-700 font-black text-5xl">Inicia Sesión y Administra tus {""}
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
             <div className="my-5">
                <label
                className="uppercase text-gray-700 block text-xl font-bold"
                > Contraseña
                </label>
                    <input 
                        type = "password"
                        placeholder="Digite su contraseña"
                        className="border w-full p-3 mt-3 bg-gray-100 rounded-xl"
                    />
                    </div>       
                    
                    <input 
                        type="submit"
                        value="Iniciar Sesión"
                        className="bg-indigo-600 w-full py-3 px-10 rounded-xl  text-white uppercase font-bold mt-4 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                    />
                </form>
                <nav className="mt-5 lg:flex lg:justify-between">
                    <Link
                        className="block text-center my-5 text-gray-600"
                        to="/registrar">¿No tienes una cuenta? Regístrate</Link>
                    <Link
                        className="block text-center my-5 text-gray-600"
                        to="/olvide-password">¿Olvidaste la contraseña? Entra aquí</Link>
                </nav>
         </div>
            
        </>
    
    );
};

export default Login;