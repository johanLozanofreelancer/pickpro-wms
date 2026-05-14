import {NavLink } from "react-router-dom"
import { LayoutDashboardIcon, Package, Boxes, ArrowLeftRight, User } from "lucide-react"

export default function Sidebar() {
    const links = [
        {
            to: '/dashboard',
            label: 'Dashboard',
            icon: LayoutDashboardIcon
        },
        {
            to: '/products',
            label: 'Productos',
            icon: Package
        },
        {
            to: '/inventory',
            label: 'Inventario',
            icon: Boxes
        },
        {
            to: '/movements',
            label: 'Movimientos',
            icon: ArrowLeftRight
        }
    ]
    return (    
        <>
            <aside className="bg-amber-600 w-64 min-h-screen p-5">
                <h2 className="text-white text-3xl font-bold">
                    PickPro
                </h2>
                <nav className="mt-10 flex flex-col gap-3">
                    {links.map((link) => {
                        const Icon = link.icon
                        return (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-amber-300 font-medium block py-2 px-3 rounded-lg'
                                        : 'text-white block py-2 px-3 rounded-lg hover:bg-amber-900'
                                }
                            >
                                <div className="flex items-center gap-2">
                                    <Icon size={20} />
                                    <span>{link.label}</span>
                                </div>
                            </NavLink>

                        )
                    })}
                </nav>
            </aside>    
        </>
    )
}
