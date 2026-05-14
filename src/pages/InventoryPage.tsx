import { useState } from "react"
import DashboardLayout from "../components/layouts/DashboardLayout"
import { inventory } from "../data/inventory"
import { products } from "../data/products"
import type { InventoryItem } from "../types"
import { AlertTriangle, Package, TrendingUp, TrendingDown } from "lucide-react"

export default function InventoryPage() {
    const [inventoryList, setInventoryList] = useState<InventoryItem[]>(inventory)

    const getProductName = (productId: number) => {
        const product = products.find(p => p.id === productId)
        return product?.name || "Producto desconocido"
    }

    const getStockStatus = (item: InventoryItem) => {
        if (item.quantity <= item.minStock) {
            return { status: "critical", color: "text-red-600", bg: "bg-red-100", icon: AlertTriangle }
        } else if (item.quantity >= item.maxStock) {
            return { status: "high", color: "text-amber-600", bg: "bg-amber-100", icon: TrendingUp }
        } else {
            return { status: "normal", color: "text-green-600", bg: "bg-green-100", icon: TrendingDown }
        }
    }

    const updateStock = (id: number, change: number) => {
        setInventoryList(inventoryList.map(item => 
            item.id === id 
                ? { ...item, quantity: Math.max(0, item.quantity + change), lastUpdated: new Date().toISOString() }
                : item
        ))
    }

    const totalProducts = inventoryList.length
    const totalStock = inventoryList.reduce((sum, item) => sum + item.quantity, 0)
    const lowStockItems = inventoryList.filter(item => item.quantity <= item.minStock).length

    return (
        <DashboardLayout>
            <h1 className="text-3xl font-bold">Inventario</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-3 rounded-lg">
                            <Package className="text-blue-600" size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Total Productos</p>
                            <p className="text-2xl font-bold">{totalProducts}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-3 rounded-lg">
                            <TrendingUp className="text-green-600" size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Stock Total</p>
                            <p className="text-2xl font-bold">{totalStock}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-3 rounded-lg">
                            <AlertTriangle className="text-red-600" size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Stock Bajo</p>
                            <p className="text-2xl font-bold">{lowStockItems}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm mt-6 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Producto</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Ubicación</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Cantidad</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Estado</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {inventoryList.map((item) => {
                            const stockStatus = getStockStatus(item)
                            const Icon = stockStatus.icon
                            return (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-medium">{getProductName(item.productId)}</td>
                                    <td className="px-6 py-4 text-sm">{item.location}</td>
                                    <td className="px-6 py-4 text-sm font-bold">{item.quantity}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${stockStatus.bg} ${stockStatus.color}`}>
                                            <Icon size={14} />
                                            {stockStatus.status === "critical" ? "Crítico" : stockStatus.status === "high" ? "Alto" : "Normal"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => updateStock(item.id, 1)}
                                                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => updateStock(item.id, -1)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
                                            >
                                                -
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    )
}
