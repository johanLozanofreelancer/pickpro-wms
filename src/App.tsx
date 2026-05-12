import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductsPage from "./pages/ProductsPage";
import MovementsPage from "./pages/MovementsPage";
import InventoryPage from "./pages/InventoryPage";

export default function App() {


  return (
    <>
      <Routes>
        <Route 
          path="/"
          element={<LoginPage/>}
        />

        <Route 
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage>
                
              </DashboardPage>
            </ProtectedRoute>
          }
        />

        <Route 
          path="/inventory"
          element={<InventoryPage/>}
        />

        <Route 
          path="/products"
          element={<ProductsPage/>}
        />

        <Route 
          path="/movements"
          element={<MovementsPage/>}
        />


        
      </Routes>
    

    </>
  )
}
