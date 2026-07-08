import { Navigate, Outlet } from "react-router-dom"


export default function ProtectedRoute() {
    const isAuth = (localStorage.getItem('auth') )

    if(!isAuth){
        return <Navigate to='/' /> 
    }
    return <Outlet/>
}