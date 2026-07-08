import { Route, Routes} from "react-router-dom"
import DashboardLayout from "./components/layouts/DashboardLayout"
import DashboardPage from "./pages/DashboardPage"
import InventoryPage from "./pages/InventoryPage"
import ProductsPage from "./pages/ProductsPage"
import MovementsPage from "./pages/MovementsPage"
import ProtectedRoute from "./components/ProtectedRoute"
import LoginPage from "./pages/LoginPage"

export default function App() {
    return (
        <>              
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route element={<ProtectedRoute/>}>
                    <Route element={<DashboardLayout />}>
                        <Route path="/dashboard" element={<DashboardPage/>} />
                        <Route path="/products" element={<ProductsPage/>} />
                        <Route path="/inventory" element={<InventoryPage/>} />
                        <Route path="/movements" element={<MovementsPage/>} />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}
