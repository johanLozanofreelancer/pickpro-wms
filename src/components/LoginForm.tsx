import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { workers } from "../data/workers"

export default function LoginForm() {

    const[email,setEmail] = useState ('')
    const[password,setPassword] = useState ('')
    const[error,setError] = useState ('')
    const navigate = useNavigate()

    const handleSubmit = ((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')
        
        const worker = workers.find(w => 
            w.email.toLowerCase() === email.toLowerCase() && 
            w.password === password
        )
        
        if (worker) {
            localStorage.setItem('auth', 'true')
            localStorage.setItem('user', JSON.stringify(worker))
            navigate('/Dashboard')
        } else {
            setError('Credenciales inválidas')
        }
    })

    return (
        <>
            <form className="p-10 max-w-md mx-auto " onSubmit={handleSubmit}>
                <legend className=" text-3xl font-bold text-white mb-8 text-center ">
                    Inicia Sesion en PickPro
                </legend>
                {error && (
                    <div className="bg-red-500 text-white p-3 rounded-lg mb-4 text-center">
                        {error}
                    </div>
                )}
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
