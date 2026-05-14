import { useState } from "react"
import DashboardLayout from "../components/layouts/DashboardLayout"
import { movements } from "../data/movements"
import { products } from "../data/products"
import { workers } from "../data/workers"
import type { Movement, MovementType } from "../types"
import { Plus, ArrowDown, ArrowUp, ArrowRight } from "lucide-react"

export default function MovementsPage() {
    const [movementList, setMovementList] = useState<Movement[]>(movements)
    const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] = useState({
        productId: "",
        type: "entry" as MovementType,
        quantity: "",
        fromLocation: "",
        toLocation: "",
        notes: ""
    })

    const getProductName = (productId: number) => {
        const product = products.find(p => p.id === productId)
        return product?.name || "Producto desconocido"
    }

    const getWorkerName = (workerId: number) => {
        const worker = workers.find(w => w.id === workerId)
        return worker?.name || "Desconocido"
    }

    const getMovementIcon = (type: MovementType) => {
        switch (type) {
            case "entry":
                return <ArrowDown className="text-green-600" size={20} />
            case "exit":
                return <ArrowUp className="text-red-600" size={20} />
            case "transfer":
                return <ArrowRight className="text-blue-600" size={20} />
        }
    }

    const getMovementTypeLabel = (type: MovementType) => {
        switch (type) {
            case "entry":
                return "Entrada"
            case "exit":
                return "Salida"
            case "transfer":
                return "Transferencia"
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        const currentUser = JSON.parse(localStorage.getItem('user') || '{}')
        
        const newMovement: Movement = {
            id: Math.max(...movementList.map(m => m.id)) + 1,
            productId: parseInt(formData.productId),
            type: formData.type,
            quantity: parseInt(formData.quantity),
            fromLocation: formData.type === "exit" || formData.type === "transfer" ? formData.fromLocation : undefined,
            toLocation: formData.type === "entry" || formData.type === "transfer" ? formData.toLocation : undefined,
            workerId: currentUser.id || 1,
            date: new Date().toISOString(),
            notes: formData.notes
        }
        
        setMovementList([newMovement, ...movementList])
        setShowModal(false)
        setFormData({
            productId: "",
            type: "entry",
            quantity: "",
            fromLocation: "",
            toLocation: "",
            notes: ""
        })
    }

    const handleAdd = () => {
        setFormData({
            productId: "",
            type: "entry",
            quantity: "",
            fromLocation: "",
            toLocation: "",
            notes: ""
        })
        setShowModal(true)
    }

    const todayEntries = movementList.filter(m => 
        m.type === "entry" && m.date.startsWith(new Date().toISOString().split('T')[0])
    ).length

    const todayExits = movementList.filter(m => 
        m.type === "exit" && m.date.startsWith(new Date().toISOString().split('T')[0])
    ).length

    return (
        <DashboardLayout>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Movimientos</h1>
                <button
                    onClick={handleAdd}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <Plus size={20} />
                    Registrar Movimiento
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-3 rounded-lg">
                            <ArrowDown className="text-green-600" size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Entradas Hoy</p>
                            <p className="text-2xl font-bold">{todayEntries}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="bg-red-100 p-3 rounded-lg">
                            <ArrowUp className="text-red-600" size={24} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Salidas Hoy</p>
                            <p className="text-2xl font-bold">{todayExits}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm mt-6 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Tipo</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Producto</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Cantidad</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Ubicación</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Trabajador</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Fecha</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {movementList.map((movement) => (
                            <tr key={movement.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        {getMovementIcon(movement.type)}
                                        <span className="font-medium">{getMovementTypeLabel(movement.type)}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm">{getProductName(movement.productId)}</td>
                                <td className="px-6 py-4 text-sm font-bold">{movement.quantity}</td>
                                <td className="px-6 py-4 text-sm">
                                    {movement.type === "transfer" 
                                        ? `${movement.fromLocation} → ${movement.toLocation}`
                                        : movement.type === "entry" 
                                            ? movement.toLocation 
                                            : movement.fromLocation
                                    }
                                </td>
                                <td className="px-6 py-4 text-sm">{getWorkerName(movement.workerId)}</td>
                                <td className="px-6 py-4 text-sm">{new Date(movement.date).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-4">Registrar Movimiento</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Movimiento</label>
                                    <select
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value as MovementType })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    >
                                        <option value="entry">Entrada</option>
                                        <option value="exit">Salida</option>
                                        <option value="transfer">Transferencia</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Producto</label>
                                    <select
                                        required
                                        value={formData.productId}
                                        onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    >
                                        <option value="">Seleccionar producto</option>
                                        {products.map(product => (
                                            <option key={product.id} value={product.id}>{product.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Cantidad</label>
                                    <input
                                        type="number"
                                        required
                                        min="1"
                                        value={formData.quantity}
                                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                                {(formData.type === "exit" || formData.type === "transfer") && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Ubicación Origen</label>
                                        <input
                                            type="text"
                                            required={formData.type === "exit"}
                                            value={formData.fromLocation}
                                            onChange={(e) => setFormData({ ...formData, fromLocation: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                            placeholder="Ej: A-01-01"
                                        />
                                    </div>
                                )}
                                {(formData.type === "entry" || formData.type === "transfer") && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Ubicación Destino</label>
                                        <input
                                            type="text"
                                            required={formData.type === "entry"}
                                            value={formData.toLocation}
                                            onChange={(e) => setFormData({ ...formData, toLocation: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                            placeholder="Ej: A-01-01"
                                        />
                                    </div>
                                )}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Notas</label>
                                    <textarea
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                        rows={3}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3 mt-6">
                                <button
                                    type="submit"
                                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-medium"
                                >
                                    Registrar
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-lg font-medium"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </DashboardLayout>
    )
}
