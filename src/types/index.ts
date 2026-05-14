export type Worker = {
    id: number
    name: string
    email: string
    password: string
    role: boolean
}

export type Product = {
    id: number
    name: string
    sku: string
    category: string
    price: number
    description?: string
    createdAt: string
    updatedAt: string
}

export type InventoryItem = {
    id: number
    productId: number
    quantity: number
    location: string
    minStock: number
    maxStock: number
    lastUpdated: string
}

export type MovementType = 'entry' | 'exit' | 'transfer'

export type Movement = {
    id: number
    productId: number
    type: MovementType
    quantity: number
    fromLocation?: string
    toLocation?: string
    workerId: number
    date: string
    notes?: string
}