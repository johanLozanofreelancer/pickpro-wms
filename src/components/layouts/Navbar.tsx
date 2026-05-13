import { useNavigate } from "react-router-dom"


export default function Navbar() {

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('auth')
        navigate ( '/')
    }
    return (
        <header className="bg-white rounded-2xl shadow-sm flex justify-between p-4 items-center">
            <h2 className="text-2xl font-bold">
                Dashboard
            </h2>
            <button 
                className="text-xl bg-amber-600 hover:bg-amber-900 text-white px-4 py-2 rounded-lg"
                onClick={handleLogout}
            >                
                Logout
            </button>
        </header>
    )
}