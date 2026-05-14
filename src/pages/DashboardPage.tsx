import { products } from "../data/products"
import { inventory } from "../data/inventory"
import { movements } from "../data/movements"
import StatCard from "../components/UI/StatCard"
import DashboardLayout from "../components/layouts/DashboardLayout"

export default function DashboardPage() {
    const totalProducts = products.length
    const totalStock = inventory.reduce((sum, item) => sum + item.quantity, 0)
    
    const today = new Date().toISOString().split('T')[0]
    const todayEntries = movements.filter(m => 
        m.type === "entry" && m.date.startsWith(today)
    ).reduce((sum, m) => sum + m.quantity, 0)
    
    const lowStockItems = inventory.filter(item => item.quantity <= item.minStock).length

    return (
        <>  
            <DashboardLayout>
                <h1 className="text-3xl font-bold">
                    Dashboard
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
                    <StatCard
                        title="Total Productos"
                        value={totalProducts.toString()}
                    />

                    <StatCard
                        title="Stock Total"
                        value={totalStock.toLocaleString()}
                    />

                    <StatCard
                        title="Entradas Hoy"
                        value={todayEntries.toString()}
                    />

                    <StatCard
                        title="Stock Bajo"
                        value={lowStockItems.toString()}
                    />

                </div>
            </DashboardLayout>
        </>
    )
}
