import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"

export type ProtectedRouteProps = {
    children : ReactNode
}

export default function ProtectedRoute({children}: ProtectedRouteProps ) {
    const isAuth = (localStorage.getItem('auth') )

    if(!isAuth){
        return <Navigate to='/' /> 
    }
    return children
}