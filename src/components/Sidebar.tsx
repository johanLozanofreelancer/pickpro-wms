import { Link } from "react-router-dom"
export default function Sidebar() {
    
    return (    
        <>
            <aside className="bg-amber-600 w-64 min-h-screen p-5">
                <h2 className="text-white text-3xl font-bold">
                    PickPro
                </h2>
                <nav className="mt-10 flex flex-col gap-3">

                    <Link
                        to="/dashboard"
                        className="text-white text-lg py-2 px-3 rounded-lg hover:bg-amber-900 transition-colors"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/products"
                        className="text-white text-lg py-2 px-3 rounded-lg hover:bg-amber-900 transition-colors"
                    >
                        Productos
                    </Link>

                    <Link
                        to="/inventory"
                        className="text-white text-lg py-2 px-3 rounded-lg hover:bg-amber-900 transition-colors"
                    >
                        Inventario
                    </Link>

                    <Link
                        to="/movements"
                        className="text-white text-lg py-2 px-3 rounded-lg hover:bg-amber-900 transition-colors"
                    >
                        Movimientos
                    </Link>

                </nav>
            </aside>    
        </>
    )
}
