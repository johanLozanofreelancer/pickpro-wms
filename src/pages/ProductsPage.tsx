import { useState } from "react"
import DashboardLayout from "../components/layouts/DashboardLayout"
import { products } from "../data/products"
import type { Product } from "../types"
import { Plus, Pencil, Trash2 } from "lucide-react"

export default function ProductsPage() {
    const [productList, setProductList] = useState<Product[]>(products)
    const [showModal, setShowModal] = useState(false)
    const [editingProduct, setEditingProduct] = useState<Product | null>(null)
    const [formData, setFormData] = useState({
        name: "",
        sku: "",
        category: "",
        price: "",
        description: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        if (editingProduct) {
            setProductList(productList.map(p => 
                p.id === editingProduct.id 
                    ? { ...p, ...formData, price: parseFloat(formData.price), updatedAt: new Date().toISOString() }
                    : p
            ))
        } else {
            const newProduct: Product = {
                id: Math.max(...productList.map(p => p.id)) + 1,
                ...formData,
                price: parseFloat(formData.price),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
            setProductList([...productList, newProduct])
        }
        
        setShowModal(false)
        setEditingProduct(null)
        setFormData({ name: "", sku: "", category: "", price: "", description: "" })
    }

    const handleEdit = (product: Product) => {
        setEditingProduct(product)
        setFormData({
            name: product.name,
            sku: product.sku,
            category: product.category,
            price: product.price.toString(),
            description: product.description || ""
        })
        setShowModal(true)
    }

    const handleDelete = (id: number) => {
        if (confirm("¿Estás seguro de eliminar este producto?")) {
            setProductList(productList.filter(p => p.id !== id))
        }
    }

    const handleAdd = () => {
        setEditingProduct(null)
        setFormData({ name: "", sku: "", category: "", price: "", description: "" })
        setShowModal(true)
    }

    return (
        <DashboardLayout>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Productos</h1>
                <button
                    onClick={handleAdd}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <Plus size={20} />
                    Agregar Producto
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm mt-6 overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">SKU</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Nombre</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Categoría</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Precio</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {productList.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm font-medium">{product.sku}</td>
                                <td className="px-6 py-4 text-sm">{product.name}</td>
                                <td className="px-6 py-4 text-sm">{product.category}</td>
                                <td className="px-6 py-4 text-sm font-medium">${product.price.toFixed(2)}</td>
                                <td className="px-6 py-4 text-sm">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleEdit(product)}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            <Pencil size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-4">
                            {editingProduct ? "Editar Producto" : "Agregar Producto"}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.sku}
                                        onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Precio</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        required
                                        value={formData.price}
                                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                                    {editingProduct ? "Actualizar" : "Agregar"}
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
