import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LoginForm() {

    const[email,setEmail] = useState ('')
    const[password,setPassword] = useState ('')
    const navigate = useNavigate()
    const auth = true
    localStorage.setItem('auth', 'true')

    const handleSubmit = ((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (auth) {
            navigate ( '/Dashboard')
        }else {
            navigate( '/')
        }
    })

    return (
        <>
            <form className="p-10 max-w-md mx-auto " onSubmit={handleSubmit}>
                <legend className=" text-3xl font-bold text-white mb-8 text-center ">
                    Inicia Sesion en PickPro
                </legend>
                <div className="flex flex-col ">
                    <label htmlFor="email" className=" text-2xl my-5 text-white ">Email</label>
                    <input 
                    id="email"
                    type="email"
                    placeholder="Ingresa Tu email"
                    className="bg-white p-3 rounded-lg text-lg "
                    name="usuario"
                    value={email}       
                    onChange={(e)=> setEmail(e.target.value)}         
                    />
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="password" className=" text-2xl my-5 text-white ">Contraseña</label>
                    <input 
                    id="password"
                    type="password"
                    placeholder="Ingresa Tu contraseña"
                    className="bg-white p-3 rounded-lg text-lg "
                    name="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}                 
                    />
                </div>
                <div className="flex flex-col ">
                    <button
                        type="submit"
                        className=" bg-amber-600 hover:bg-amber-700 text-xl font-bold text-white p-3 rounded-lg mt-8 uppercase" 
                    > Iniciar Sesion
                    </button>
                </div>
            
            </form>
        </>
    )
}
